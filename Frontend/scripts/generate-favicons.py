import os
from PIL import Image, ImageEnhance

# Paths
FRONTEND_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
LOGO_PATH = os.path.join(FRONTEND_DIR, 'src', 'assets', 'logo.png')
PUBLIC_DIR = os.path.join(FRONTEND_DIR, 'public')
DIST_DIR = os.path.join(FRONTEND_DIR, 'dist')

def extract_and_generate():
    print(f"Loading logo from: {LOGO_PATH}")
    logo = Image.open(LOGO_PATH).convert('RGBA')
    
    # 1. Extract exact orange symbol
    # The symbol is located in Y < 250, completely separated from the text below Y >= 265
    top_region = logo.crop((0, 0, logo.width, 250))
    alpha = top_region.split()[3]
    bbox = alpha.getbbox()
    print(f"Detected symbol bbox: {bbox} (width: {bbox[2] - bbox[0]}, height: {bbox[3] - bbox[1]})")
    
    symbol = top_region.crop(bbox)
    orig_w, orig_h = symbol.size
    aspect = orig_w / orig_h
    print(f"Extracted pure symbol: {orig_w}x{orig_h}, aspect ratio: {aspect:.4f}")

    def create_canvas_icon(size, fill_ratio=0.88, sharpen=False, custom_w=None, custom_h=None):
        canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        if custom_w and custom_h:
            target_w, target_h = custom_w, custom_h
        else:
            target_w = int(round(size * fill_ratio))
            target_h = int(round(target_w / aspect))
            if target_h > size:
                target_h = int(round(size * fill_ratio))
                target_w = int(round(target_h * aspect))
        
        resized = symbol.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        if sharpen:
            enhancer = ImageEnhance.Sharpness(resized)
            resized = enhancer.enhance(1.35)
        
        offset_x = (size - target_w) // 2
        offset_y = (size - target_h) // 2
        canvas.paste(resized, (offset_x, offset_y), resized)
        return canvas

    # Generate icons for ICO: 16x16, 32x32, 48x48
    icon_16 = create_canvas_icon(16, fill_ratio=0.92, sharpen=True, custom_w=14, custom_h=10)
    icon_32 = create_canvas_icon(32, fill_ratio=0.90, sharpen=True, custom_w=28, custom_h=19)
    icon_48 = create_canvas_icon(48, fill_ratio=0.88)
    
    # Generate requested sizes
    icon_96 = create_canvas_icon(96, fill_ratio=0.88)
    icon_180 = create_canvas_icon(180, fill_ratio=0.88)
    icon_192 = create_canvas_icon(192, fill_ratio=0.88)
    icon_512 = create_canvas_icon(512, fill_ratio=0.88)

    targets = [PUBLIC_DIR]
    if os.path.exists(DIST_DIR):
        targets.append(DIST_DIR)

    for target_dir in targets:
        os.makedirs(target_dir, exist_ok=True)
        
        # 1. favicon.ico containing 16x16, 32x32, 48x48
        ico_path = os.path.join(target_dir, 'favicon.ico')
        icon_48.save(
            ico_path,
            format='ICO',
            sizes=[(16, 16), (32, 32), (48, 48)],
            append_images=[icon_16, icon_32]
        )
        print(f"[OK] Saved {ico_path} (multi-res: 16, 32, 48)")

        # 2. Square transparent PNGs
        p48 = os.path.join(target_dir, 'favicon-48x48.png')
        icon_48.save(p48, format='PNG', optimize=True)
        print(f"[OK] Saved {p48}")

        p96 = os.path.join(target_dir, 'favicon-96x96.png')
        icon_96.save(p96, format='PNG', optimize=True)
        print(f"[OK] Saved {p96}")

        p192 = os.path.join(target_dir, 'favicon-192x192.png')
        icon_192.save(p192, format='PNG', optimize=True)
        print(f"[OK] Saved {p192}")

        p512 = os.path.join(target_dir, 'favicon-512x512.png')
        icon_512.save(p512, format='PNG', optimize=True)
        print(f"[OK] Saved {p512}")

        # 3. Primary favicon.png (192x192 transparent square for high-DPI & Google search compatibility)
        p_fav = os.path.join(target_dir, 'favicon.png')
        icon_192.save(p_fav, format='PNG', optimize=True)
        print(f"[OK] Saved {p_fav}")

        # 4. apple-touch-icon.png (180x180)
        p_apple = os.path.join(target_dir, 'apple-touch-icon.png')
        icon_180.save(p_apple, format='PNG', optimize=True)
        print(f"[OK] Saved {p_apple}")

    print("\nFavicon generation complete!")

if __name__ == '__main__':
    extract_and_generate()
