import React from "react";

type ItemProps = {
    data: {
        name: string;
        year: number;
        description: string;
    };
};

const Item: React.FC<ItemProps> = ({ data }) => {
    const { name, year, description } = data;
    return (
        <div className="p-8	shadow mt-5 ">
            <div className="flex">
                <p className=" text-lg mr-12 font-medium text-gray-900">No hidden fees {name}</p>
                <p className=" text-lg  font-medium text-gray-900">2020 {year}</p>
            </div>
            <dd className="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ration {description}
            </dd>
        </div>
    );
};

export default Item;
