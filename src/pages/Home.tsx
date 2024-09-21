import Layout from "../components/Layout";
import Card from "../components/Card";
import Filters from "../components/Filters";
import { IoIosList } from "react-icons/io";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useState } from "react";
import ImgCard from "../assets/image-card.svg";
import SearchBox from "../components/SearchBox";
const Home: React.FC = () => {
  const [listStyle, setListStyle] = useState("grid");
  return (
    <Layout>
      <div className="flex justify-around mb-8 mx-4 mr-8">
        <SearchBox />
        <button className="mr-auto ml-4 ">
          {listStyle === "grid" ? (
            <IoIosList size={45} onClick={() => setListStyle("list")} />
          ) : (
            <HiOutlineSquares2X2
              size={45}
              onClick={() => setListStyle("grid")}
            />
          )}
        </button>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <Filters />
        <div className="w-full">
          <div
            className={`w-full gap-4 p-4 grid ${
              listStyle == "grid" ? "lg:grid-cols-2" : "lg:grid-cols-1"
            }`}
          >
            <Card
              listStyle = {listStyle}
              title="شركة التميز للديكور"
              description="خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي"
              imageUrl={ImgCard}
            />
            <Card
              listStyle = {listStyle}
              title="شركة التميز للديكور"
              description="خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي"
              imageUrl={ImgCard}
            />
            <Card
              listStyle = {listStyle}
              title="شركة التميز للديكور"
              description="خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي"
              imageUrl={ImgCard}
            />
            <Card
              listStyle = {listStyle}
              title="شركة التميز للديكور"
              description="خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي"
              imageUrl={ImgCard}
            />
            <Card
              listStyle = {listStyle}
              title="شركة التميز للديكور"
              description="خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي"
              imageUrl={ImgCard}
            />
            <Card
              listStyle = {listStyle}
              title="شركة التميز للديكور"
              description="خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي"
              imageUrl={ImgCard}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
