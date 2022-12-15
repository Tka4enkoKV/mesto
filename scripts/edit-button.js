let userName = document.querySelector('.profile__name');
let userDescription = document.querySelector('.profile__description');
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let saveButton = document.querySelector('.popup__save')

closeButton.onclick = function () {
  popup.classList.remove('popup_opened');
}

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_info_name');
let descriptionInput = formElement.querySelector('.popup__input_info_description');

editButton.onclick = function () {
  popup.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  descriptionInput.value = userDescription.textContent;
}

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  userName.textContent = nameInput.value;
  userDescription.textContent = descriptionInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit); 