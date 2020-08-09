import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public title: String;
  public content: String;

  constructor(public dialog: MatDialog, private _dialogService: DialogService) {
    this._dialogService.dialog = this;
    this.title = "";
    this.content = "";
  }

  ngOnInit(): void {
  }

  close() {
    this.dialog.closeAll();
  }

}
