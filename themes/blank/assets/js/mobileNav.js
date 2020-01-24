///
/// Mobile Nav
///

const mobileNavButton = document.getElementById('mobileNavButton');
const mobileNavItems = document.getElementById('navItems');
const mobileNavLabel = document.querySelector('.menu-label');
const burger = document.getElementById('navControlOpen');
const closer = document.getElementById('navControlClose');

mobileNavButton.addEventListener('click', function() {
  if (mobileNavItems.classList.contains('is-active')) {
    mobileNavButton.classList.remove('button-active');
    mobileNavItems.setAttribute('aria-expanded', 'false');
    mobileNavItems.classList.remove('is-active');
    mobileNavLabel.innerText = 'Menu';
    closer.style.display = 'none';
    burger.style.display = 'block';
  } else {
    mobileNavItems.classList.add('is-active');
    mobileNavItems.setAttribute('aria-expanded', 'true');
    mobileNavButton.classList.add('button-active');
    mobileNavLabel.innerText = 'Close';
    closer.style.display = 'block';
    burger.style.display = 'none';
  }
});
