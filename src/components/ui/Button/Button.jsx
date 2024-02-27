
import React from 'react';
import styles from './Button.module.css';
const Button = (props) => {
    const {title,color,bg} = props;
    return (
        <button className={styles.button } style={{background:`${bg?bg:''}`, color:`${color?color:''}`}}>
            {title}
        </button>
    );
};

export default Button;