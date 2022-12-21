const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');
const anEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_info_name');
const descriptionInput = formElement.querySelector('.popup__input_info_description');

function hanlderEditButton() {
  popup.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  descriptionInput.value = userDescription.textContent;
}

function handlerPopupClose(){
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  userName.textContent = nameInput.value;
  userDescription.textContent = descriptionInput.value;
  handlerPopupClose();
}

formElement.addEventListener('submit', handleFormSubmit); 
anEditButton.addEventListener('click', hanlderEditButton); 
closeButton.addEventListener('click', handlerPopupClose);