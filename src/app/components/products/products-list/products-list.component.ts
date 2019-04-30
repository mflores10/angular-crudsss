import { Component, OnInit } from '@angular/core';

// model
import { Product } from '../../../models/product';

// service
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor( private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
    .snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.productList.push(x as Product);
        });
      });
  }


  onEdit(product: Product) {
    this.productService.selectedProduct = Object.assign({}, product);
  }

  onDelete($key: string) {
    if(confirm('Are you sure you want to delete it?')) {
      this.productService.deleteProduct($key);
      this.toastr.warning('Deleted Successfully', 'Product Removed');
    }
  }

}