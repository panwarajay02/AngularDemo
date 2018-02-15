import { Component, OnInit } from '@angular/core';
import { TestFormComponent } from '../test-form/test-form.component';
import { MatDialog } from '@angular/material';
import { devModeEqual } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openTest(): void {
    const dialogRef = this.dialog.open(TestFormComponent, {
      width: '650px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
  }

}
