import { useState } from 'react';

import styles from '../styles/game.module.css';
import LastWillImage from '../res/icon_last_will.png';
import DeathNote from '../res/icon_death_note.png';
import Icon from '../res/icon_action.png';
import SendIcon from '../res/send.png'

const ChatMessage = ({ author, message }) => {
    return <div className={styles.gameChatMessage}>
        <strong>[{author}]</strong> {message}
    </div>
}

export default () => {
    const [username] = useState('ImagineThisIsYourUsername');
    const [messages, setMessages] = useState([['Training Bot', 'Hello there. Welcome to TG']]);

    const sendMessage = (e) => {
        e.preventDefault();
        try {
            const { chatMessage } = e.target.elements
            if (chatMessage.value != '') setMessages([].concat(messages, [[username, chatMessage.value]]));
            chatMessage.value = ''

            e.target.blur();
        } catch (err) {
            console.log(err);
        }
    }

    return <div className={styles.gameRoot}>
        <div className={styles.gameMain}>
            <div className={styles.gamePhase}>Day 1 - 0:42</div>
            <div className={styles.gameChat}>
                {messages.map(([ author, message ], index) => <ChatMessage author={author} message={message} key={index}/> )}
            </div>
            <div className={styles.gameActionBar}>
                <div>👥</div>
                <img src={Icon}/>
                <img src={DeathNote}/>
                <img src={LastWillImage}/>
                <div>🔈</div>
            </div>
            <form className={styles.gameChatBar} onSubmit={sendMessage}>
                <input type='text' className={styles.gameChatInput} id='chatMessage' name='chatMessage'/>
                <input type="image" name="submit" src={SendIcon} />
            </form>
        </div>
    </div>
}