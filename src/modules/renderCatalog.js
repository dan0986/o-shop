import filter from './filter';

export default function renderCatalog(){
    const cards = document.querySelectorAll('.goods .card'),
        catalogList = document.querySelector('.catalog-list'),
        catalogBtn = document.querySelector('.catalog-button'),
        catalogWrapper = document.querySelector('.catalog'),
        filterTitle = document.querySelector('.filter-title h5'),
        categories = new Set();
   
    cards.forEach((card) => {
        categories.add(card.dataset.category);
    });
    
    categories.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });

    const allLi = catalogList.querySelectorAll('li');

    catalogBtn.addEventListener('click', (event) => {
        if (catalogWrapper.style.display){
            catalogWrapper.style.display = '';
        } else{
            catalogWrapper.style.display = 'block';
        }

        if (event.target.tagName === 'LI'){
            allLi.forEach((liElem) => {
                if (liElem === event.target){
                    liElem.classList.add('active');
                } else {
                    liElem.classList.remove('active');
                }
            });
            filterTitle.textContent = event.target.textContent;
            filter();
        }
    });


}