export default function createContact() {
    const container = document.querySelector('#content');
    const contactContainer = document.createElement('div');

    // const contactText = document.createElement('div');
    contactContainer.innerHTML = `
                  <h1> Phones</h1>
                  <h1> $ Oz92-12j-2jda1</h1>
                  <h1> # Oz92-34d-80c13</h1>
                  <h1>  address</h1>
                  <h1>  unknown regions</h1>`
    container.append(contactContainer);
};