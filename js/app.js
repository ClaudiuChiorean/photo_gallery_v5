console.log('test');
baguetteBox.run('.album');

// Custom filter

const searchBar = document.getElementById(`search`);
searchBar.addEventListener('keyup', e => {
    let searchValue = e.target.value.toLowerCase();
    let photo = document.querySelectorAll('a.box-photo');
    photo.forEach(photo => {
        let dataCap = photo.getAttribute('data-caption');
        if (dataCap.toLowerCase().includes(searchValue)) {
            photo.style.display = 'grid';
        } else {
            photo.style.display = 'none';
        }
    });
});