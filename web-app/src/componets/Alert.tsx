import React from "react";

type ItemProps = {
    message: string;
};

const Alert: React.FC<ItemProps> = ({ message }) => {
    return (
        <div className="p-20 flex justify-center">
            <h1 className="text-lg font-semibold text-gray-900">{message}</h1>
        </div>
    );
};

export default Alert;
