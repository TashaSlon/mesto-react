import { useState, useEffect } from "react";
import avatar from '../images/avatar.jpg';
import { api } from '../utils/Api.js';
import { Card } from "./Card.js";

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState('Наталья Плюснина');
  const [userDescription, setUserDescription] = useState('Frontend developer');
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
    .then(userData => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
  },[]);

  useEffect(() => {
    api.getCards()
    .then(cards => {
      setCards(cards);
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
  },[]);
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="avatar" onClick={onEditAvatar}>
            <div className="avatar__image" style={{ backgroundImage: `url(${userAvatar})` }}></div>
            <button className="btn btn_type_avatar-edit" type="button"></button>
          </div>
          <div className="profile__text">
            <button className="btn btn_type_edit" type="button" onClick={onEditProfile}></button>
            <div>
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__activity">{userDescription}</p>
            </div>
          </div>
        </div>
        <button className="btn btn_type_add" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="gallery">
        <ul className="cards">
            {cards.map(card => {
                return (<Card key={card._id} card={card} onCardClick={onCardClick}/>)
            })}
        </ul>
      </section>
    </main>
  );
};