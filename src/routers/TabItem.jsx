import React from "react";
import '../App.css'

const TabItem = ({ id, title, activeTab, setActiveTab, show, setShow }) => {
    const handleClick = () => {
        setActiveTab(id);
        if(show){
            setShow(false)
        }
    };
    return ( 
        <div className="tab-item">
        <h6 onClick = { handleClick }
        className = { activeTab === id ? "active" : "" } > { title } </h6> </div>
    );
};
export default TabItem;
