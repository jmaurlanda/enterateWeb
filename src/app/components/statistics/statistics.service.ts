import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from '../../utils/cache/cache.service';
import { Constants } from '../../utils/constants';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private _http: HttpClient,
    private _cacheService: CacheService) { }

  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';

  public exportExcel(jsonData: any[], fileName: string): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, fileName);
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.fileType });
    FileSaver.saveAs(data, fileName + this.fileExtension);
  }

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

      if (response["token"] != "" && response["token"] != null) {
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

  async getLevelSatisfaction(dtStar:Date, dtEnd:Date, category:Number, location:Number, faculty:Number, jornaly:Number, program:String, estatement: Number): Promise<any> {

    try {

      const token = this._cacheService.load("token");
      const userId = this._cacheService.load("userId");

      const url = `${Constants.API_ENDPOINT}${Constants.STATISTICS_ENDPOINT}${Constants.SATISFACTIONLEVEL_ENDPOINT}${userId}?`;

      let urlFinal = url;
      if (dtStar) {
        urlFinal = urlFinal.concat(`dtStart=${dtStar}&`);
      }
      if (dtEnd) {
        urlFinal = urlFinal.concat(`dtEnd=${dtEnd}&`);
      }
      urlFinal = urlFinal.concat(`categoryId=${category}&estamentId=${estatement}&facultyId=${faculty}&programId=${program}&jornalyId=${jornaly}&campusId=${location}`);

      const result = await fetch(urlFinal, {
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

  async getAllGender(dtStar: Date, dtEnd: Date, category: Number, location: Number, faculty: Number, jornaly: Number, program: String, estatement: Number): Promise<any> {

    try {

      const token = this._cacheService.load("token");
      const userId = this._cacheService.load("userId");

      const url = `${Constants.API_ENDPOINT}${Constants.STATISTICS_ENDPOINT}${Constants.ALLGENDER_ENDPOINT}${userId}?`;

      let urlFinal = url;
      if (dtStar) {
        urlFinal = urlFinal.concat(`dtStart=${dtStar}&`);
      }
      if (dtEnd) {
        urlFinal = urlFinal.concat(`dtEnd=${dtEnd}&`);
      }
      urlFinal = urlFinal.concat(`categoryId=${category}&estamentId=${estatement}&facultyId=${faculty}&programId=${program}&jornalyId=${jornaly}&campusId=${location}`);

      const result = await fetch(urlFinal, {
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

  async getCantEvents(dtStar: Date, dtEnd: Date, category: Number, location: Number, faculty: Number, jornaly: Number, program: String, estatement: Number): Promise<any> {

    try {

      const token = this._cacheService.load("token");
      const userId = this._cacheService.load("userId");

      const url = `${Constants.API_ENDPOINT}${Constants.STATISTICS_ENDPOINT}${Constants.CANTS_EVENTS_ENDPOINT}${userId}?`;

      let urlFinal = url;
      if (dtStar) {
        urlFinal = urlFinal.concat(`dtStart=${dtStar}&`);
      }
      if (dtEnd) {
        urlFinal = urlFinal.concat(`dtEnd=${dtEnd}&`);
      }
      urlFinal = urlFinal.concat(`categoryId=${category}&estamentId=${estatement}&facultyId=${faculty}&programId=${program}&jornalyId=${jornaly}&campusId=${location}`);

      const result = await fetch(urlFinal, {
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

  async getCantAssist(dtStar: Date, dtEnd: Date, category: Number, location: Number, faculty: Number, jornaly: Number, program: String, estatement: Number): Promise<any> {

    try {

      const token = this._cacheService.load("token");
      const userId = this._cacheService.load("userId");

      const url = `${Constants.API_ENDPOINT}${Constants.STATISTICS_ENDPOINT}${Constants.CANT_ASSIST_ENDPOINT}${userId}?`;

      let urlFinal = url;
      if (dtStar) {
        urlFinal = urlFinal.concat(`dtStart=${dtStar}&`);
      }
      if (dtEnd) {
        urlFinal = urlFinal.concat(`dtEnd=${dtEnd}&`);
      }
      urlFinal = urlFinal.concat(`categoryId=${category}&estamentId=${estatement}&facultyId=${faculty}&programId=${program}&jornalyId=${jornaly}&campusId=${location}`);

      const result = await fetch(urlFinal, {
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

  async getAge(dtStar: Date, dtEnd: Date, category: Number, location: Number, faculty: Number, jornaly: Number, program: String, estatement: Number): Promise<any> {

    try {

      const token = this._cacheService.load("token");
      const userId = this._cacheService.load("userId");

      const url = `${Constants.API_ENDPOINT}${Constants.STATISTICS_ENDPOINT}${Constants.ALL_AGE_ENDPOINT}${userId}?`;

      let urlFinal = url;
      if (dtStar) {
        urlFinal = urlFinal.concat(`dtStart=${dtStar}&`);
      }
      if (dtEnd) {
        urlFinal = urlFinal.concat(`dtEnd=${dtEnd}&`);
      }
      urlFinal = urlFinal.concat(`categoryId=${category}&estamentId=${estatement}&facultyId=${faculty}&programId=${program}&jornalyId=${jornaly}&campusId=${location}`);

      const result = await fetch(urlFinal, {
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

  async getAllData(dtStar: Date, dtEnd: Date, category: Number, location: Number, faculty: Number, jornaly: Number, program: String, estatement: Number): Promise<any> {

    try {

      const token = this._cacheService.load("token");
      const userId = this._cacheService.load("userId");

      const url = `${Constants.API_ENDPOINT}${Constants.STATISTICS_ENDPOINT}${userId}?`;

      let urlFinal = url;
      if (dtStar) {
        urlFinal = urlFinal.concat(`dtStart=${dtStar}&`);
      }
      if (dtEnd) {
        urlFinal = urlFinal.concat(`dtEnd=${dtEnd}&`);
      }
      urlFinal = urlFinal.concat(`categoryId=${category}&estamentId=${estatement}&facultyId=${faculty}&programId=${program}&jornalyId=${jornaly}&campusId=${location}`);

      const result = await fetch(urlFinal, {
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

      if (response["token"] != "" && response["token"] != null) {
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
}
