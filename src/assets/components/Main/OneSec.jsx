import Carousel from "../other/carousel/Carousel";
import CarouselApi from "../other/carousel/Carousel-Api";

const OneSec = () => {
  return (
    <section className="onesec">
      <p className="bg-black h-12 w-[100%] text-white flex items-center justify-center font-jost">
        <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer</p>
        <a href="#" className="underline underline-offset-4 text-bej hover:tracking-wider p-2 font-medium">Shop Now</a>
      </p>
      <Carousel />
      <CarouselApi />
    </section>
  );
};

export default OneSec;
