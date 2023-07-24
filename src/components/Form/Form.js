import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        stance: "",
        trickName: "",
        obstacle: "",
        link: ""
    })
    
    const handleChange = (e) => {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        console.log('submitted')
    }
    
    console.log(form)
    return (
        <form onSubmit={handleSubmit}>
            <select name='stance' type='text' value={form.stance} onChange={handleChange}>
                <option default>Choose your Stance</option>
                <option value='regular'>Regular</option>
                <option value='switch'>Switch</option>
            </select>
            <input name='trickName' value={form.trickName} onChange={handleChange} placeholder='Name of trick'></input>
            <select name='obstacle' type='text' value={form.obstacle} onChange={handleChange}>
                <option default>Choose your Obstacle</option>
                <option value='flatground'>Flatground</option>
                <option value='ledge'>Ledge</option>
                <option value='rail'>Rail</option>
                <option value='stairs'>Stairs</option>
                <option value='pool'>Pool</option>
            </select>
            <input name='link' value={form.link} onChange={handleChange} placeholder='Link to Tutorial'></input>
            <button>Send It!</button>
        </form>
    )
}

export default Form