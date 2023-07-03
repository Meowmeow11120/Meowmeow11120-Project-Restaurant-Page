import landingPage from './landingPage.js';
import aboutPage from './about.js';
import menuPage from './menu.js';
import createContact from './contact.js';
import clearPage from './clearpage.js';
import clicked from './clicked.js';
landingPage();

home.addEventListener('click', (e) => {
    clicked(e);
    clearPage();
});


menu.addEventListener('click', (e) => {
    clearPage();
    clicked(e);
    menuPage();
});

contact.addEventListener('click', (e) => {
    clearPage();
    clicked(e);
    createContact();
});

about.addEventListener('click', (e) => {
    clearPage();
    clicked(e);
    aboutPage();
});

