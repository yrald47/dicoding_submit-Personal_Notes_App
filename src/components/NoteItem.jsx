// import React from 'react';
import { MdArchive, MdDeleteForever, MdUnarchive } from 'react-icons/md';

function NoteItem({ archived, title, body, id, onDelete, onArchive, createdAt}) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        };
        return new Intl.DateTimeFormat("id-ID", options).format(date);
    };
    return (
        <div className="note_item">
            <div className="note_item__content">
                <h3 className="note_item__title">{title}</h3>
                <p className="note_item__date">{formatDate(createdAt)}</p>
                <div className="note_item__body">{body}</div>
            </div>
            <div className="note_item__actions">
                <button
                    className="item_action action_first_item delete"
                    onClick={() => onDelete(id)}
                >
                    <MdDeleteForever /> <span>Delete</span>
                </button>
                <button
                    className="item_action action_last_item archive"
                    onClick={() => onArchive(id, !archived)}
                >
                    {archived ? <MdArchive /> : <MdUnarchive />}
                    <span>{archived ? "Unarchive" : "Archive"}</span>
                </button>
            </div>
        </div>
    );
}

export default NoteItem;