import { Component, OnInit } from '@angular/core';

import { Person } from '../shared/dish';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes : Person[] = [
    {
      name:"ajay singh",
      age : 23,
      image: "/assets/images/img1.jpg",
      avatar: "/assets/images/avt1.jpg",
      rating:3.5
    },
    {
      name:"vijay samanth",
      age : 21,
      image: '/assets/images/img3.jpg',
      avatar: "/assets/images/avt3.jpg",
      rating:3.5
    },
    {
      name:"manjy nath",
      age : 29,
      image: '/assets/images/img2.jpg',
      avatar: "/assets/images/avt2.jpg",
      rating:3.5
    },   
    {
      name:"Sanjeet gupta",
      age : 22,
      image: "/assets/images/img4.jpg",
      avatar: "/assets/images/avt4.jpg",
      rating:3.5
    },   
    {
      name:"Manjeet Singh",
      age : 20,
      image: "/assets/images/img5.jpg",
      avatar: "/assets/images/avt5.jpg",
      rating:3.5
    },   
    {
      name:"Ranjeet chaudhary",
      age : 28,
      image: "/assets/images/img6.jpg",
      avatar: "/assets/images/avt6.jpg",
      rating:3.5
    },   
    {
      name:"Kumar vishal",
      age : 27,
      image: "/assets/images/img8.jpg",
      avatar: "/assets/images/avt8.jpg",
      rating:3.5
    },   
    {
      name:"Jeet Sulan",
      age : 18,
      image: "/assets/images/img7.jpg",
      avatar: "/assets/images/avt7.jpg",
      rating:3.5
    }
];

  constructor() { }

  ngOnInit() {
  }
}
