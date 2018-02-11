import { Component, OnInit } from '@angular/core';

import { Person } from '../shared/dish';
import { PersonMenuService } from '../service/person-menu.service';
import { MatDialog } from '@angular/material';
import { ModalAvatarComponent } from '../modal-avatar/modal-avatar.component';
import { inherits } from 'util';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  personService: PersonMenuService;
  dishes: Person[];

  constructor(personService: PersonMenuService, public dialog: MatDialog) {
    this.personService = personService;
  }

  ngOnInit() {
     this.dishes = this.personService.getPeopleWithPublicAccess();
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
