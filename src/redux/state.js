let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 12},
                {id: 2, message: "It`s my first post", likesCount: 11},
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How us your it"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
            ],
            dialogs: [
                {id: 1, name: "Andriy"},
                {id: 2, name: "Sveta"},
                {id: 3, name: "Oleg"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
            ],
        }

    },
    _callSubscriber () {
        console.log('state was changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },


    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }

}



export default store;
window.store = store;
