import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Person } from '../shared/dish';

@Component({
  selector: 'app-modal-avatar',
  templateUrl: './modal-avatar.component.html',
  styleUrls: ['./modal-avatar.component.scss']
})
export class ModalAvatarComponent implements OnInit {

  dishModal: Person;

  constructor(public dialogRef: MatDialogRef<ModalAvatarComponent>) { }

  ngOnInit() {
  }

}
