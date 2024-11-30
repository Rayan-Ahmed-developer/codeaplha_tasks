let filterItem = document.querySelector('.items');
let filterImages = document.querySelectorAll('.project-img');

window.addEventListener('load', () => {
    filterItem.addEventListener('click', (selectedItem) => {
        if (selectedItem.target.classList.contains('item')) { 
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');

            let filterName = selectedItem.target.getAttribute('data-name'); 
            filterImages.forEach((image) => {
                let imageCategory = image.getAttribute('data-name');
                if (imageCategory === filterName || filterName === 'all') {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none'; 
                }
            });
        }
    });
});

