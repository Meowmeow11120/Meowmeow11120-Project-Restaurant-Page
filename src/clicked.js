export default function clicked(e) {
    const elements = document.getElementsByClassName('clicked'); // Get all elements with class 'example'

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('clicked'); // Remove class 'example' from each element
    }
    e.target.classList.add('clicked');
};