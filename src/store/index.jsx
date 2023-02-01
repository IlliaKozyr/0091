import { makeAutoObservable } from "mobx";

class MessagesStore {
    messages = {
        1: {
            date: "Apr 13 2022",
            id: "1",
            name: "Samuel Jackson", 
            message: "Hey Eva! You're cool. Nice pic!"
        },
        
        2: {
            date: "Apr 10 2022",
            id: "2",
            name: "Angela Deimon", 
            message: "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic."
        },

        3: {
            date: "Apr 8 2022",
            id: "3",
            name: "Ronald Harris", 
            message: "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?"
        },
    };

    likes = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addMessage(message) {
        this.messages[message.id] = message
    }

    addLike() {
        this.likes = this.likes + 1
    }

    

}

export const store = new MessagesStore();
