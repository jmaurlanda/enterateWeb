import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from './utils/constants';
import { CacheService } from './utils/cache/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'enterateWeb';
  public blMenu = true;
  public blAdmin = false;
  public txtEvents = Constants.MENU_EVENTS;
  public txtRequets = Constants.MENU_REQUEST;
  public txtNotifications = Constants.MENU_NOTIFICATIONS;
  public txtStatistics = Constants.MENU_STATISTICS;

  constructor(
    private router: Router,
    private _cacheService: CacheService
  ) {
    const token = this._cacheService.load("token");
  }

  ngOnInit():void {
    this.router.navigate(['/events']);
  }

  exit(): void {
    this._cacheService.remove("token");
    this._cacheService.remove("userId");
    this._cacheService.remove("rolId");
    this._cacheService.remove("user");
    this._cacheService.remove("tokenAcademusoft");
    this._cacheService.remove("academusoftId");
    this.router.navigate(['/login']);
  }

}
