export default function clearPage(e) {
  const container = document.querySelector('#content');
  const navbar = document.querySelector('#nav-bar');
  while (container.lastChild !== navbar) {
    container.removeChild(container.lastChild);
  }
}