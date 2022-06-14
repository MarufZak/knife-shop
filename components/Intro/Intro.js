class Intro {

    render(){
        let html = '';
        SLIDER.forEach(({img,name,desc})=>{
            html += `
            <div class="swiper-slide">
                <img src="${img}" class="swiper__img" />
                <h2 class="swiper__title">${name}</h2>
                <p class="swiper__desc">${desc}</p>
                <button class="swiper__btn" href="#">Подробнее</button>
            </div>
            `;
        });


        INTRO.innerHTML = `
        <div class="swiper">
            <div class="swiper-wrapper">
                ${html}
            </div>
            <div class="swiper-pagination"></div>
        </div>`;
    }

};

let introPage = new Intro();
introPage.render();