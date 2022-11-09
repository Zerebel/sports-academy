// Navbar Toggle
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

const debounce = (fn) => {
  let frame;

  return (...params) => {
    if (frame) cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

// Scroll watch
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();

// Introduction Message
const message = [
  'more than 30 years in the ISF competition program',
  'organizing sports on and off campus',
  'empowering youth through sports and education',
];
// elements
const description = document.querySelector('#description');
let i = 0;
const changeMessage = () => {
  if (i > 2) i = 0;
  description.textContent = message[i];
  i++;
  return;
};
setInterval(changeMessage, 2500);
