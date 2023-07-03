export default function landingPage() {
  const home = document.querySelector(`#home`)
  const about = document.querySelector(`#about`)
  const menu = document.querySelector(`#menu`)
  const contact = document.querySelector(`#contact`)
  const container = document.querySelector('#content');
  //create Navgation Items function
  function createNavbarItem(id, text) {
    const item = document.createElement('h1');
    item.id = id;
    item.textContent = text;
    return item;
  }
  //append nav-items to Navbar
  function createNavbar() {
    const navbar = document.createElement('div');
    navbar.id = 'nav-bar';
    const home = createNavbarItem('home', 'Home');
    const menu = createNavbarItem('menu', 'Menu');
    const about = createNavbarItem('about', 'About');
    const contact = createNavbarItem('contact', 'Contact');
    navbar.append(home, menu, about, contact);
    return navbar;
  }
  
  container.appendChild(createNavbar());
  
}

