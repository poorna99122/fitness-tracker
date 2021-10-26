import { Subject } from 'rxjs';



export class ProductService {
    private products = ['A Book'];
    productsUpdated = new Subject();

    addProduct(productName : string){
        this.products.push(productName);
        this.productsUpdated.next();
    }


    getProducts(){
        return[...this.products];
    }

    deleteProduct(productName : String | undefined){
        this.products = this.products.filter(p => p !== productName);
        this.productsUpdated.next();
    }


}