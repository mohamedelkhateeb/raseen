import { Category } from '@/types/models/home.model';

interface SubCategoryPropsFilter {
  title: string;
  categories: Category[];
  dataFilter: string;
  setDataFilter: (filter: string) => void;
}

const SubCategoryFilter = ({ title, categories, dataFilter = '', setDataFilter }: SubCategoryPropsFilter) => {
  const selectedIds: string[] = dataFilter ? dataFilter.split(',') : [];
  const toggleCategory = (id: number) => {
    const updatedIds = selectedIds.includes(id.toString()) ? selectedIds.filter((subId) => subId !== id.toString()) : [...selectedIds, id.toString()];
    setDataFilter(updatedIds.join(','));
  };

  return (
    <div className="mb-6">
      <h3 className="mb-5 text-lg font-bold">{title}</h3>
      <div className="grid grid-cols-2 gap-6 sm:w-[418px]">
        {categories?.map((c) => (
          <button
            onClick={() => toggleCategory(c.id)}
            key={c.id}
            className={
              'rounded border bg-[Stroke] px-4 py-4 font-medium transition' +
              (selectedIds.includes(c.id.toString()) ? ' border-primary bg-[#00426708]' : '')
            }
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryFilter;
