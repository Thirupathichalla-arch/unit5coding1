import React from 'react';
import { Form } from './Form';
import { Forms } from './Forms';

import { Button } from 'antd';
export const Recipe = () => {
    const [data, setData] = React.useState([]);
    const [select, setSelect] = React.useState(null);
    const [sorted, setSorted] = React.useState("");
    const [change,setChange] = React.useState(null);
    const getdata = (data) => {
        fetch("http://localhost:3001/posts/" + data).then((res) => res.json()).then((res) => setSelect(res));
    }
    const added = (x) => {
        console.log(x);
        setChange(x);
    }
    React.useEffect(() => {
        fetch(`http://localhost:3001/posts?_sort=Time&_order=${sorted}`).then((res) => res.json()).then((res) => setData(res));
    }, [sorted, change]);
    return (
        <div>        
            <div style={{display: 'flex',  margin : "25px"}}>
                <Form added={added} />
                <div>
                <div style={{overflowY: 'scroll',height : "300px" ,marginTop : "20px"}}>
                        {data.map((e) => <Forms key = {e.id} {...e} getdata = {getdata} />)}
                    </div>
                    
                    <div style = {{display : "flex", justifyContent : "space-around", marginTop : "25px"}}>
                        <Button type="primary" onClick={()=>setSorted("asc")}>low</Button>
                        <Button type="primary" onClick={()=>setSorted("desc")}>high</Button>
                    </div>
                </div>
            </div>
            <hr/>
            
        </div>
    )
}