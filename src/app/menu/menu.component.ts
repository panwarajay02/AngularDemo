import { Component, OnInit } from '@angular/core';

import { Person } from '../shared/dish';
import { PersonMenuService } from '../service/person-menu.service';
import { MatDialog } from '@angular/material';
import { ModalAvatarComponent } from '../modal-avatar/modal-avatar.component';
import { inherits } from 'util';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Person[];

  constructor(private personService: PersonMenuService, public dialog: MatDialog) {
    this.personService = personService;
  }

  ngOnInit() {
    this.personService.getHeroes().subscribe(person=>this.dishes=person);
  }

  handleError(){
    console.log("Error in menu service");
    return null;
  }

  openDialog(dish: Person): void {
    const dialogRef = this.dialog.open(ModalAvatarComponent, {
      width: '250px',
      height: '250px',
      data : {
        person: dish
      }
    });

    dialogRef.componentInstance.dishModal = dish;

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.dialog);
    });
  }

}
