const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const closeModalButton = document.querySelector('.modal__action--negative');
const sideBarButton = document.querySelector('.toggle-button');
const sideBar = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

const showModal = () => {
  modal.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(() => backdrop.classList.add('open'), 10);
};

const closeModal = () => {
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');

  setTimeout(() => (backdrop.style.display = 'none'), 500);
};

if (closeModalButton) {
  closeModalButton.addEventListener('click', closeModal);
}

const openSideBar = () => {
  sideBar.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(() => backdrop.classList.add('open'), 10);
};

const closeSideBar = () => {
  sideBar.classList.remove('open');
};

selectPlanButtons.forEach((el) => el.addEventListener('click', showModal));
backdrop.addEventListener('click', closeModal);
sideBarButton.addEventListener('click', openSideBar);
backdrop.addEventListener('click', closeSideBar);
