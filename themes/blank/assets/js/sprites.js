///
/// Ajaxy Load the sprite
///

const spritePath = '/images/socialMediaSprite.svg';
const nav = document.querySelector('.siteNavigation');
const div = document.createElement('div');
const ajax = new XMLHttpRequest();
ajax.open('GET', spritePath, true);
ajax.send();
ajax.onload = function (e) {
  div.setAttribute('class', 'social-svg');
  div.innerHTML = ajax.responseText;
  nav.insertBefore(div, nav.childNodes[0]);
};
