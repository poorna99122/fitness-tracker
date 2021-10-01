import { Component } from "@angular/core";
import { disableDebugTools } from "@angular/platform-browser";



@Component({
    selector : 'app-products',
    templateUrl : './products.component.html'
})
export class ProductsComponent {
    productName : any = "book" ;
    isDisabled : any = true ;
    products = ['A book','A tree'];

    constructor(){
    
          setTimeout(() => {
            this.isDisabled = false;
        }, 3000);

    }


    onAddProduct(form: any) {
        // this.products.push(this.productName);
        // console.log(form);
        if(form.valid){
            this.products.push(form.value.productName);
            console.log(this.products);
        }
    }

    onRemoveProduct(productName : string){
        this.products = this.products.filter(p => p !== productName);
    }
   


  
}