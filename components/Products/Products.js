class Products{
    productAdd(el,id){
        let activatingElement = el.parentElement.children[4];
        activatingElement.classList.add('active')
        setTimeout(() => {
            activatingElement.classList.remove('active');
        }, 1500);

        localStorageUtils.putProducts(id);

        menuPage.render();
    }

    render(){
        let html = '';
        CATALOG.forEach(({img,name,price,id})=>{
            html += `
                <div class="products__card">
                    <div class="products__img">
                        <img src="${img}" />
                    </div>
                    <span class="products__name">${name}</span>
                    <span class="products__price">${String(price)}$</span>
                    <div onclick="productsPage.productAdd(this,'${id}')" class="products__btn">
                        <span class="products__btn-1"></span>
                        <span class="products__btn-2"></span>
                    </div>
                    <span class="products__status">Added</span>
                </div>
            `;
        })

        PRODUCTS.innerHTML = `
            <div class="container">
                <div class="products__wrapper">
                    ${html}    
                </div>
            </div>
        `;
    };
};

let productsPage = new Products();
productsPage.render();