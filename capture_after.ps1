$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$outDir = "C:\Users\sowmy\Downloads\zestbotz_improved_ui\ZestBotz-Solutions\docs\screenshots\after"

if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$pages = @(
    @{ name = "home"; path = "/" },
    @{ name = "about"; path = "/about" },
    @{ name = "services"; path = "/services" },
    @{ name = "contact"; path = "/contact" },
    @{ name = "careers"; path = "/careers" },
    @{ name = "products"; path = "/products" },
    @{ name = "industries"; path = "/industries" },
    @{ name = "work"; path = "/work" }
)

$viewports = @(
    @{ name = "desktop"; width = 1440; height = 900 },
    @{ name = "tablet";  width = 768;  height = 1024 },
    @{ name = "mobile";  width = 375;  height = 812 }
)

$baseUrl = "http://localhost:4173"

foreach ($vp in $viewports) {
    foreach ($pg in $pages) {
        $outFile = Join-Path $outDir "$($vp.name)_$($pg.name).png"
        $targetUrl = "$baseUrl$($pg.path)"
        Write-Host "Capturing $($vp.name) $($pg.name) -> $outFile"
        
        $argsList = @(
            "--headless=new",
            "--screenshot=$outFile",
            "--window-size=$($vp.width),$($vp.height)",
            "--hide-scrollbars",
            "--run-all-compositor-stages-before-draw",
            $targetUrl
        )
        
        Start-Process -FilePath $chrome -ArgumentList $argsList -Wait
        Start-Sleep -Milliseconds 400
        
        if (Test-Path $outFile) {
            $sz = (Get-Item $outFile).Length
            Write-Host "  Success: $sz bytes"
        } else {
            Write-Host "  FAILED: File not created"
        }
    }
}
Write-Host "All after screenshots captured."
