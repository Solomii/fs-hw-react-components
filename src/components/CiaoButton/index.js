import React from "react";
import "./../../App.css"

const CiaoButton = ({ title, onClick, direction }) => {
    return (
        <button className="btn" onClick={onClick}>
            {title} {direction}
        </button>
    );
};

export default CiaoButton;
