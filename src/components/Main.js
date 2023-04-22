import { useState, useEffect } from "react";
import avatar from '../images/avatar.jpg';
import { api } from '../utils/Api.js';
import { Gallery } from "./Gallery.js";

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onSubmit, onCardClick}) {
  const [userName, setUserName] = useState('Наталья Плюснина');
  const [userDescription, setUserDescription] = useState('Frontend developer');
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then(userData => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    })
  },[]);

  useEffect(() => {
    api.getCards().then(cards => {
      setCards(cards);
    })
  },[]);
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="avatar">
            <div className="avatar__image" style={{ backgroundImage: `url(${userAvatar})` }}></div>
            <button className="btn btn_type_avatar-edit" type="button" onClick={onEditAvatar}></button>
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
      <Gallery cards={cards} onCardClick={onCardClick}/>
    </main>
  );
};