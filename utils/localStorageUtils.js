class LocalStorageUtils{
    constructor(){
        this.keyName = 'products';
    }


    getProducts(){
        let localStorageResult = localStorage.getItem(this.keyName);
        if (localStorageResult !== null) {
            return JSON.parse(localStorageResult)
        } else {
            return []
        };
    }

    putProducts(id){
        let localStorageResult = this.getProducts();
        localStorageResult.push(id);
        localStorage.setItem(this.keyName,JSON.stringify(localStorageResult));
    }

    removeProduct(id){
        let localStorageResult = this.getProducts();
        let index = localStorageResult.indexOf(id);
        localStorageResult.splice(index,1);
        localStorage.setItem(this.keyName,JSON.stringify(localStorageResult));
    }
};

let localStorageUtils = new LocalStorageUtils();
