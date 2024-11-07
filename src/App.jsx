
import './App.css'
import { Cal } from './components/hero/hero-top/hero-top-contact/contact.jsx'
import { Midle } from './components/hero/hero-midle/midle.jsx'
import { HeroBtn } from './components/hero/hero-btn/hero-button.jsx'
import { Banner } from './components/banner/banner.jsx'
import { Catalog } from './components/catalog/catalog.jsx'
import { Product } from './components/product/product.jsx'


function App() {


    return (
        <>
            <div>

                <Cal />
                <Midle />
                <HeroBtn />
                <Banner />
                <Product />
                <Catalog />


            </div>
        </>
    )
}

export default App
