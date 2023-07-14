import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isNoting,setNoting]=useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });


    

  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setNoting(true);
  }

  return (
    <div>
      <form className="create-note">
       {isNoting===true && <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      /> } 
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isNoting?3:1}
        />
      
        {isNoting===true && <Fab onClick={submitNote}>
        <AddIcon/>
        </Fab>}
        
      
      </form>
    </div>
  );
}

export default CreateArea;
