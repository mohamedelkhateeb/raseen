import { ChangeEvent } from 'react';
import { MdAttachFile } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa'; // Trash icon for removing images
import { Order } from '@/types/models/order.model';
import { CarouselSize } from '@/components/common/carousel';
import { CarouselItem } from '@/components/ui/carousel';

interface MultiImageUploadProps {
  data: Order & { imagesToUpload: any[] };
  setData: (data: Order & { imagesToUpload: any[] }) => void;
}

const MultiImageUpload: React.FC<MultiImageUploadProps> = ({ data, setData }) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageFiles = files?.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setData({
        ...data,
        images: [...data.images, ...imageFiles],
        imagesToUpload: [...data.imagesToUpload, ...files],
      });
    }
  };
  const removeImage = (indexToRemove: number) => {
    const updatedImages = data.images.filter((_, index) => index !== indexToRemove);
    const updatedImagesToUpload = data.imagesToUpload.filter((_, index) => index !== indexToRemove);
    setData({
      ...data,
      images: updatedImages,
      imagesToUpload: updatedImagesToUpload,
    });
  };
  return (
    <div className="col-span-2 lg:col-span-1">
      <div className="col-span-2 grid w-full gap-1.5">
        <p className="py-4 font-semibold lg:text-xl">إرفاق صور أو مخطط (اختياري)</p>
        <label htmlFor="upload" className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
          أرفق الصور أو المخطط
          <MdAttachFile className="absolute bottom-5 end-4 rotate-45 text-3xl" />
        </label>
        <input type="file" id="upload" className="hidden" accept="image/*" multiple onChange={handleImageChange} />
      </div>
      <div className="mt-4">
        <CarouselSize>
          {data.images?.map((image, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="group relative w-full">
                <img src={image.preview} alt={`Preview ${index}`} className="h-40 w-full rounded-lg object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute right-2 top-2 rounded-full bg-red-500 p-4 text-white opacity-0 transition-opacity hover:bg-red-700 group-hover:opacity-100"
                  aria-label="Remove image"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselSize>
      </div>
    </div>
  );
};

export default MultiImageUpload;
