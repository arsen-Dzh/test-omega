import styles from './Notification.module.scss';
import { useSelector } from 'react-redux'

function Notification() {

  const { message } = useSelector(state => state.notificationReducer)

  return (
    <div className={styles.notification}>
      <h4>{ message }</h4>
    </div>
  )
}

export default Notification
