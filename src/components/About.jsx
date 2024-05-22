import Button from "./Button";
import Image from "../assets/Image.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row py-[4%]">
      <div className="w-full md:w-1/2 bg-orange-200 flex items-center justify-center">
        <div className="w-full md:w-1/2 p-10 md:p-0 flex flex-col gap-4 items-start">
          <h1 className="text-xl md:text-2xl text-[#383838] font-bold">
            Experience clear vision with OptiChroma Vision Frames
          </h1>
          <p className="text-[#545454]">
            At OptiChroma, we believe that everyone deserves clear vision and
            stylish eyewear. That&#65040;s why we&#65040;ve designed a
            collection of frames that prioritize both form and function.
            <br />
            Our team of experts is dedicated to helping you find the perfect
            pair of glasses.
          </p>
          <Button>About Us</Button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={Image} alt="Image" className="w-full" />
      </div>
    </div>
  );
};

export default About;
