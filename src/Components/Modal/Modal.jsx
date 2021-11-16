import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addCardAC } from '../../redux/actionCreators/cardsAC';
import styles from './Modal.module.scss'


function Modal({ active, setActive }) {

  const dispatch = useDispatch();

  const priceRef = useRef(null);
  const nameRef = useRef(null);

  const formHandler = (event) => {
    event.preventDefault();
    dispatch(addCardAC({
      id: uuidv4(),
      name: nameRef.current.value,
      price: Number(priceRef.current.value),
      status: false,
    }))

    setActive(!active)
  }

  return (
    <form onSubmit={formHandler} className={styles.modal}>
      <input ref={nameRef} type="text" placeholder='Название товара'/>
      <input ref={priceRef} type="text" placeholder='Цена'/>
      <button type="submit">Добавить товар в список</button>
    </form>
  )
}

export default Modal
