import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private service: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
  }

  formGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl('')
  });

  onSubmit() {
    // console.log(this.formGroup.value);
    this.productData();
  }

  onCancel() {
    this.router.navigate(['/product']);
  }

  productData() {
    this.service.addProduct(this.formGroup.value).subscribe(
      resp => {
        // console.log(resp);
        this.router.navigate(['/product']);
      }, error => {
        console.error(error);
      }
    );
  }

  getDetail(id: string) {
    this.service.getDetail(id).subscribe(
      resp => {
        console.log(resp);
      }, error => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      param => {
        this.getDetail(param.id);
      });
  }

}
