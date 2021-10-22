import React, { useState } from "react";

function App() {

    const [name, setName] = useState("");
    const [input, setInput] = useState("");
    const [isOn, setOn] = useState(false);

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleClick(event) {
        setInput(name);

        event.preventDefault();
    }

    function onHover() {
        setOn(true);
    }

    function onOut() {
        setOn(false);
    }

    return (
        <div className="container">
            <h1>Hello {input}</h1>
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="What's your name?"
                    value={name}
                />
                <button
                    style={{ backgroundColor: isOn ? "black" : "white" }}
                    type="submit"
                    onMouseOver={onHover}
                    onMouseOut={onOut}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;