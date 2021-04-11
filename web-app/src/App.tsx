import React, { useState } from "react";

import Item from "./componets/Item";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-center">
            <div className="mt-5	max-w-screen-md">
                <div className="p-6 bg-green-400 rounded		flex flex-row shadow justify-between">
                    <h1 className="font-sans font-bold text-4xl	text-white">MOVIES</h1>
                    <div className="flex flex-row	">
                        <input className="pl-2 border-transparent rounded-l-md	border focus:outline-none"></input>
                        <button className="bg-gray-200 rounded-r-md hover:bg-gray-300 focus:outline-none pl-2 pr-2 text-md font-medium text-gray-900	border-none	">
                            Search
                        </button>
                    </div>
                </div>
                <div>
                    <Item data={{ name: "dasdads", year: 2020, description: "sadasds" }} />
                    <Item data={{ name: "dasdads", year: 2020, description: "sadasds" }} />
                    <Item data={{ name: "dasdads", year: 2020, description: "sadasds" }} />
                    <Item data={{ name: "dasdads", year: 2020, description: "sadasds" }} />
                </div>

                <div className="pt-8 pr-0 flex justify-end">
                    <p className=" text-lg mr-12 font-medium font-semibold text-gray-900">No hidden fees 12</p>
                </div>
            </div>
        </div>
    );
}

export default App;
