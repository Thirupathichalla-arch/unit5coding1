import React from 'react';

export const Forms= ({ Time,title , Image, id, getdata }) => {
    const handleClick = (id) => {
        getdata(id);
    }
    return (
        <div style={{display: 'flex', padding: "10px", width: "350px", Color:"black", backgroundColor : "cyan"}} onClick={()=>handleClick(id)}>
            <div>
                <h1>{title}</h1>
                <p>{Time} min</p>
            </div>
            <img src = {Image}  />
        </div>
    )
}