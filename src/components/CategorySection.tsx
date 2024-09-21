// components/CategorySection.tsx
import React from "react";

interface CategorySectionProps {
  title: string;
  categories: string[];
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = React.useState<number>(0);

  const handleCategoryClick = (category: number) => {
    setActiveCategory(category);
  };
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-5">{title}</h3>
      <div className="gap-6 grid w-[418px] grid-cols-2">
        {categories.map((category, index) => (
          <button
            onClick={() => handleCategoryClick(index)}
            key={index}
            className={
              "border rounded px-4 py-4  transition bg-[Stroke] font-medium" +
              (index === activeCategory ? " border-primary bg-[#00426708]" : "")
            }
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
