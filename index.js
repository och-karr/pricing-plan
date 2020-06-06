
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const listEl = document.querySelector('.offers__list');
const itemEls = document.querySelectorAll('.offers__item');
const listDot = document.querySelector('.offers__dots');
const itemDots = document.querySelectorAll('.offers__dot');

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
        this.loadDotsList(itemEls.length);
        this.renderDotsList();
        this.clickPrev();
        this.clickNext();
    }

    loadDotsList(dotsLength) {
        let i = 0;
        while (i < dotsLength) {
            let newEl = new DotItem(i);
            this.itemsList.push(newEl);
            i++;
        }
    }

    renderDotsList() {

        listDot.innerHTML = "";
        let stringItems = '';
        this.itemsList.map(item => {
            stringItems += `<li onclick="getSlide(event)" class="offers__dot ${item.class}" data-index="${item.val}"></li>`
        })
        listDot.innerHTML = stringItems;
    }

    lowerIndex() {
        this.index = this.index === 0 ? itemEls.length - 1 : this.index -= 1;
    }

    higherIndex() {
        this.index = this.index === itemEls.length - 1 ? 0 : this.index += 1;
    }


    clickPrev() {
        prevBtn.addEventListener('click', () => {
            this.itemsList[this.index].clearItemClass();
            this.lowerIndex();
            listEl.style.transform = "translateX(" + (-this.index * 100) + "px)";
            this.itemsList[this.index].setItemClass();
            this.renderDotsList();
        })
    }

    clickNext() {
        nextBtn.addEventListener('click', () => {
            this.itemsList[this.index].clearItemClass();
            this.higherIndex();
            listEl.style.transform = "translateX(" + (-this.index * 100) + "px)";
            console.log(this.index);
            this.itemsList[this.index].setItemClass();
            this.renderDotsList();
        })
    }

    moveSlide() {
        listEl.style.transform = "translateX(" + (-this.index * 100) + "px)";
    }
 
    clickDot(ev) {
        const listElements = ev.target.closest('.offers__dots').querySelectorAll('.offers__dot');
        console.log('hello');
        listElements.forEach(el => {
            el.classList.remove('offers__dot--active');
        })
        ev.target.classList.add('offers__dot--active');
        this.index = Number(ev.target.dataset.index);
        this.moveSlide();
        console.log(this.index);
    }
}


let newDotsList = new DotsList();

function getSlide(event) {
    newDotsList.clickDot(event);
}



