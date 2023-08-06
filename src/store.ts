import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
  genreId?: number | null;
  platformId?: number | null;
  sortOrder?: string;
  searchText?: string | null;
  //   rating: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrderId: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setSortOrderId: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useGameQueryStore);

export default useGameQueryStore;
