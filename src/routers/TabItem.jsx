import React from "react";
import '../App.css'

const TabItem = ({ id, title, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(id);
    };
    return ( 
        <div className="tab-item">
        <h6 onClick = { handleClick }
        className = { activeTab === id ? "active" : "" } > { title } </h6> </div>
    );
};
export default TabItem;
