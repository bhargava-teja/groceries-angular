import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div>
    <h2>
      Welcome to Store
    </h2>
    <h2>Category:</h2>
    <h4>Vegetables</h4>
 <h4>Fruits</h4>
<h4> Dairy</h4>
 <h4>Bakery</h4>
              
 </div>
 
  `,
  styles: [

    `div{
      margin-left:500px
    }
    
    h2{
     
      margin-top:20px;
    color:green}
    h4{
      color:skyblue;
      margin-top:20px;
    }`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
