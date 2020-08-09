import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Constants } from '../../utils/constants';
import { MatDatepicker } from '@angular/material/datepicker';
import { DialogComponent } from '../../utils/components/dialog/dialog.component';
import { DialogService } from '../../utils/components/dialog/dialog.service';
import { Events } from '../events/events.model';
import { CacheService } from '../../utils/cache/cache.service';
import { AppComponent } from '../../app.component';
import { StatisticsService } from './statistics.service';
import { MatDialog } from '@angular/material/dialog';
import { Chart } from 'chart.js';

interface AcademusoftData {
  id: Number;
  name: string;
}

interface AcademusoftProgramData {
  id: string;
  name: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  categories: AcademusoftData[];
  campus: AcademusoftData[];
  faculties: AcademusoftData[];
  jornalies: AcademusoftData[];
  estatements: AcademusoftData[];
  programs: AcademusoftProgramData[];
  event: Events;

  public blSpinnerModal = false;
  dtBefore: Date = new Date();

  public optionsPie = {
    tooltips: {
      enabled: true
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: 'black'
      }
    },
  };

  public optionsBar = {
    tooltips: {
      enabled: true
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: 'black'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          fontColor: "black",
          stepSize: 1,
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "black",
          beginAtZero: true,
        }
      }]
    }
  };

  searchForm = new FormGroup({
    fechaStart: new FormControl(this.dtBefore),
    fechaEnd: new FormControl(new Date()),
    category: new FormControl('0'),
    location: new FormControl('0'),
    faculty: new FormControl('0'),
    jornaly: new FormControl('0'),
    program: new FormControl('0'),
    estatement: new FormControl('0')
  });

  public chartSatisfaction: any = null;
  public chartCantEvents: any = null;
  public chartCantAssis: any = null;
  public chartAllGender: any = null;
  public chartAge: any = null;

  customers: any = [];

  public buttonSearch = Constants.BUTTON_SEARCH;
  public buttonClear = Constants.BUTTON_CLEAR;
  public buttonDownload = Constants.BUTTON_DOWNLOAD;

  public txtValidateName = Constants.TXTVALIDATENAMECREATEVENT;
  public txtName = Constants.TXTNAMECREATEEVENT;
  public txtImgName = Constants.IMG_CREATEEVENT_NAME;

  public txtValidateDescription = Constants.TXTVALIDATEDESCRIPTIONCREATEVENT;
  public txtDescription = Constants.TXTDESCRIPTIONCREATEEVENT;
  public txtImgDescription = Constants.IMG_CREATEEVENT_DESCRIPTION;

  public txtValidateDate = Constants.TXTVALIDATEDATECREATEVENT;
  public txtDate = Constants.TXTDATECREATEEVENT;
  public txtDateEnd = Constants.TXTDATECREATEEVENTEND;
  public txtImgDate = Constants.IMG_CREATEEVENT_DATE;

  public txtValidateHStart = Constants.TXTVALIDATEHSTARTCREATEVENT;
  public txtHStart = Constants.TXTHSTARTCREATEEVENT;
  public txtImgHStart = Constants.IMG_CREATEEVENT_HSTART;

  public txtValidateHEnd = Constants.TXTVALIDATEHENDCREATEVENT;
  public txtHEnd = Constants.TXTHENDCREATEEVENT;
  public txtImgHEnd = Constants.IMG_CREATEEVENT_HEND;

  public txtValidateCategory = Constants.TXTVALIDATECATEGORYCREATEVENT;
  public txtCategory = Constants.TXTCATEGORYCREATEEVENT;
  public txtImgCategory = Constants.IMG_CREATEEVENT_CATEGORY;

  public txtValidateEstatement = Constants.TXTVALIDATEESTATEMENTCREATEVENT;
  public txtEstatement = Constants.TXTESTATEMENTCREATEEVENT;
  public txtImgEstatement = Constants.IMG_CREATEEVENT_ESTATEMENT;

  public txtValidateLocation = Constants.TXTVALIDATELOCATIONCREATEVENT;
  public txtLocation = Constants.TXTLOCATIONCREATEEVENT;
  public txtImgLocation = Constants.IMG_CREATEEVENT_LOCATION;

  public txtValidateAsist = Constants.TXTVALIDATEASISTCREATEVENT;
  public txtAsist = Constants.TXTASISTCREATEEVENT;
  public txtImgAsist = Constants.IMG_CREATEEVENT_ASIST;

  public txtValidateIMG = Constants.TXTVALIDATEIMGCREATEVENT;
  public txtIMG = Constants.TXTIMGCREATEEVENT;
  public txtImgIMG = Constants.IMG_CREATEEVENT_IMG;

  public txtFaculty = Constants.TXTFACULTYCREATEEVENT;
  public txtImgFaculty = Constants.IMG_CREATEEVENT_FACULTY;

  public txtJornaly = Constants.TXTJORNALYCREATEEVENT;
  public txtImgJornaly = Constants.IMG_CREATEEVENT_JORNALY;

  public txtProgram = Constants.TXTPROGRAMCREATEEVENT;
  public txtImgProgram = Constants.IMG_CREATEEVENT_PROGRAM;

  public Title_Satisfaction = Constants.TITLE_SATISFACTION;
  public Description_Satisfaction = Constants.DESCRIPTION_SATISFACTION;

  public Title_CantEvents = Constants.TITLE_CANTEVENTS;
  public Description_CantEvents = Constants.DESCRIPTION_CANTEVENTS;

  public Title_CantAssis = Constants.TITLE_CANTASSIS;
  public Description_CantAssis = Constants.DESCRIPTION_CANTASSIS;

  public Title_AllGender = Constants.TITLE_ALLGENDER;
  public Description_AllGender = Constants.DESCRIPTION_ALLGENDER;

  public Title_Age = Constants.TITLE_AGE;
  public Description_Age = Constants.DESCRIPTION_AGE;

  constructor(
    private _statisticsService: StatisticsService,
    private _matDialog: MatDialog,
    private _dialogService: DialogService,
    private _appComponent: AppComponent,
    private _cacheService: CacheService) {
    this.dtBefore.setFullYear(this.dtBefore.getFullYear() - 1);
  }

  ngOnInit(): void {
    if (Number.parseInt(this._cacheService.load("rolId")) != Constants.ROLADMIN) {
      //this.blAdmin = false;
    } else {
      this._appComponent.blAdmin = true;
    }
    this.getConfig();
  }

  ngClearFilter(): void {
    this.searchForm = new FormGroup({
      fechaStart: new FormControl(this.dtBefore),
      fechaEnd: new FormControl(new Date()),
      category: new FormControl('0'),
      location: new FormControl('0'),
      faculty: new FormControl('0'),
      jornaly: new FormControl('0'),
      program: new FormControl('0'),
      estatement: new FormControl('0')
    });
    this.getConfig();
  }

  ngGetAllData(): void {
    this.getAllData();
  }

  search(): void {

    if (this.searchForm.status != "INVALID") {
      this.asyncSearch();
    } else {
      this.openDialog(Constants.INVALID_STATUS, "Advertencia");
    }
  }

  getProgram(programId: number): void {
    this.getPrograms(programId);
  }

  async getConfig(): Promise<any> {
    this.blSpinnerModal = true;
    const response = await this._statisticsService.getConfig();

    if (response["result"]) {
      let data = response["data"];
      this.campus = data["campus"];
      this.categories = data["categories"];
      this.faculties = data["faculties"];
      this.jornalies = data["jornalies"];
      this.estatements = data["estatements"];

      this.search();
    }
    else {
      this.openDialog(response["msg"], "Advertencia");
    }

    this.blSpinnerModal = false;
  }

  async getPrograms(programId: number): Promise<any> {
    this.blSpinnerModal = true;
    const response = await this._statisticsService.getPrograms(programId);

    if (response["result"]) {
      let data = response["data"];
      this.programs = data;
    }
    else {
      this.openDialog(response["msg"], "Advertencia");
    }

    this.blSpinnerModal = false;
  }

  openDialog(content: String, title: String) {
    const dialogRef = this._matDialog.open(DialogComponent);
    this._dialogService.dialog.title = title;
    this._dialogService.dialog.content = content;
  }

  async asyncSearch(): Promise<any> {
    this.blSpinnerModal = true;

    //Llenamos los datos del evento
    //this.event.name = this.createForm.controls["name"].value;
    await this.getLevelSatisfaction();
    await this.getCantEvents();
    await this.getAssist();
    await this.getallGender();
    await this.getAge();

    this.blSpinnerModal = false;
  }

  async getLevelSatisfaction(): Promise<any> {

    const response = await this._statisticsService.getLevelSatisfaction(
      this.searchForm.controls["fechaStart"].value,
      this.searchForm.controls["fechaEnd"].value,
      this.searchForm.controls["category"].value,
      this.searchForm.controls["location"].value,
      this.searchForm.controls["faculty"].value,
      this.searchForm.controls["jornaly"].value,
      this.searchForm.controls["program"].value,
      this.searchForm.controls["estatement"].value
    );
    
    if (response["result"]) {
      let data = response["data"];

      let labels = [];
      let datas = [];
      let colors = [];
      let oldColors = [];

      for (var nuIdx = 0; nuIdx < data.length; nuIdx++) {
        labels.push(data[nuIdx][2]);
        datas.push(data[nuIdx][0]);
        colors.push(this.getRandomColor(oldColors));
      }

      this.chartSatisfaction = new Chart('satisfactionLevel', {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Satisfacción',
              fill: false,
              data: datas,
              backgroundColor: colors
            }
          ]
        },
        options: this.optionsPie
      });
    }
    else {
      this.openDialog(response["msg"], "Advertencia");
    }
  }

  async getCantEvents(): Promise<any> {
    const response = await this._statisticsService.getCantEvents(
      this.searchForm.controls["fechaStart"].value,
      this.searchForm.controls["fechaEnd"].value,
      this.searchForm.controls["category"].value,
      this.searchForm.controls["location"].value,
      this.searchForm.controls["faculty"].value,
      this.searchForm.controls["jornaly"].value,
      this.searchForm.controls["program"].value,
      this.searchForm.controls["estatement"].value
    );
    
    if (response["result"]) {
      let data = response["data"];

      let oldColors = [];

      let datas = [
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_1 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_2 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_3 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_4 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_5 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_6 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_7 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_8 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_9 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_10 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_11 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.MES_12 }
      ];

      for (let nuIdx = 0; nuIdx < data.length; nuIdx++) {
        var date = new Date(data[nuIdx][1]);
        datas[date.getMonth()].data[0]++;
      }
      
      let cantDatas = datas.length;
      for (let i = 0; i < cantDatas; i++) {
        for (let nuIdx = 0; nuIdx < datas.length; nuIdx++) {
          if (datas[nuIdx].data[0] == 0) {
            datas.splice(nuIdx, 1);
          }
        }
      }

      var dataTemp = {
        labels: ['primero', 'segundo', 'tercero'],
        datasets: [{
          label: 'primero',
          data: [1, 2, 3],
          backgroundColor: [this.getRandomColor(oldColors), this.getRandomColor(oldColors), this.getRandomColor(oldColors)]
        }]
      }

      this.chartCantEvents = new Chart('cantEvents', {
        type: 'bar',
        data: {
          labels: ['Mes'],
          datasets: datas
        },
        options: this.optionsBar
      });
    }
    else {
      this.openDialog(response["msg"], "Advertencia");
    }
  }

  async getAssist(): Promise<any> {
    const response = await this._statisticsService.getCantAssist(
      this.searchForm.controls["fechaStart"].value,
      this.searchForm.controls["fechaEnd"].value,
      this.searchForm.controls["category"].value,
      this.searchForm.controls["location"].value,
      this.searchForm.controls["faculty"].value,
      this.searchForm.controls["jornaly"].value,
      this.searchForm.controls["program"].value,
      this.searchForm.controls["estatement"].value
    );

    if (response["result"]) {
      let data = response["data"];
      
      let oldColors = [];
      let oldState = [];

      let datas = [
      ];

      for (let nuIdx = 0; nuIdx < data.length; nuIdx++) {
        datas.push({ data: [data[nuIdx][0]], backgroundColor: this.getRandomColor(oldColors), fill: false, label: data[nuIdx][1] });
      }

      this.chartCantEvents = new Chart('allAssis', {
        type: 'bar',
        data: {
          labels: ['Estado'],
          datasets: datas
        },
        options: this.optionsBar
      });
    }
    else {
      this.openDialog(response["msg"], "Advertencia");
    }
  }

  async getallGender(): Promise<any> {

    const response = await this._statisticsService.getAllGender(
      this.searchForm.controls["fechaStart"].value,
      this.searchForm.controls["fechaEnd"].value,
      this.searchForm.controls["category"].value,
      this.searchForm.controls["location"].value,
      this.searchForm.controls["faculty"].value,
      this.searchForm.controls["jornaly"].value,
      this.searchForm.controls["program"].value,
      this.searchForm.controls["estatement"].value
    );

    if (response["result"]) {
      let data = response["data"];
      
      let labels = [];
      let datas = [];
      let colors = [];
      let oldColors = [];

      for (var nuIdx = 0; nuIdx < data.length; nuIdx++) {
        labels.push(data[nuIdx][1]);
        datas.push(data[nuIdx][0]);
        colors.push(this.getRandomColor(oldColors));
      }

      this.chartAllGender = new Chart('allGender', {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Satisfacción',
              fill: false,
              data: datas,
              backgroundColor: colors
            }
          ]
        },
        options: this.optionsPie
      });
    }
    else {
      this.openDialog(response["msg"], "Advertencia");
    }
  }

  async getAge(): Promise<any> {
    const response = await this._statisticsService.getAge(
      this.searchForm.controls["fechaStart"].value,
      this.searchForm.controls["fechaEnd"].value,
      this.searchForm.controls["category"].value,
      this.searchForm.controls["location"].value,
      this.searchForm.controls["faculty"].value,
      this.searchForm.controls["jornaly"].value,
      this.searchForm.controls["program"].value,
      this.searchForm.controls["estatement"].value
    );

    if (response["result"]) {
      let data = response["data"];
      
      let oldColors = [];

      let datas = [
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO1, edadMin: 1, edadMax: 5},
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO2, edadMin: 6, edadMax: 10 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO3, edadMin: 11, edadMax: 15 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO4, edadMin: 16, edadMax: 20 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO5, edadMin: 21, edadMax: 25 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO6, edadMin: 26, edadMax: 30 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO7, edadMin: 31, edadMax: 35 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO8, edadMin: 36, edadMax: 40 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO9, edadMin: 41, edadMax: 45 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO10, edadMin: 46, edadMax: 50 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO11, edadMin: 51, edadMax: 55 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO12, edadMin: 56, edadMax: 60 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO13, edadMin: 61, edadMax: 65 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO14, edadMin: 66, edadMax: 70 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO15, edadMin: 71, edadMax: 75 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO16, edadMin: 76, edadMax: 80 },
        { data: [0], backgroundColor: this.getRandomColor(oldColors), fill: false, label: Constants.QUINQUENIO17, edadMin: 81, edadMax: 500 }
      ];

      for (let nuIdx = 0; nuIdx < data.length; nuIdx++) {
        let nuEdad = data[nuIdx][1];
        let nuCant = data[nuIdx][0];

        for (let i = 0; i < datas.length; i++) {
          if (datas[i].edadMin <= nuEdad && datas[i].edadMax >= nuEdad) {
            datas[i].data[0] = datas[i].data[0] + nuCant;
            break;
          }
        }
      }

      let cantDatas = datas.length;
      for (let i = 0; i < cantDatas; i++) {
        for (let nuIdx = 0; nuIdx < datas.length; nuIdx++) {
          if (datas[nuIdx].data[0] == 0) {
            datas.splice(nuIdx, 1);
          }
        }
      }

      this.chartAge = new Chart('allAge', {
        type: 'bar',
        data: {
          labels: ['Edad'],
          datasets: datas
        },
        options: this.optionsBar
      });
    }
    else {
      this.openDialog(response["msg"], "Advertencia");
    }
  }

  async getAllData(): Promise<any> {
    const response = await this._statisticsService.getAllData(
      this.searchForm.controls["fechaStart"].value,
      this.searchForm.controls["fechaEnd"].value,
      this.searchForm.controls["category"].value,
      this.searchForm.controls["location"].value,
      this.searchForm.controls["faculty"].value,
      this.searchForm.controls["jornaly"].value,
      this.searchForm.controls["program"].value,
      this.searchForm.controls["estatement"].value
    );

    if (response["result"]) {
      let data = response["data"];

      for (let i = 0; i < data.length; i++) {
        this.customers.push({
          'id de academusoft': data[i][0],
          correo: data[i][1],
          genero: data[i][2],
          edad: data[i][3],
          'facultad': data[i][13],
          'id del programa': data[i][5],
          semestre: data[i][6],
          estamento: data[i][7],
          'estado del registro': data[i][11],
          'nivel de satisfacción': data[i][12],
          'identificador del evento': data[i][8],
          'nombre del evento': data[i][9],
        });
      }

      this._statisticsService.exportExcel(this.customers, 'ExportData');
    }
    else {
      this.openDialog(response["msg"], "Advertencia");
    }
  }

  getRandomColor(oldColors: String[]): string {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

    if (oldColors.indexOf(color) != -1) {
      return this.getRandomColor(oldColors);
    } else {
      oldColors.push(color);
      return color;
    }
  }
}
