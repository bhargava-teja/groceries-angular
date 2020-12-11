import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import product from '../_files/products.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  type:string;
  public productlist:{}[]=product;

  constructor(private _Activatedroute:ActivatedRoute,private router:Router) { }

  itemdetail(item){
    this.router.navigate(['/',item.type,item.id]);
  }
  ngOnInit(): void {
this._Activatedroute.paramMap.subscribe(params=>this.type=params.get('type'));
    
  }

}
