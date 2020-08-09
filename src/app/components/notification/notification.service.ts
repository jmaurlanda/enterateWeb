import { Injectable } from '@angular/core';
import { Constants } from "../../utils/constants";
import { HttpClient } from "@angular/common/http";
import { CacheService } from '../../utils/cache/cache.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private _http: HttpClient,
    private _cacheService: CacheService) { }
}
