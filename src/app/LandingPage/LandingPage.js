import Hero from "./HeroSection/Hero";
import 'swiper/css';
import Products from "./ProductsCards/Products";
import Brands from "./Brands/Brands";
import ProductModel from "./ProductModel/ProductModel";
import Trending from "./TrandingProducts/page";


const LandingPage = () => {
    return (
        <>
            <Hero />
            <Products />
            <Trending />
            <Brands />
            <ProductModel />
        </>
    );
};

export default LandingPage;