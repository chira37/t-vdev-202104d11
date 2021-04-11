import create from "zustand";
import {Services} from '../axios'

type State = {
    items: [];
    filterItems: [];
    loading: boolean,
    error: string
    fetchItem: () => void;
    searchItem: (word: string) => void;
};

export const useStore = create<State>((set, get) => ({
  items: [],
  filterItems: [],
  loading: false,
  error: "",

  fetchItem: () => {
    set({loading: true})
    Services.getMovies()
    .then((res) => { set({loading: false, error: '', items: res.data, filterItems: res.data })
    })
    .catch((error) => { set({loading: false, error: error.message})})
  },


  searchItem: (word) => {
    const { items } = get();
    const filter:any = items.filter((item:{name: string, description: string}) => item.name.toLowerCase().includes(word.toLowerCase()) || item.description.toLowerCase().includes(word.toLowerCase()))
    set({filterItems: filter})
  },
}));
