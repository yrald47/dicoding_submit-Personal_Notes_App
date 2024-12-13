import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ active, notes, onDelete, onArchive }) {
    const showNotes = active ? notes.filter((note) => !note.archived) : notes.filter((note) => note.archived);
    // const showNotes = notes.filter((note) => !note.archived);
    return (
        <div className="notes_list">
            {showNotes.length === 0 ? (
                <p>No Notes Yet</p>
            ) : (
                showNotes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note}
                    />
                ))
            )}
        </div>
    );
}

export default NoteList;
