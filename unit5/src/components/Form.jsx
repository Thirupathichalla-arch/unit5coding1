import React from 'react';
import { Input,Button, } from 'antd';

export const Form = ({added}) => {
    const [form, setForm] = React.useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        value = name === "Time" ? Number(value) : value;
        setForm({ ...form, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/posts", {
            method: "POST",
            body: JSON.stringify(form),
            headers : {"Content-Type" : "application/json"}
        });
        added(Math.random(10) * 1000);
    }
    return (
        <form>
            <label>Title</label>
            <Input type="text" name="title" placeholder="title" onChange={handleChange} /><br/><br/>
            <label>Image</label>
            <Input type="text" name="Image" placeholder="image" onChange={handleChange} /><br/><br/>
            <label>Time</label>
            <Input type="text" name="Time" placeholder="Time" onChange={handleChange} /><br/><br/>
            <label>Ingerdients</label>
            <Input type="text" name="Ingredients" placeholder="Ingerdients" onChange={handleChange} /><br/><br/>
            <label>Instructions</label>
            <Input type="text" name="Instructions" placeholder="Instructions" onChange={handleChange} /><br/><br/>
            <Button type="primary" onClick={handleSubmit}>Submit</Button>
        </form>
    )
}