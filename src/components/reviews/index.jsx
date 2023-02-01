import React from "react"
import "./style.css"
import { store } from "../../store"
import { observer } from "mobx-react-lite"

export const Messages = observer(({filter}) => {
    
    const { messages } = store

    

    return(
        filter().map((message) => (
            <div key={message.id} className="commentsBlock">
                <div key={message.id} className="nameAndDate">
                    <h2>{message.name}</h2>
                    <p>{message.date.slice(4, 6) + " " + message.date.slice(0, 3)+ " " + message.date.slice(-4)}</p>
                </div>
                <div className="msgTextContainer">
                    <div className="spanBlock">
                    <span className="blockSpan"></span>
                    </div>
                
                <div key={message.id} className="msgTextBlock">
                    <div className="msgTextDiv">
                        <p className="msgText">{message.message}</p>
                    </div>
                </div>
                </div>        
            </div>
        ))
    )
})