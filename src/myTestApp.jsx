import React from "react";
import { observer } from "mobx-react-lite";
import { Header } from "./components/header";
import { Services } from "./components/services";
import { ReviewsButtons } from "./components/reviews/reviewsButtons";
import { Input } from "./components/entryField";
import { Messages } from "./components/reviews";
import { store } from "./store";

export const MyTestApp = observer(() => {
    const { messages } = store;
    const [active, setActive] = React.useState("latestReviews");
    const threeLastComments = Object.values(messages).slice(-3);

    const filter = () => {
        if (active === "latestReviews") {
            return threeLastComments;
        } else {
            return Object.values(messages);
        }
    };

    return (
        <>
            <div className="container">
                <Header />

                <Services />

                <div>
                    <ReviewsButtons setActive={setActive} active={active} />
                    <Messages active={active} filter={filter} />
                </div>
            </div>
            <Input />
        </>
    );
});
