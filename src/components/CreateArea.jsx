import React, { useState } from "react";

function CreateArea(props) {
  const [currentNote, setCurrentNote] = useState(emptyNote());

  function emptyNote() {
    return {
      title: "",
      content: ""
    };
  }

  function handleNoteSubmit(event) {
    event.preventDefault();
    props.addToNotes(currentNote);
    setCurrentNote(emptyNote());
  }

  function onNoteChange(event) {
    const { name, value } = event.target;
    setCurrentNote(previous => {
      return {
        ...previous,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={currentNote.title}
          onChange={onNoteChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={onNoteChange}
          value={currentNote.content}
        />
        <button onClick={handleNoteSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
