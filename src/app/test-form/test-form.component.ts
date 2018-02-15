import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  onClosing(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: 'inherits',
      height: 'inherits'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
  }
}
