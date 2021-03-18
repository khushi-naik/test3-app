import React, {useState} from 'react'
import axios from 'axios';

function TaskIn(){
    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    function handleChange(event){
        //console.log(event.target)
        const {name, value} = event.target;
        //name=input name and value=value from input
        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

   
    function handleClick(event){
        event.preventDefault();
        var date = new Date();
        const newNote = {
            title: input.title,
            content: input.content,
            time: date
        }
        console.log(input);
        axios.post('http://localhost:3001/create', newNote)
    }

    return (
        <form>
            <div>
                <input onChange={handleChange} name="title" type="text"  placeholder="enter your task title here" value={input.title}></input>
            </div>
            <div>
                <textarea onChange={handleChange} name="content" placeholder="enter the content" value={input.content} maxLength="140"></textarea>
            </div>
            
            <button onClick={handleClick} className="notes-button" type="submit">Add Note</button>
        </form>
    )
}

export default TaskIn;