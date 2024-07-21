function loadHeader() {
    const headerPath = '/DillerDatabase/header.html';
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

function attachSearchFunctionality() {
    const pages = [
        { title: "Home", url: "/DillerDatabase/" },
        { title: "Elite 2.0", url: "/DillerDatabase/Elite2/" },
        { title: "Elite", url: "/DillerDatabase/Elite/" },
        { title: "Zombie Strike", url: "/DillerDatabase/zStrike/" },
        { title: "Alpha Strike", url: "/DillerDatabase/alphaStrike/" },
        { title: "Broken", url: "/DillerDatabase/Broken/" },
        { title: "Other", url: "/DillerDatabase/Other/" }
        // Add new pages here
    ];

    document.getElementById('searchButton').addEventListener('click', () => {
        const query = document.getElementById('search').value.toLowerCase();
        const popupContent = document.getElementById('popupContent');
        let results = '';

        pages.forEach(page => {
            if (page.title.toLowerCase().includes(query)) {
                results += `<div><a href="${page.url}"><strong>${page.title}</strong></a></div>`;
            }
        });

        if (results) {
            popupContent.innerHTML = results;
            showPopup();
        } else {
            popupContent.innerHTML = 'No results found';
            showPopup();
        }
    });

    document.getElementById('closePopup').addEventListener('click', () => {
        hidePopup();
    });
}

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', loadHeader);
