import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import product from '../_files/products.json';
import { CartlistService } from '../cartlist.service'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id;
  itemDetail;
  public productlist: { id }[] = product;
     public buttonmsg:string="add to cart";
     public isDisabled:boolean=false;

  constructor(private _Activatedroute: ActivatedRoute, private cartlist: CartlistService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => this.id = params.get('id'));
    this.itemDetail = this.productlist.find(item => item.id == this.id);
    for(let i=0;i<this.cartlist.cartitems.length;i++){ 
      if(this.cartlist.cartitems[i].id==this.itemDetail.id){
        this.buttonmsg="in cart"
        this.isDisabled=true
      }
    }
  }

  addtocart(){
    this.itemDetail.incart=true;
    this.itemDetail.count=1;
    this.itemDetail.total=this.itemDetail.price;
    this.cartlist.cartitems.push(this.itemDetail)
    this.buttonmsg="in cart"
    this.isDisabled=true
  }

}
