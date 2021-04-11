import React, {useState} from "react";
import { useStore } from "../store";

const Item: React.FC = () => {

    const searchItem = useStore((state) => state.searchItem);
    const [searchInput, setSearchInput] = useState('');

    const handleSearchButon = () =>{
        searchItem(searchInput);
    }

    const handleSearchInput = () => {
        if(searchInput.length===1){
            searchItem("");
        }
    }

    return (
        <div className="p-6 bg-green-400 rounded flex flex-row shadow justify-between">
            <h1 className="font-sans font-bold text-4xl	text-white">MOVIES</h1>
            <div className="flex flex-row">
                <input onChange={(e) => {setSearchInput(e.target.value); handleSearchInput()}} className="pl-2 border-transparent rounded-l-md	border focus:outline-none"></input>
                <button onClick={handleSearchButon}  className="bg-gray-200 rounded-r-md hover:bg-gray-300 focus:outline-none pl-2 pr-2 text-md font-medium text-gray-900	border-none	">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Item;
