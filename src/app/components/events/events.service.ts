import { Injectable } from '@angular/core';
import { Events } from './events.model';
import { Constants } from "../../utils/constants";
import { HttpClient } from "@angular/common/http";
import { CacheService } from '../../utils/cache/cache.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public events: Events[];

  constructor(
    private _http: HttpClient,
    private _cacheService: CacheService,
  ) { }

  async getEvents(): Promise<any> {

    try {

      const token = this._cacheService.load("token");
      const userId = this._cacheService.load("userId");

      const url = `${Constants.API_ENDPOINT}${Constants.EVENTS_ENDPOINT}${userId}`;
      
      const result = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        method: "GET"
      });

      const response = await result.json();

      if (response["token"] != "" && response["token"] != null && response["token"] != undefined) {
        this._cacheService.remove("token");
        this._cacheService.save({
          key: "token",
          data: response["token"],
          expirationMins: 60
        });
      }

      return response;
    }
    catch ( error ) {
      console.log(error);
    }
  }

}
