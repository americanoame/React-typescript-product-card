import Slide from "../components/Slide";
import useSlider from '../useSlider';

const Slider: React.FC = () => {
  const { curSlide, nextSlide, prevSlide, goToSlide, data } = useSlider();

  return (
    <div className="slider-wrapper">
      <div className="slider">
        <Slide slide={data[curSlide]} />
      </div>

      <div className="dots">
        {data.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === curSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div>
        <button onClick={prevSlide} className="slider__btn slider__btn--left">
          &larr;
        </button>
        <button onClick={nextSlide} className="slider__btn slider__btn--right">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Slider;
