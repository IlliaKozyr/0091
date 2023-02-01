import React from "react";
import "./style.css";
import heart from "./images/heart.png";
import message from "./images/message.png";
import { observer } from "mobx-react-lite";
import { store } from "../../../store/index";

export const ReviewsButtons = observer(({setActive, active}) => {

    const { messages, likes } = store;


    const messagesCount = Object.keys(messages).length;

    console.log(active, "active")

    return (
        <div className="reviewsButtonsBlock">
            <div>
                <button className={active === "latestReviews" ? "active" : "notActive"} onClick={() => setActive("latestReviews")}>
                    Latest reviews
                </button>
                <button className={active === "allReviews" ? "active" : "notActive"} onClick={() => setActive("allReviews")}>
                     All reviews
                </button>
            </div>

            <div className="numberOfResponsesBlock">
                <div className="numberOfResponses">
                    <button className="likeBtn" onClick={() => store.addLike()}>
                        <img src={heart} />
                        <p>{likes}</p>
                    </button>
                </div>
                <div className="numberOfResponses">
                    <img src={message} />
                    <p>{messagesCount}</p>
                </div>
            </div>
        </div>
    );
});
