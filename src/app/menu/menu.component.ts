import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes : Dish[] = [
    {
      name:"ajay singh",
      price : 232,
      image: "/assets/images/img1.jpg"
    },
    {
      name:"vijay samanth",
      price : 231,
      image: '/assets/images/img3.jpg'
    },
    {
      name:"manjy nath",
      price : 239,
      image: '/assets/images/img2.jpg'
    },   
    {
      name:"Sanjay gupta",
      price : 222,
      image: "/assets/images/img4.jpg"
    },   
    {
      name:"Manjeet Singh",
      price : 210,
      image: "/assets/images/img5.jpg"
    },   
    {
      name:"Ranjeet chaudhary",
      price : 218,
      image: "/assets/images/img6.jpg"
    },   
    {
      name:"Kumar vishal",
      price : 227,
      image: "/assets/images/img8.jpg"
    },   
    {
      name:"Jeet Sulan",
      price : 198,
      image: "/assets/images/img7.jpg"
    }
];

  constructor() { }

  ngOnInit() {
  }
}
