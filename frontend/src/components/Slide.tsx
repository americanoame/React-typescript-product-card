import { SlideData } from '../types';

interface SlideProps {
  slide: SlideData;
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="slide">
      <div className="slider-container">
        <div>
          <img src={slide.image} alt={slide.header} className="slider-img" />
        </div>
        <div className="slider-content">
          <h5 className="slider-content-header">{slide.header}</h5>
          <blockquote className="slider-content-text">{slide.text}</blockquote>
        </div>
      </div>
    </div>
  );
};

export default Slide;