import { Component, OnInit, ElementRef } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CreateEventService } from './create-event.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Constants } from '../../utils/constants';
import { MatDatepicker } from '@angular/material/datepicker';
import { DialogComponent } from '../../utils/components/dialog/dialog.component';
import { DialogService } from '../../utils/components/dialog/dialog.service';
import { Events } from '../events/events.model';
import { CacheService } from '../../utils/cache/cache.service';

interface AcademusoftData {
  id: Number;
  name: string;
}

interface AcademusoftProgramData {
  id: string;
  name: string;
}

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  categories: AcademusoftData[];
  campus: AcademusoftData[];
  faculties: AcademusoftData[];
  jornalies: AcademusoftData[];
  estatements: AcademusoftData[];
  programs: AcademusoftProgramData[];
  event: Events;

  public blSpinnerModal = false;

  createForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    fechaStart: new FormControl(''),
    hourStart: new FormControl(''),
    hourEnd: new FormControl(''),
    category: new FormControl(''),
    location: new FormControl(''),
    cantUsers: new FormControl(''),
    faculty: new FormControl(''),
    jornaly: new FormControl(''),
    program: new FormControl(''),
    img: new FormControl(''),
    estatement: new FormControl('')
  });

  public buttonCreate = Constants.BUTTON_CREATE;
  public buttonImage = Constants.BUTTON_FILE;

  public txtValidateName = Constants.TXTVALIDATENAMECREATEVENT;
  public txtName = Constants.TXTNAMECREATEEVENT;
  public txtImgName = Constants.IMG_CREATEEVENT_NAME;

  public txtValidateDescription = Constants.TXTVALIDATEDESCRIPTIONCREATEVENT;
  public txtDescription = Constants.TXTDESCRIPTIONCREATEEVENT;
  public txtImgDescription = Constants.IMG_CREATEEVENT_DESCRIPTION;

  public txtValidateDate = Constants.TXTVALIDATEDATECREATEVENT;
  public txtDate = Constants.TXTDATECREATEEVENT;
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

  public txtTitle = Constants.CREATEVENT_TITLE;

  public srcResult: any;
  public reader : any;

  constructor(
    public dialogRef: MatDialogRef<CreateEventComponent>,
    private _createEventService: CreateEventService,
    private _matDialog: MatDialog,
    private _dialogService: DialogService,
    private _cacheService: CacheService
  ) {
    this.event = new Events();
  }

  onFileSelected(): void {
    const inputNode: any = document.querySelector('#fileIMG');
    const inputIMG: any = document.querySelector('#img');
    this.reader = inputNode.files[0];
    //inputIMG.value = this.reader.name;
    this.createForm.controls["img"].setValue(this.reader.name);
  }

  ngOnInit(): void {
    this.getConfig();
  }

  createEvent(): void {
    event.preventDefault();
    
    if (this.createForm.status != "INVALID") {
      this.asyncCreateEvent();
    } else {
      this.openDialog(Constants.INVALID_STATUS, "Advertencia");
    }
  }

  async asyncCreateEvent(): Promise<any> {
    this.blSpinnerModal = true;

    const responseFile = await this._createEventService.loadFile(this.reader, this.createForm.controls["name"].value);
    
    let jsonFile = JSON.parse(responseFile);
    if (jsonFile.codigo == 200) {
      let urlImagen = jsonFile.valor.fileDownloadUri;

      //Llenamos los datos del evento
      this.event.name = this.createForm.controls["name"].value;
      this.event.description = this.createForm.controls['description'].value;
      this.event.date = this.createForm.controls['fechaStart'].value;
      this.event.hourStart = this.createForm.controls['hourStart'].value;
      this.event.hourEnd = this.createForm.controls['hourEnd'].value;
      this.event.categoryId = this.createForm.controls['category'].value;
      this.event.capacity = this.createForm.controls['cantUsers'].value;
      this.event.stateId = 1;
      this.event.estamentId = this.createForm.controls['estatement'].value;
      this.event.campusId = this.createForm.controls['location'].value;
      this.event.image = urlImagen;
      this.event.facultyId = this.createForm.controls['faculty'].value;
      this.event.programId = this.createForm.controls['program'].value;
      this.event.jornalyId = this.createForm.controls['jornaly'].value;
      this.event.userAdmId = this._cacheService.load("userId");
      
      const response = await this._createEventService.createEvent(this.event);

      if (response["result"]) {
        this.openDialog(response["msg"], "Correcto");
        this.dialogRef.close();
      }
      else {
        this.openDialog(response["msg"], "Advertencia");
      }

    } else {
      this.openDialog(Constants.FILE_MSG_ERROR, "Error");
      console.log(jsonFile);
    }

    this.blSpinnerModal = false;
  }

  getProgram(programId: number): void {
    this.getPrograms(programId);
  }

  async getConfig(): Promise<any> {
    this.blSpinnerModal = true;
    const response = await this._createEventService.getConfig();
   
    if (response["result"])
    {
      let data = response["data"];
      this.campus = data["campus"];
      this.categories = data["categories"];
      this.faculties = data["faculties"];
      this.jornalies = data["jornalies"];
      this.estatements = data["estatements"];
    }
    else
    {
      this.openDialog(response["msg"], "Advertencia");
    }

    this.blSpinnerModal = false;
  }

  async getPrograms(programId: number): Promise<any> {
    this.blSpinnerModal = true;
    const response = await this._createEventService.getPrograms(programId);
    
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

}
