import PopupWithForm from './PopupWithForm.js';
import { useRef } from "react";

export function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const link = useRef();
    
    function handleSubmit(e) {
        e.preventDefault();
        
        onUpdateAvatar(
             link.current.value,
        );
    }

    return (
        <>
            <PopupWithForm 
          name='avatar' 
          title='Обновить аватар' 
          isOpen={isOpen} 
          onClose={onClose}
          buttonText='Сохранить'
          onSubmit={handleSubmit}>
              <label>
                  <input ref={link} className="form__input form__input_type_avatarlink" type="text" id="avatarlink-input" required minLength="2" maxLength="200" placeholder="Ссылка" name="avatar"/>
                  <span className="form__input-error avatarlink-input-error"></span>
              </label>
          </PopupWithForm>
        </>
    )
}