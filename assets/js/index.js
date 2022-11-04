const menu_items = document.querySelector('#menu_items');
const btnMenu = document.querySelector('#menu');

const toggleMenu = () => {
  if (!menu_items.classList.contains('hidden')) {
    return menu_items.classList.add('hidden');
  }
  menu_items.classList.add('flex');
  return menu_items.classList.remove('hidden');
};

btnMenu.addEventListener('click', toggleMenu, false);
