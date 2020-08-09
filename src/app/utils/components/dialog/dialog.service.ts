import { Injectable } from '@angular/core';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public dialog: DialogComponent;

  constructor() { }
}
