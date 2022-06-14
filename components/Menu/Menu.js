class Menu {
    productDelete(id){
        localStorageUtils.removeProduct(id)
        this.render()
    }
    menuToggle(){
        document.querySelector('.menu').classList.toggle('active');
    }
    count(array,id){
        var names = {};
        array.forEach(item => {
            names[item] = (names[item] || 0) + 1;
        });;
        return names[id]
    }

    render() {
        let localStorageProducts = localStorageUtils.getProducts();
        let html = '';
        let overallPrice = 0;
        let deleteButton = `
            <button class="menu__delete">remove</button>
        `;

        CATALOG.forEach(({id,price,name}) => {
            let productNumber = this.count(localStorageUtils.getProducts() , id);
            if (localStorageProducts.indexOf(id) !== -1) {
                html += `
                    <tr>
                        <td>${name}</td>
                        <td>${this.count(localStorageUtils.getProducts() , id)}</td>
                        <td>${String(price * productNumber)}$</td>
                        <td onclick="menuPage.productDelete('${id}')">${deleteButton}</td>
                    </tr>
                `;
            }
            if (typeof this.count(localStorageUtils.getProducts() , id) === "number") {
                overallPrice += price * Number(productNumber)
            }
        })
        console.log(overallPrice);


        MENU.innerHTML = `
        <table class="menu__table">
            <thead>	
                <tr>		
                    <th>Name</th>
                    <th>Number</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                ${html}
            </tbody>
        </table>
        <span class="menu__overall">Overall: ${String(overallPrice)}$</span>
        <img onclick="menuPage.menuToggle()" src="components/Menu/img/close.png" class="menu__close" />
        `;
    }
};



let menuPage = new Menu();
menuPage.render();