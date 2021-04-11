import React, { useState, useEffect } from "react";

import Item from "./componets/Item";
import Search from "./componets/Search";
import Alert from "./componets/Alert";

import { useStore } from "./store";

function App() {
    const fetchItem = useStore((state) => state.fetchItem);
    const items = useStore((state) => state.items);
    const filterItems = useStore((state) => state.filterItems);
    const loading = useStore((state) => state.loading);
    const error = useStore((state) => state.error);

    useEffect(() => {
        fetchItem();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="mt-5 	md:w-2/5">
                <Search />
                {loading && <Alert message={"Loading.."}/>}
                {error && <Alert message={error}/>}   
                <div>
                    {filterItems.map((item, key) => {
                        return <Item key={key} data={item} />;
                    })}
                </div>

                <div className="pt-8 pr-0 flex justify-end">
                    <p className=" text-lg mr-12 font-medium font-semibold text-gray-900">
                        Number of Movies {items.length}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
