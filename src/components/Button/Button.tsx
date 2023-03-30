import React from 'react';
import s from './Button.module.scss'
type ButtonType={
    title: string
    onChange: () => void
}
const Button = (props:ButtonType) => {
    return (
        <div className="buttons">
            <button>{props.title}</button>

        </div>
    );
};

export default Button;