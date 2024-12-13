import React from "react";

class AddNoteForm extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: "",
            body: "",
            archived: false,
            createdAt: "",
            maxTitleLength: 50,
        };

        this.onTitleChangeEventHandler =this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const inputValue = event.target.value;
        if (inputValue.length <= this.state.maxTitleLength) {
            this.setState(() => ({
                title: inputValue,
            }));
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);

        this.setState(() => ({
            title: "",
            body: "",
        }));
    }

    render() {
        const remainingCharacters = this.state.maxTitleLength - this.state.title.length;
        
        return (
            <form className="note_input" onSubmit={this.onSubmitEventHandler}>
                <p className="character_limit">
                    {`Characters remaining: ${remainingCharacters}`}
                </p>
                <input
                    required
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                />
                <textarea
                    required
                    type="text"
                    placeholder="Write your note here . . ."
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                />
                <button type="submit">Add New Note</button>
            </form>
        );
    }
}

export default AddNoteForm;
