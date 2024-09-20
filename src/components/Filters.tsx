import React, { useState } from "react";
import CategorySection from "./CategorySection";
import RangeSlider from "./RangeSlider";
import Dropdown from "./Dropdown";

const Sidebar: React.FC = () => {
  const [price, setPrice] = useState(1005);
  const [rating, setRating] = useState(4);

  return (
    <aside className="w-[500px] p-9">
      <CategorySection
        title="القسم الرئيسي"
        categories={["المكاتب الهندسية", "مقاولات وديكور"]}
      />
      <CategorySection
        title="القسم الفرعي"
        categories={[
          "مخططات 2D",
          "مخططات 3D",
          "تصميم واجهات خارجية",
          "خدمات تصاميم كاملة",
          "مخططات كاملة",
        ]}
      />
      <RangeSlider
        label="السعر"
        min={1005}
        max={1000005}
        value={price}
        onChange={setPrice}
      />
      <RangeSlider
        label="التقييم"
        min={1}
        max={4}
        value={rating}
        onChange={setRating}
      />
      <Dropdown
        label="المدينة"
        options={["حدد المدينة", "الرياض", "جدة", "الدمام"]}
      />
    </aside>
  );
};

export default Sidebar;
