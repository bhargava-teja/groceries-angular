import { Component, OnInit } from '@angular/core';


import { CartlistService} from '../cartlist.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  itemDetail;
  price:number=0;
  subtotal:number=0;
  tax:number=0;
  total:number=0;
  cartitemslist:any[]=new Array();
  constructor(private cartlist:CartlistService) { }

  ngOnInit(): void {
    this.cartitemslist=this.cartlist.cartitems
    this.addTotal();
  }

  incrementCount(selecteditem){
       this.itemDetail =this.cartitemslist.find(item=>item.id==selecteditem.id);
       this.itemDetail.count=this.itemDetail.count+1;
       
       this.price=this.itemDetail.price*this.itemDetail.count;
       this.itemDetail.total=this.price
       this.addTotal();
  }

  decrementCount(selecteditem){
    this.itemDetail =this.cartitemslist.find(item=>item.id==selecteditem.id);
    if(this.itemDetail.count==1){
      this.removeitem(this.itemDetail);
    }
    this.itemDetail.count=this.itemDetail.count-1;
    this.price=this.itemDetail.price*this.itemDetail.count;
    this.itemDetail.total=this.price;
    this.addTotal();
}

removeitem(selecteditem){
  this.itemDetail =this.cartitemslist.find(item=>item.id==selecteditem.id);
 this.cartitemslist= this.cartitemslist.filter(item=>item.id!=selecteditem.id);
 this.addTotal();

}

clearcart(){
  this.cartitemslist=[];
  this.cartlist.cartitems=[];
}


addTotal(){

  this.subtotal=0;
  this.tax=0;
  this.total=0;
  for(let i=0;i<this.cartitemslist.length;i++){ 
    this.subtotal=this.cartitemslist[i].total+this.subtotal;
   
    this.tax=this.subtotal*1/100;
   this.tax=parseFloat( this.tax.toFixed(2));
   
    this.total=this.tax+this.subtotal;
    
  }
}
}
