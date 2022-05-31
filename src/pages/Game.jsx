import styles from '../styles/game.module.css';
import LastWillImage from '../res/icon_last_will.png';
import DeathNote from '../res/icon_death_note.png';
import Icon from '../res/icon_action.png';
import SendIcon from '../res/send.png'

const ChatMessage = ({ author, message }) => {
    return <div className={styles.gameChatMessage}>
        <strong>{author}</strong> {message}
    </div>
}

export default () => {
    return <div className={styles.gameRoot}>
        <div className={styles.gameMain}>
            <div className={styles.gamePhase}>Day 1 - 0:42</div>
            <div className={styles.gameChat}>
                <ChatMessage author='NashedPotato' message='New Message Content' />
                <ChatMessage author='NashedPotato' message='Message Content' />
                <ChatMessage author='NashedPotato' message='Message Content' />
            </div>
            <div className={styles.gameActionBar}>
                <div>👥</div>
                <img src={Icon}/>
                <img src={DeathNote}/>
                <img src={LastWillImage}/>
                <div>🔈</div>
            </div>
            <div className={styles.gameChatBar}>
                <input type='text' className={styles.gameChatInput}/>
                <img className={styles.gameChatSend} src={SendIcon}/>
            </div>
        </div>
    </div>
}