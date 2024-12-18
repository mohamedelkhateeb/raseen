import { ChangeEvent } from 'react';
import { MdAttachFile } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa'; // Trash icon for removing images
import { CarouselSize } from '@/components/common/carousel';
import { CarouselItem } from '@/components/ui/carousel';

export interface UploadedImage {
  file: File;
  preview: string;
}

interface MultiImageUploadProps {
  images: UploadedImage[];
  setImages: any;
  label?: string;
  placeholder?: string;
  maxImages?: number;
}

const MultiImageUpload: React.FC<MultiImageUploadProps> = ({
  images,
  setImages,
  label = 'Upload Images',
  placeholder = 'Drag and drop or click to upload',
  maxImages,
}) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageFiles = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      const newImages = [...images, ...imageFiles].slice(0, maxImages || Infinity); // Limit images if maxImages is provided
      setImages(newImages);
    }
  };

  const removeImage = (indexToRemove: number) => {
    const updatedImages = images.filter((_, index) => index !== indexToRemove);
    setImages(updatedImages);
  };

  return (
    <div className="col-span-2 lg:col-span-1">
      <div className="col-span-2 grid w-full gap-1.5">
        {label && <p className="py-4 font-semibold lg:text-xl">{label}</p>}
        <label htmlFor={label} className="text-medium relative cursor-pointer rounded-2xl border-2 px-5 py-6">
          {placeholder}
          <MdAttachFile className="absolute bottom-5 end-4 rotate-45 text-3xl" />
        </label>
        <input type="file" id={label} className="hidden" accept="image/*" multiple onChange={handleImageChange} />
      </div>
      <div className="mt-4">
        <CarouselSize>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="group relative w-full">
                <img src={image.preview} alt={`Preview ${index}`} className=" w-full h-full rounded-lg object-cover" />
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
