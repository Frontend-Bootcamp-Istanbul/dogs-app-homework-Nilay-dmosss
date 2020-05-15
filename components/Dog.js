import React from 'react';
import FavoriteActions from "./FavoriteActions";
import {Link}  from "react-router-dom";


const Dog = ({id, name, toggle, getStatus,IsToggling}) => {
    return <li key={id} style={{
        margin: "15px"
    }}>
        <Link to={'/detay/${id}'} > 
        <span style={{
                                display: "inline-block",
                                marginRight: "15px"
                            }}>
                                {name}
                            </span>
                            </Link>
                            
        <FavoriteActions IsToggling ={IsToggling} 
        toggle={toggle} 
        id={id}
         getStatus={getStatus}/>
                            
    </li>
};


export default Dog;