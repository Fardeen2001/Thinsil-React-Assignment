// importing poster image from assests
import poster from "../../assets/poster.jpg";
const HeroSection = () => {
  return (
    <>
      {/* hero section component */}
      {/* image */}
      <img src={poster} alt="poster" className="md:h-[50vh] w-full pt-16" />
    </>
  );
};

export default HeroSection;
