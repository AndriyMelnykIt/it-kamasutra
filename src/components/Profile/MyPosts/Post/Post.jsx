import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' alt="avatar" />
            {props.message}
            <div>
                <span>{props.likesCoun}</span>
            </div>
        </div>
    )

}

export default Post;