import { Component, OnDestroy, OnInit } from "@angular/core";
import { disableDebugTools } from "@angular/platform-browser";
import { ProductService } from "./products.service";
import { Subscription } from "rxjs";



@Component({
    selector : 'app-products',
    templateUrl : './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy {
    productName : any = "book" ;
    isDisabled : any = true ;
    products = [''];
    private productSubscribtion : Subscription | undefined ;

    constructor(private x : ProductService){
    
          setTimeout(() => {
            this.isDisabled = false;

        }, 3000);

    }
    ngOnDestroy(): void {
        this.productSubscribtion?.unsubscribe();
    }
    ngOnInit(){
        this.products = this.x.getProducts();
        this.productSubscribtion = this.x.productsUpdated.subscribe(()=>{
            this.products = this.x.getProducts();
        });
        
    }


    onAddProduct(form: any) {
        // this.products.push(this.productName);
        // console.log(form);
        if(form.valid){
            // this.products.push(form.value.productName);
            // console.log(this.products);
            this.x.addProduct(form.value.productName);
        }
    }

    onRemoveProduct(productName : string){
        this.products = this.products.filter(p => p !== productName);
    }
   


  
}