const searchInput = document.getElementById('searchInput');
const contactList = document.getElementById('contactList');
const listItems = contactList.querySelectorAll('.contact-item');

searchInput.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    listItems.forEach(item => {
        const contactName = item.querySelector('span').textContent.toLowerCase();
        if (contactName.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});