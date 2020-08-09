import { Component, OnInit } from '@angular/core';
import { Events } from './events.model';
import { EventsService } from './events.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../utils/components/dialog/dialog.service';
import { CacheService } from '../../utils/cache/cache.service';
import { DialogComponent } from '../../utils/components/dialog/dialog.component';
import { AppComponent } from '../../app.component';
import { Constants } from '../../utils/constants';
import { CreateEventComponent } from '../create-event/create-event.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource: Events[];
  public blSpinner = false;
  public notFound = true;
  public txtNotFound = Constants.GET_EVENTS_NOTFOUND;
  public blAdmin = true;

  /**
   * @param { EventsService } _eventsService
   */
  constructor(
    private _eventsService: EventsService,
    private _matDialog: MatDialog,
    private _dialogService: DialogService,
    private _cacheService: CacheService,
    private _appComponent: AppComponent,
    public dialog: MatDialog,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (Number.parseInt(this._cacheService.load("rolId")) != Constants.ROLADMIN) {
      this.blAdmin = false;
    } else {
      this._appComponent.blAdmin = true;
    }

    this.getEvents();
  }

  openDialog(content: String, title: String) {
    const dialogRef = this._matDialog.open(DialogComponent);
    this._dialogService.dialog.title = title;
    this._dialogService.dialog.content = content;
  }

  async getEvents(): Promise<any> {
    this.blSpinner = true;
    const response = await this._eventsService.getEvents();
    if (response["result"]) {
      this.dataSource = response["data"];
      this.notFound = false;
    } else if (response["msg"] !== undefined) {
      this.openDialog(response["msg"],"Advertencia");
    }
    this.blSpinner = false; 
  }

  openCreateDialog() {
    
    const dialogRef = this.dialog.open(CreateEventComponent, {
      width: '500px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEvents();
    });
  }

}
