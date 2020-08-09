import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';
import { Events } from '../events/events.model';
import { AppComponent } from '../../app.component';
import { CacheService } from '../../utils/cache/cache.service';
import { DialogService } from '../../utils/components/dialog/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../utils/components/dialog/dialog.component';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  dataSource: Events[];
  public blSpinner = false;
  public notFound = true;
  public txtNotFound = Constants.GET_REQUEST_NOTFOUND;
  public buttonRechazar = Constants.BUTTON_RECHAZAR;
  public buttonAceptar = Constants.BUTTON_ACEPTAR;

  constructor(
    private _requestService: RequestService,
    private _matDialog: MatDialog,
    private _dialogService: DialogService,
    private _cacheService: CacheService,
    private _appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.getRequests();
  }

  acceptEvent(event: Events): void {
    event.userAdmId = this._cacheService.load("userId");
    event.stateId = 1;
    this.updateEvent(event);
  }

  discardEvent(event: Events): void {
    event.userAdmId = this._cacheService.load("userId");
    event.stateId = 5;
    this.updateEvent(event);
  }

  openDialog(content: String, title: String) {
    const dialogRef = this._matDialog.open(DialogComponent);
    this._dialogService.dialog.title = title;
    this._dialogService.dialog.content = content;
  }

  async getRequests(): Promise<any> {
    this.blSpinner = true;
    const response = await this._requestService.getRequests();
    if (response["result"]) {
      this.dataSource = response["data"];
      this.notFound = false;
    } else {
      this.openDialog(response["msg"], "Advertencia");
      this.notFound = true;
    }
    this.blSpinner = false;
  }

  async updateEvent(event: Events): Promise<any> {
    this.blSpinner = true;
    const response = await this._requestService.acceptDiscardEvent(event);

    if (response["result"]) {
      this.openDialog(response["msg"], "Información");
      const responseGetEvents = await this._requestService.getRequests();
      if (responseGetEvents["result"]) {
        this.dataSource = responseGetEvents["data"];
        this.notFound = false;
      } else {
        this.dataSource = [];
        this.notFound = true;
      }
    } else {
      this.openDialog(response["msg"], "Advertencia");
    }

    this.blSpinner = false;
  }
}
