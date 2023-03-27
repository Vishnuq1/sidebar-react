import React from 'react'
import "../App.css";
import { SidebarData }   from "./SidebarData"
import logo from "../Image/logo.PNG";


const Sidebar=()=>{
    return (
      
        <>
       
            <div className="Sidebar">
                 <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => {
                        return (
                            <li key={key}
                                className="row" 
                                id={window.location.pathname === val.link ? "active" : ""}
                                // id={ window.location.pathname === "home" ? "backgroundColor:rgba(47, 51, 73, 255)" : "disabled"}
                                onClick={() => { window.location.pathname = val.link; }}>
                               
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                        )
                    })}
                </ul>
            </div>
          
    </>
            
    )
    }

export default Sidebar;