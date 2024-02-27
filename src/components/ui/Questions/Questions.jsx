import React from 'react';
import { getData } from '../../../helpers/getData';
import styles from './Questions.module.css';
const  Questions = (num) => {
    let questionItem = fetch(`https://jsonplaceholder.typicode.com/comments?_limit=5`);
    // <li key={i.id} className={styles.question}>{i.body}
    return (
        <ul className={styles.questions_list}>
            <li className={styles.question}>1</li>
            <li className={styles.question}>1</li>
            <li className={styles.question}>1</li>
            <li className={styles.question}>1</li>
        </ul>
    );
};

export default Questions;