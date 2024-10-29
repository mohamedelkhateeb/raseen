import { useState } from 'react';
import toast from 'react-hot-toast';

const MAX_FILE_SIZE_MB = 5;

interface UseImageUploadReturn {
  imageUrl: string | null;
  error: string | null;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetImage: () => void;
}

export const useImageUpload = (): UseImageUploadReturn => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        toast.error('يجب ان يكون حجم الصورة او الملف لا يزيد عن 5 ميجا بايت');
        setImageUrl(null);
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      setError(null);
    }
  };

  const resetImage = () => {
    setImageUrl(null);
    setError(null);
  };

  return {
    imageUrl,
    error,
    handleImageChange,
    resetImage,
  };
};
