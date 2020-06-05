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
    }

    let newDotsList = new DotsList();
});



