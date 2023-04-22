import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleSubmitClick() {
    setIsSubmitPopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsSubmitPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="page">
      <Header />
      <Main onEditProfile = {handleEditProfileClick}
      onAddPlace = {handleAddPlaceClick} 
      onEditAvatar = {handleEditAvatarClick}
      onSubmit = {handleSubmitClick}
      onCardClick = {handleCardClick} />
      <Footer/>

      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label>
          <input className="form__input form__input_type_avatarlink" type="text" id="avatarlink-input" required minLength="2" maxLength="200" placeholder="Ссылка" name="avatar" />
          <span className="form__input-error avatarlink-input-error"></span>
        </label>
        <button className="form__submit btn btn_type_save" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label>
          <input className="form__input form__input_type_name" type="text" id="name-input" required minLength="2" maxLength="40" placeholder="Имя" name="name" />
          <span className="form__input-error name-input-error"></span>
        </label>
        <label>
          <input className="form__input form__input_type_activity" type="text" id="activity-input" required minLength="2" maxLength="200" placeholder="О себе" name="about" />
          <span className="form__input-error activity-input-error"></span>
        </label>
        <button className="form__submit btn btn_type_save" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name='add' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label>
          <input className="form__input form__input_type_title" type="text" id="title-input" required minLength="2" maxLength="30" placeholder="Название" name="name" />
          <span className="form__input-error title-input-error"></span>
        </label>
        <label>
          <input className="form__input form__input_type_link" type="url" id="link-input" required placeholder="Ссылка на картинку" name="link" />
          <span className="form__input-error link-input-error"></span>
        </label>
        <button className="form__submit btn btn_type_save" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name='submit' title='Вы уверены?' isOpen={isSubmitPopupOpen} onClose={closeAllPopups}>
        <button className="form__submit btn btn_type_save" type="submit">Да</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}>
        
      </ImagePopup>
     
    </div>
  );
}

export default App;
