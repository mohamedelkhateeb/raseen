import image from "../assets/image.svg";
const HeroSection: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 md:min-h-80"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-[#403D3FCC] bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl text-white">
          الرئيسية • خدمات رصين • <span className="text-[#EA8D09]">المكاتب الهندسية</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
