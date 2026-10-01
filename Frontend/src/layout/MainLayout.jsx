import {Outlet, useLocation} from 'react-router-dom'
import {Footer} from '../components/Footer'
import {Navbar} from '../components/Navbar'

export function MainLayout(){
    const location=useLocation();

    return(
        <div>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-ink">
                Skip to content
            </a>
            <Navbar/>
            <main id="main-content">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
