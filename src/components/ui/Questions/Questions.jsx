import React from 'react';
// import { getData } from '../../../helpers/getData';
import plus from '../../../images/plus.svg';
import styles from './Questions.module.css';
class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showed: false,
            error: null,
            items: [],
            showStatus: {}
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    items: result
                })
            },
                (error) => {
                    this.setState({
                        error
                    })
                })
    }
    toggleShow = (id) => {
        this.setState(prevState => ({
            showStatus: {
                ...prevState.showStatus,
                [id]: !prevState.showStatus[id]
            }
        }));
    }
    render() {
        const { error, items } = this.state;
        if (error) {
            return <p>Error{error.message}</p>
        } else {
            return (
                <ul className={styles.questions_list}>
                    {items.map(i => (
                        <li className={styles.question} key={i.id}>
                            <div className={styles.content}>
                                {i.id === 2 ? <h3>Заголовок часто задаваемого вопроса с двумя абзацами</h3> : <h3>Заголовок часто задаваемого вопроса</h3>}
                                {this.state.showStatus[i.id] &&
                                    (<>
                                        <p>{i.body}</p>
                                        {i.id === 2 && <p><b>Это предложение должно здесь быть.</b><span>{i.body}</span></p>}
                                    </>)}
                            </div>
                            <div className={styles.open} onClick={() => this.toggleShow(i.id)}>
                                {this.state.showStatus[i.id] ? <div className={styles.opened}  ></div> : <img src={plus} alt="show" />}
                            </div>
                        </li>
                    ))}
                </ul>
            )
        }
    }
};

export default Questions;

