import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function deleteNote(noteKey) {
    const resNotes = notes.filter(note => {
      return note.key !== noteKey;
    });

    setNotes(resNotes);
  }

  return (
    <div>
      <Header />
      <CreateArea addToNotes={addNewNote} />
      {notes.map(note => (
        <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
