import { ProductService } from './../products.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   @Input() productName: string | undefined;
   @Output() productClicked = new EventEmitter();

  constructor(private ProductService : ProductService) { }

  ngOnInit(): void {
  }

  onClicked(){
    // this.productClicked.emit();
    this.ProductService.deleteProduct(this.productName);
  }

}
