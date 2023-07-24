import React, { useState } from 'react'

const Form = ({ nextID, setTricks }) => {
    const [form, setForm] = useState({
        id: nextID,
        stance: "",
        name: "",
        obstacle: "",
        tutorial: ""
    })
    
    const handleChange = (e) => {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        // fetch('http://localhost:3001/api/v1/tricks', {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json'
        //     },
        //     mode: 'cors',
        //     body: form
        // })
        // .then(res => res.json)
        // .then(data => console.log(data))
        // .catch(err => console.error(err))
        setTricks(prev => ([...prev, form]))
        e.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <select name='stance' type='text' value={form.stance} onChange={handleChange}>
                <option default>Choose your Stance</option>
                <option value='regular'>Regular</option>
                <option value='switch'>Switch</option>
            </select>
            <input name='name' value={form.name} onChange={handleChange} placeholder='Name of trick'></input>
            <select name='obstacle' type='text' value={form.obstacle} onChange={handleChange}>
                <option default>Choose your Obstacle</option>
                <option value='flatground'>Flatground</option>
                <option value='ledge'>Ledge</option>
                <option value='rail'>Rail</option>
                <option value='stairs'>Stairs</option>
                <option value='pool'>Pool</option>
            </select>
            <input name='tutorial' value={form.tutorial} onChange={handleChange} placeholder='Link to Tutorial'></input>
            <button onClick={handleSubmit}>Send It!</button>
        </form>
    )
}

export default Form