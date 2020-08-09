import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from '../../utils/cache/cache.service';
import { Constants } from '../../utils/constants';
import { Events } from '../events/events.model';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  constructor(private _http: HttpClient,
    private _cacheService: CacheService) { }

  async getConfig(): Promise<any> {

    try {

      const token = this._cacheService.load("token");

      const url = `${Constants.API_ENDPOINT}${Constants.EVENTS_ENDPOINT}${Constants.CONFIGURATION_ENDPOINT}`;

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
          expirationMins: 360
        });
      }

      return response;
    }
    catch (error) {
      console.log(error);
    }
  }

  async getPrograms(programId: number): Promise<any> {

    try {

      const token = this._cacheService.load("token");

      const url = `${Constants.API_ENDPOINT}${Constants.EVENTS_ENDPOINT}${Constants.PROGRAMS_ENDPOINT}${programId}`;
      
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
          expirationMins: 360
        });
      }

      return response;
    }
    catch (error) {
      console.log(error);
    }
  }

  async createEvent(event: Events): Promise<any> {

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
        method: "POST",
        body: JSON.stringify(event)
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
    catch (error) {
      console.log(error);
    }
  }

  async loadFile(img: any, name: String): Promise<any> {
    
    try {

      const academusoftToken = this._cacheService.load("tokenAcademusoft");
      const academusoftId = this._cacheService.load("academusoftId");
      const jsonDTO = `{"aplicacion":"${Constants.FILE_API_NAME}","pegeId":${academusoftId},"directorio":"${name}"}`;
      
      const url = `${Constants.API_FILE_ENDPOINT}`;

      var formData = new FormData();
      formData.set("fileDTO", jsonDTO);
      formData.set("file", img);

      var request = new XMLHttpRequest();
      request.open("POST", url, false);
      request.setRequestHeader('Authorization', academusoftToken);
      await request.send(formData);
      
      const response = await request.response;

      return response;
    }
    catch (error) {
      console.log(error);
    }
  }

}
