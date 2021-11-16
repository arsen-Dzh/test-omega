import { useDispatch } from 'react-redux';
import { buyCardAC, removeCardAC } from '../../redux/actionCreators/cardsAC'
import styles from './Card.module.scss';

function Card({ item }) {

  const dispatch = useDispatch();


  const removeHandler = () => {
    dispatch(removeCardAC(item.id))
    dispatch({type: 'STATUS', payload: `Вы удалили ${item.name}`})
    setTimeout(() => {
      dispatch({type: 'STATUS', payload: ''})
    }, 1500)
  }

  const buyHandler = () => {
    dispatch(buyCardAC(item.id))
    dispatch({type: 'STATUS', payload: `Вы купили ${item.name}`})
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
