import { useDispatch } from 'react-redux';
import { buyCardAC, removeCardAC } from '../../redux/actionCreators/cardsAC'
import { notificationAC } from '../../redux/actionCreators/notificationAC';
import styles from './Card.module.scss';

function Card({ item }) {

  const dispatch = useDispatch();


  const removeHandler = () => {
    dispatch(removeCardAC(item.id))    
    dispatch(notificationAC(`Вы удалили ${item.name}`))
    setTimeout(() => {
      dispatch({type: 'STATUS', payload: ''})
    }, 1500)
  }

  const buyHandler = () => {
    dispatch(buyCardAC(item.id))

    const option = item.status ? 'продали' : 'купили'

    dispatch(notificationAC(`Вы ${option} ${item.name}`))
    setTimeout(() => {
      dispatch({type: 'STATUS', payload: ''})
    }, 1500)
  }

  return (
      <div className={styles.card} >
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button onClick={removeHandler}>Удалить товар</button>
        <button onClick={buyHandler}>{item.status ? 'Продать' : 'Купить'}</button>
      </div>
  )
}

export default Card
