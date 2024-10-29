import { create } from 'zustand';

export interface UserSettings {
  auth: {
    otp?: number;
    phone: string;
  };
}
interface UserSettingsState {
  settings: UserSettings;
  setUserauth: (auth: { otp: number; phone: string }) => void;
}

const useUserStore = create<UserSettingsState>()((set) => ({
  settings: {
    auth: {
      otp: 0,
      phone: '',
    },
  },
  setUserauth: (auth) => set((state) => ({ settings: { ...state.settings.auth, auth } })),
}));

export default useUserStore;
