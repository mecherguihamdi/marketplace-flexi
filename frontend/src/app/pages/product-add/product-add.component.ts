import { Component, OnInit } from '@angular/core';
import {ProductInfo} from "../../models/productInfo";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product = new ProductInfo();

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  productId: string;
  isEdit = false;

  ngOnInit() {
  }

  add() {
    this.productService.create(this.product).subscribe(prod => {
            if (!prod) throw new Error;
            this.router.navigate(['/ventes/produits']);
        },
        e => {
        });
}

}
