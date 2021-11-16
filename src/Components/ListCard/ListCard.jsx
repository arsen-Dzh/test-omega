import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import Notification  from '../../Components/Notification/Notification';
import styles from './ListCard.module.scss';

function ListCard() {

  const [activeModal, setActiveModal] = useState(false);

  const { cards } = useSelector(state => state.cardsReducer);
  const { status } = useSelector(state => state.notificationReducer)

  return (
    <>
      <div className={styles.list}>
        {
          cards.length > 0 
          ? cards.map(item => <Card key={item.id} item={item}/>) 
          : <p>Товаров нету</p>
        }
        <button onClick={() => setActiveModal(prev => !prev)}>Создать товар</button>
        {
          activeModal && <Modal active={activeModal} setActive={setActiveModal}/>
        }
      </div>
      {
        status && <Notification />
      }
    </>
  )
}

export default ListCard
