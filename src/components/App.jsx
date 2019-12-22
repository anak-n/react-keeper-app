import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import UUID4 from "uuid/v4";

function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function deleteNote(noteKey) {
    setNotes(() => {
      notes.filter(note => {
        return note.key !== noteKey;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addToNotes={addNewNote} />
      {notes.map(note => (
        <Note
          key={UUID4()}
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
