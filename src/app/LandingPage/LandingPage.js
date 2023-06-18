import Hero from "./HeroSection/Hero";
import 'swiper/css';
import Products from "./ProductsCards/Products";
import Brands from "./Brands/Brands";
import ProductModel from "./ProductModel/ProductModel";


const LandingPage = () => {
    return (
        <>
            <Hero />
            <Products />
            <Brands />
            <ProductModel />
        </>
    );
};

export default LandingPage;