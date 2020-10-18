
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const offers = document.querySelector('.offers');
const offersList = document.querySelector('.offers__list');
const offersItems = document.querySelectorAll('.offers__item');
const dotList = document.querySelector('.offers__dots');
const offersContainer = document.querySelector('.offers__container');
const offersItemsLength = offersItems.length;

//set offers__item element width
const offersItemWidth = 530;

offersItems.forEach(item => {
    item.style.width = offersItemWidth + 'px';
})

offers.style.width = offersItemWidth + 200 + 'px';
offersContainer.style.width = offersItemWidth + 'px';
offersList.style.width = offersItemsLength * offersItemWidth + 'px';

class DotItem {
    constructor(val) {
        this.class = '';
        this.val = val;
    }

    clearItemClass() {
        this.class = '';
    }

    setItemClass() {
        this.class = 'offers__dot--active';
    }
}

class DotsList {
    constructor() {
        this.index = 0;
        this.itemsList = [];
        this.loadDotsList(offersItems.length);
        this.renderDotsList();
        this.clickPrev();
        this.clickNext();
    }

    loadDotsList(dotsLength) {
        let i = 0;

        while (i < dotsLength) {
            let newEl = new DotItem(i);

            if (i === 0) {
                newEl.setItemClass();
            }
            this.itemsList.push(newEl);
            i++;
        }
    }

    renderDotsList() {
        let stringItems = '';

        dotList.innerHTML = "";
        this.itemsList.map(item => {
            stringItems += `<li onclick="getSlide(event)" class="offers__dot ${item.class}" data-index="${item.val}"></li>`
        })
        dotList.innerHTML = stringItems;
    }

    lowerIndex() {
        this.index = this.index === 0 ? offersItems.length - 1 : this.index -= 1;
    }

    higherIndex() {
        this.index = this.index === offersItems.length - 1 ? 0 : this.index += 1;
    }


    clickPrev() {
        prevBtn.addEventListener('click', () => {
            this.itemsList[this.index].clearItemClass();
            this.lowerIndex();
            this.moveSlide();
            this.itemsList[this.index].setItemClass();
            this.renderDotsList();
        })
    }

    clickNext() {
        nextBtn.addEventListener('click', () => {
            this.itemsList[this.index].clearItemClass();
            this.higherIndex();
            this.moveSlide();
            this.itemsList[this.index].setItemClass();
            this.renderDotsList();
            this.itemsList.map(item => {
                item.clearItemClass();
            });
        })
    }

    moveSlide() {
        offersList.style.transform = "translateX(" + (-this.index * offersItemWidth) + "px)";
    }
 
    clickDot(ev) {
        const listElements = ev.target.closest('.offers__dots').querySelectorAll('.offers__dot');

        listElements.forEach(el => {
            el.classList.remove('offers__dot--active');
        })
        ev.target.classList.add('offers__dot--active');
        this.index = Number(ev.target.dataset.index);
        this.moveSlide();
    }
}

let newDotsList = new DotsList();

function getSlide(event) {
    newDotsList.clickDot(event);
}



