import { Injectable } from '@angular/core';
import { Person } from '../shared/dish';

@Injectable()
export class PersonMenuService {

  constructor() { }

  dishes: Person[] = [
    {
      id: 1,
      name: 'ajay singh',
      age : 23,
      image: '/assets/images/img1.jpg',
      avatar: {id: 1, pic: '/assets/images/avt1.jpg', name: 'Humph', rank: 3, rating: 5, desc: 'Good Boy'},
      rating: 3.5,
      access: true
    },
    {
      id: 2,
      name: 'vijay samanth',
      age : 21,
      image: '/assets/images/img3.jpg',
      avatar: {id: 2, pic: '/assets/images/avt3.jpg', name: 'Jacko', rank: 4, rating: 5, desc: 'Pretty Boy'},
      rating: 3.5,
      access: true
    },
    {
      id: 3,
      name: 'manjy nath',
      age : 29,
      image: '/assets/images/img2.jpg',
      avatar: {id: 3, pic: '/assets/images/avt2.jpg', name: 'Whacki', rank: 5, rating: 5, desc: 'Smart Boy'},
      rating: 3.5,
      access: true
    },
    {
      id: 4,
      name: 'Sanjeet gupta',
      age : 22,
      image: '/assets/images/img4.jpg',
      avatar: {id: 4, pic: '/assets/images/avt4.jpg', name: 'Lolzo', rank: 4, rating: 5, desc: 'Lazy but Good'},
      rating: 3.5,
      access: true
    },
    {
      id: 5,
      name: 'Manjeet Singh',
      age : 20,
      image: '/assets/images/img5.jpg',
      avatar: {id: 5, pic: '/assets/images/avt5.jpg', name: 'Murphy', rank: 4, rating: 4, desc: 'Chocolate Kid'},
      rating: 3.5,
      access: true
    },
    {
      id: 6,
      name: 'Ranjeet chaudhary',
      age : 28,
      image: '/assets/images/img6.jpg',
      avatar: {id: 6, pic: '/assets/images/avt6.jpg', name: 'Solony', rank: 5, rating: 5, desc: 'Mad Girl'},
      rating: 3.5,
      access: true
    },
    {
      id: 7,
      name: 'Kumar vishal',
      age : 27,
      image: '/assets/images/img8.jpg',
      avatar: {id: 7, pic: '/assets/images/avt8.jpg', name: 'Morohy', rank: 4, rating: 5, desc: 'Looovely'},
      rating: 3.5,
      access: true
    },
    {
      id: 8,
      name: 'Jeet Sulan',
      age : 18,
      image: '/assets/images/img7.jpg',
      avatar: {id: 8, pic: '/assets/images/avt7.jpg', name: 'Slomy', rank: 3, rating: 5, desc: 'Good Lazy Girl'},
      rating: 3.5,
      access: true
    }
];


getPeopleWithPublicAccess(): Person[] {
  for (const person of this.dishes) {
    return this.dishes.filter( person => person.access === true);
  }
}



}
