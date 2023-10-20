import slide1 from '../../assets/1-sony-x95k-review.jpg';
import slide2 from '../../assets/androidtablets-2048px-tabs8.jpg';
import slide3 from '../../assets/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg';
import slide4 from '../../assets/latest-edition-led-watch-500x500.png';

const ProductBanner = () => {
    return (
       <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full lg:h-[550px] ">
    <img src={slide1} className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full lg:h-[550px] ">
    <img src={slide2} className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full lg:h-[550px] ">
    <img src={slide3} className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full lg:h-[550px] ">
    <img src={slide4} className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
       </div>    
    );
};

export default ProductBanner;