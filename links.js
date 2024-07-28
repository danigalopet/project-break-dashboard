document.addEventListener('DOMContentLoaded', loadLinks);

function loadLinks() {
    const links = JSON.parse(localStorage.getItem('links')) || [];
    const linkList = document.getElementById('linkList');
    if (linkList) {
        linkList.innerHTML = '';
        links.forEach(link => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a> <button onclick="removeLink('${link.url}')">Eliminar</button>`;
            linkList.appendChild(li);
        });
    }
}

function addLink() {
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;
    if (title && url) {
        const links = JSON.parse(localStorage.getItem('links')) || [];
        links.push({ title, url });
        localStorage.setItem('links', JSON.stringify(links));
        loadLinks();
        document.getElementById('title').value = '';
        document.getElementById('url').value = '';
    }
}

function removeLink(url) {
    let links = JSON.parse(localStorage.getItem('links'));
    links = links.filter(link => link.url !== url);
    localStorage.setItem('links', JSON.stringify(links));
    loadLinks();
}
