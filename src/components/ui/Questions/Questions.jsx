import React from 'react';
// import { getData } from '../../../helpers/getData';
import plus from '../../../images/plus.svg';
import styles from './Questions.module.css';
class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    items: result
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                })
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error{error.message}</p>
        } else {
            return (
                <ul className={styles.questions_list}>
                    {items.map(i=>(
                        <li className={styles.question} key={i.id}>
                            <div className={styles.content}>
                                <h3>Заголовок часто задаваемого вопроса</h3>
                                <span>{i.body}</span>
                            </div>
                            <div className={styles.open}>
                                <img src={plus} alt="show" />
                                <div className={styles.opened}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            )
        }
    }
};

export default Questions;


// let questionItem = fetch(`https://jsonplaceholder.typicode.com/comments?_limit=5`);
// // <li key={i.id} className={styles.question}>{i.body}
// return (
//     <ul className={styles.questions_list}>
//         <li className={styles.question}>1</li>
//         <li className={styles.question}>1</li>
//         <li className={styles.question}>1</li>
//         <li className={styles.question}>1</li>
//     </ul>
// );