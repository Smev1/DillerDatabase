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
        console.log('Search query:', query); // Debugging line
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
            console.log('Search results:', results); // Debugging line
        } else {
            preview.innerHTML = 'No results found';
            preview.style.display = 'block';
            console.log('No results found'); // Debugging line
        }
    });
}

document.addEventListener('DOMContentLoaded', loadHeader);
