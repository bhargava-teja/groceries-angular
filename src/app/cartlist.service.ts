import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartlistService {

  cartitems:any[]=new Array();

  constructor() { }
}
