// script.js

function loadHeader() {
    // Adjust the path to header.html relative to the location of script.js
    const headerPath = getBasePath() + 'https://smev1.github.io/DillerDatabase/header.html';
    fetch(headerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            attachSearchFunctionality();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function getBasePath() {
    // Logic to determine the base path
    const currentPath = window.location.pathname;
    let depth = (currentPath.match(/\//g) || []).length - 1;
    let basePath = '';

    while (depth > 0) {
        basePath += '../';
        depth--;
    }
    return basePath;
}

function attachSearchFunctionality() {
    const pages = [
        { title: "Home", url: "/DillerDatabase/" },
        { title: "Elite 2.0", url: "/DillerDatabase/Elite2/" },
        { title: "Elite", url: "/DillerDatabase/Elite/" },
        { title: "Zombie Strike", url: "/DillerDatabase/zStrike/" },
        { title: "Alpha Strike", url: "/DillerDatabase/alphaStrike/" },
        { title: "Broken", url: "/DillerDatabase/Broken/" },
        { title: "Other", url: "/DillerDatabase/Other/" }
    ];

    document.querySelector('button').addEventListener('click', () => {
        const query = document.getElementById('search').value.toLowerCase();
        const preview = document.getElementById('preview');
        let results = '';

        pages.forEach(page => {
            if (page.title.toLowerCase().includes(query)) {
                results += `<div><a href="${page.url}"><strong>${page.title}</strong></a></div>`;
            }
        });

        if (results) {
            preview.innerHTML = results;
            preview.style.display = 'block';
        } else {
            preview.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', loadHeader);
