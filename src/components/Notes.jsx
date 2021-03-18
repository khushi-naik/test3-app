import React, {useState, useEffect} from 'react';
//import Checkbox from 'react-checkbox-component';

function Notes(props){
    //const [state, setState] = useState([])
    const [notes, setNotes] = useState([{
        title: '',
        content: '',
        time: ''
    }])

    /*const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }*/
    

    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok){
                //console.log(res.json())
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes))
    })

   function handleDelete(event){

       console.log(event.target);
       
   }

   function checkEvent(event){
        console.log(event.target.key);

   }

    return (
        <div>
           
            
            {
                 
                notes.map(note => 
                <div className="note">                 
                    <h4>{note.title}</h4>
                    <div className="note-date">
                    <p>{note.time}</p>
                    </div>
                    <div className="note-para">
                    <p>{note.content}</p>
                    </div>
                </div>
                )
            }
        </div>
    )
}


export default Notes;