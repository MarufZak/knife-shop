class Header {

    render(){
        let html = `
            <div class="container">
                <div class="header__wrapper">
                    <a class="header__link" href="#">8 981 120-11-17</a>
                    <img src="components/Header/img/logo.png" class="header__logo" />
                    <img onclick="menuPage.menuToggle()" src="components/Header/img/Vector.svg" class="header__btn" />
                </div>
            </div>
        `;


        HEADER.innerHTML = html;
    };

};

let headerPage = new Header();
headerPage.render();