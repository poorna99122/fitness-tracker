import { Component } from "@angular/core";
import { disableDebugTools } from "@angular/platform-browser";



@Component({
    selector : 'app-products',
    templateUrl : './products.component.html'
})
export class ProductsComponent {
    productName : any = "Book" ;
    isDisabled : any = true ;

    constructor(){
        // setTimeout(() => {
        //     this.productName = "tree";
        // }, 3000);


          setTimeout(() => {
            this.isDisabled = false;
        }, 3000);

       


       
    }


  
}