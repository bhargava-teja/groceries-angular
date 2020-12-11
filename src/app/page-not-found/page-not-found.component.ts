import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h2>404</h2>
    <h2>ERROR</h2>
    <h2>PAGE NOT FOUND</h2>
  `,
  styles: [
    `h2{margin-left:525px;
    margin-top:25px}`
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
