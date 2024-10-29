import { Category } from '@/types/models/home.model';
import { create } from 'zustand';

interface UserOrderState {
  categories: any[];
  setCategoris: (category: Category) => void;
}

const useOrderStore = create<UserOrderState>()((set) => ({
  categories: [],
  setCategoris: (category) => set((state) => ({ categories: [...state.categories, category] })),
}));

export default useOrderStore;
