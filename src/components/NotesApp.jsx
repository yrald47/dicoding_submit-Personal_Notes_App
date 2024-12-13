import React from "react";
import { getData } from "../utils/notes_data";
import AddNoteForm from "./AddNoteForm";
import NoteList from "./NoteList";
import Header from "./Header";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
            searchQuery: "",
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        if (!title.trim() || !body.trim()) {
            alert("Both title and body are required.");
            return;
        }
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    },
                ],
            };
        });
    }

    onArchiveHandler(id, isArchived) {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.map((note) => {
                if (note.id === id) {
                    return { ...note, archived: isArchived };
                }
                return note;
            });
            return { notes: updatedNotes };
        });
    }

    onSearchHandler(event) {
        this.setState({
            searchQuery: event.target.value,
        });
    }

    render() {
        const filteredNotes = this.state.notes.filter(
            (note) =>
                note.title
                    .toLowerCase()
                    .includes(this.state.searchQuery.toLowerCase()) ||
                note.body
                    .toLowerCase()
                    .includes(this.state.searchQuery.toLowerCase())
        );

        return (
            <div className="notes_app">
                <Header
                    searchQuery={this.state.searchQuery}
                    onSearchHandler={this.onSearchHandler}
                />
                <h1>Create Your Note Here . . .</h1>
                <AddNoteForm addNote={this.onAddNoteHandler} />
                <h2>Active Notes</h2>
                <NoteList
                    active={true}
                    notes={filteredNotes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
                <h2>Archived Notes</h2>
                <NoteList
                    active={false}
                    notes={filteredNotes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
            </div>
        );
    }
}

export default NotesApp;
