document.addEventListener("DOMContentLoaded", (event) => {
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');
    const listEl = document.querySelector('.offers__list');
    const itemEls = document.querySelectorAll('.offers__item');
    const listDots = document.querySelector('.offers__dots');

    class DotItem {
        constructor() {
            this.class = '';
            this.val = '';
        }

        clearItemClass() {
            this.class = '';
        }

        setItemClass() {
            this.class = 'offers__dots--active';
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
                let newEl = new DotItem();
                this.itemsList.push(newEl);
                i++;
              }
        }

        renderDotsList() {
                       
            listDots.innerHTML = "";
            console.log(listDots);
            let stringItems = '';
            this.itemsList.map(item => {
                console.log(item.class);
                
                stringItems += `<li class="offers__dot ${item.class}" value="${item.val}"></li>`
            })
            listDots.innerHTML = stringItems;
        }

        lowerIndex() {
            this.index = this.index === 0 ? itemEls.length - 1 : this.index -= 1;
        }

        higherIndex() {
            this.index = this.index === itemEls.length - 1 ? 0 : this.index += 1;
        }
    

        clickNext() {
            nextBtn.addEventListener('click', () => {
                this.itemsList[this.index].clearItemClass();
                this.lowerIndex();
                listEl.style.transform = "translateX(" + (-this.index * 100) + "px)";
                this.itemsList[this.index].setItemClass();
                this.renderDotsList();
            })
        }

        clickPrev() {
            prevBtn.addEventListener('click', () => {
                this.itemsList[this.index].clearItemClass();
                this.higherIndex();
                listEl.style.transform = "translateX(" + (-this.index * 100) + "px)";
                this.itemsList[this.index].setItemClass();
                this.renderDotsList();
            })
        }
    }

    let newDotsList = new DotsList();
});



