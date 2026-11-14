function saveSystemInfo() {
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);
    localStorage.setItem('language', navigator.language);
    localStorage.setItem('vendor', navigator.vendor);
    localStorage.setItem('cookiesEnabled', navigator.cookieEnabled);
    localStorage.setItem('screenSize', screen.width + 'x' + screen.height);
}

function showStorageInfo() {
    const box = document.getElementById('system-info');
    box.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        const p = document.createElement('p');
        p.textContent = key + ': ' + value;
        box.appendChild(p);
    }
}

saveSystemInfo();
showStorageInfo();


async function loadComments() {
    const list = document.getElementById('comments-list');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/8/comments');
        const comments = await response.json();

        list.innerHTML = '';

        for (let i = 0; i < comments.length; i++) {
            const card = document.createElement('div');
            card.className = 'comment';

            const name = document.createElement('h3');
            name.textContent = comments[i].name;

            const email = document.createElement('p');
            email.textContent = comments[i].email;

            const body = document.createElement('p');
            body.textContent = comments[i].body;

            card.appendChild(name);
            card.appendChild(email);
            card.appendChild(body);
            list.appendChild(card);
        }
    } catch (error) {
        list.textContent = 'Не вдалося завантажити відгуки.';
        console.error('Error:', error);
    }
}

loadComments();



const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-modal');

setTimeout(function () {
    modal.classList.add('open');
}, 60000);

closeBtn.addEventListener('click', function () {
    modal.classList.remove('open');
});


const themeBtn = document.getElementById('theme-btn');

const now = new Date();
const hours = now.getHours();

if (hours >= 7 && hours < 21) {
    document.body.classList.remove('dark-mode');
} else {
    document.body.classList.add('dark-mode');
}

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});


const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        topic: document.getElementById('topic').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            formStatus.textContent = result.message;
            contactForm.reset();
        } else {
            formStatus.textContent = result.error;
        }
    } catch (error) {
        formStatus.textContent = 'Не вдалося зв\'язатися з сервером.';
        console.error('Error:', error);
    }
});