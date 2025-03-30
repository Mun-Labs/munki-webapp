import { create, StateCreator } from "zustand";
import { persist, createJSONStorage, PersistOptions } from "zustand/middleware";
import { TokenAnalytics } from "../../api/apiTypes";

interface State {
  data: TokenAnalytics | null;
  isLoading: boolean;
  setItem: (item: TokenAnalytics) => void;
  setLoading: (value: boolean) => void;
}

type MyPersist = (
  config: StateCreator<State>,
  options: PersistOptions<State>,
) => StateCreator<State>;

export const useTokenAnalyticsStore = create<State>(
  (persist as MyPersist)(
    (set) => ({
      data: null,
      isLoading: false,
      setItem: (item: TokenAnalytics | null) => {
        set((state) => {
          state.data = item;
          return state;
        });
      },
      setLoading: (value: boolean) => {
        set((state) => {
          state.isLoading = value;
          return state;
        });
      },
    }),
    {
      name: "token-analytics",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
