import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { slides } from "./slides";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="h-[500px] w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 backdrop-blur-[5px]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {(() => {
                    const { title, highlight } = slide;
                    const parts = title.split(
                      new RegExp(`(${highlight})`, "gi")
                    );
                    return parts.map((part, idx) =>
                      part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={idx} className="text-primary-orange">
                          {part}
                        </span>
                      ) : (
                        <span key={idx}>{part}</span>
                      )
                    );
                  })()}
                </h1>

                <p className="text-lg md:text-xl text-white mb-8">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {slide.buttons.map((button, btnIndex) => {
                    const to =
                      button.text === "Explore Our Services"
                        ? "/service"
                        : button.text === "Request a Consultation"
                        ? "/contact"
                        : "#";

                    return (
                      <Link key={btnIndex} to={to}>
                        <button
                          className={`px-8 py-3 rounded-md text-lg font-semibold transition-colors ${
                            button.primary
                              ? "bg-primary-blue hover:bg-primary-orange text-white border border-transparent"
                              : "bg-white hover:bg-primary-orange hover:text-white"
                          }`}
                        >
                          {button.text}
                        </button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
