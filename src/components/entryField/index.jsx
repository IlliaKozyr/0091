import React from "react";
import "./style.css";
import { observer } from "mobx-react-lite";
import { store } from "../../store";
import uuid from "react-uuid";
import { keys } from "mobx";

export const Input = observer(() => {
    const [name, setName] = React.useState("");
    const [message, setMessage] = React.useState("");

    const date = new Date();

    let flag = false;

    document.onkeydown = function (event) {
        if (event.key === "Control") flag = true;
        if (event.key === "Enter" && flag) {
            if (name.length >= 2 && message.length >= 2) {
                flag = false;
                store.addMessage({
                    name: name,
                    message: message,
                    date: date.toDateString().slice(4),
                    id: uuid(),
                });
                setMessage("");
                setName("");
            }
        }
    };

    return (
        <div className="entryFieldBlock">
            <input
                maxLength={20}
                type="text"
                value={name}
                className="entryFieldName"
                placeholder="Enter name..."
                onChange={(event) => setName(event.target.value)}
            />
            <input
                id="entryFieldComment"
                maxLength={200}
                type="text"
                value={message}
                className="entryFieldComment"
                placeholder="Enter message..."
                onChange={(event) => setMessage(event.target.value)}
            />
            <button
                id="sendMsgButton"
                className="sendMsgButton"
                disabled={name.length <= 2 || message.length <= 2}
                onClick={() => {
                    store.addMessage({
                        name: name,
                        message: message,
                        date: date.toDateString().slice(4),
                        id: uuid(),
                    });
                    setMessage("");
                    setName("");
                }}
            >
                <h2>Send a message</h2>
            </button>
            {console.log(store.messages)}
        </div>
    );
});
