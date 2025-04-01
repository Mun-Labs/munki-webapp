import { useEffect, useState } from "react";
import { create, StateCreator } from "zustand";
import { persist, createJSONStorage, PersistOptions } from "zustand/middleware";
import { TokenDetail } from "../../api/apiTypes";
import { useTokenDetailApi } from "../../api/hooks/useTokenDetailApi";
import { useParams } from "react-router";

interface State {
  data: TokenDetail | null;
  isLoading: boolean;
  setItem: (item: TokenDetail) => void;
  setLoading: (value: boolean) => void;
}

type MyPersist = (
  config: StateCreator<State>,
  options: PersistOptions<State>,
) => StateCreator<State>;

export const createTokenDetailsStore = create<State>(
  (persist as MyPersist)(
    (set) => ({
      data: null,
      isLoading: false,
      setItem: (item: TokenDetail | null) => {
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
      name: "token-details",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useTokenDetailsStore = (_tokenName?: string) => {
  const params = useParams<{ tokenName: string }>();
  const { tokenName } = params;
  const [tokenData, setTokenData] = useState<TokenDetail | null>(null);
  const { data, isLoading } = useTokenDetailApi(tokenName!); // on details page, should have param

  useEffect(() => {
    if (data && !isLoading) {
      setTokenData(data.response);
    }
  }, [data, isLoading]);

  return { tokenData, isLoading };
};
