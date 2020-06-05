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
            console.log(listDots);
            
            listDots.innerHTML = "";
            let stringItems = '';
            this.itemsList.map(item => {
                stringItems += `<li class="offers__dot ${item.class}" value="${item.val}"></li>`
            })
            listDots.innerHTML = stringItems;
        }

        clickNext() {
            nextBtn.addEventListener('click', () => {
                this.index = this.index === 0 ? itemEls.length - 1 : this.index -= 1;
                listEl.style.transform = "translateX(" + (-this.index * 100) + "px)";
            })
        }

        clickPrev() {
            prevBtn.addEventListener('click', () => {
                this.index = this.index === itemEls.length - 1 ? 0 : this.index += 1;
                listEl.style.transform = "translateX(" + (-this.index * 100) + "px)";
            })
        }
    }

    let newDotsList = new DotsList();
});



