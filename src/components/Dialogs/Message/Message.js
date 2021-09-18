import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialogs}>{props.message}</div>
}


function Dialogs(props) {

    let dialogs = [
        {id: 1, name: "Andriy"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Oleg"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How us your it"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ]

    let dialogsElement = dialogs.map( d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = messages.map( m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;