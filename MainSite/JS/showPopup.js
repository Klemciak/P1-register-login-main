const popUpWrap = document.querySelector('.popUpWrap');
const editPopUp = document.querySelector('.editPopUp');
const afterPopUp = document.querySelector('.afterPopUp');

const editBtn = document.querySelector('.editAccount__button');
const cancelBtn = document.querySelector('.editPopUp__buttons__cancel');
const btnX = document.querySelector('.editPopUp__exit');

const showHidePopup = (e) => {
    e.preventDefault();
    popUpWrap.classList.toggle('active');
    editPopUp.classList.toggle('active');
}

editBtn.addEventListener('click', showHidePopup);
btnX.addEventListener('click', showHidePopup);
cancelBtn.addEventListener('click', showHidePopup);