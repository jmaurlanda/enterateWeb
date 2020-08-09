import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../utils/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../../utils/components/dialog/dialog.service';
import { Constants } from '../../../utils/constants';
import { CacheService } from '../../../utils/cache/cache.service';
import { Users } from './users.model';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public txtBienvenido = Constants.TXTLOGOUNIAJCBIENVENIDO;
  public txtUniajc = Constants.TXTLOGOUNIAJC;
  public validateUserName = Constants.VALIDATE_USERNAME;
  public validatePassword = Constants.VALIDATE_PASSWORD;
  public buttonLogin = Constants.BUTTON_LOGIN;
  public buttonCancel = Constants.BUTTON_CANCEL;
  public buttonPassword = Constants.BUTTON_PASSWORD;
  public buttonRecovery = Constants.BUTTON_RECOVERY;
  public txtUser = Constants.TXTUSER;
  public txtPassword = Constants.TXTPASSWORD;
  public txtRecovery = Constants.TXTRECOVERY;
  public txtCancelRecovery = Constants.CANCEL_RECOVERY;

  LoginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    userNameRecovery: new FormControl('')
  });

  blValidate = true;
  blRecovery = true;
  hide = true;
  blSpinner = false;

  user: Users;

  constructor(
    private _loginService: LoginService,
    private router: Router,
    private _matDialog: MatDialog,
    private _dialogService: DialogService,
    private _cacheService: CacheService,
    private _appComponent: AppComponent
  ) {
    _appComponent.blMenu = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.LoginForm.value.userName != "") {
      this.validateUser();
    }
  }

  onSubmitAuthenticate() {
    if (this.LoginForm.value.password != "" && this.LoginForm.value.userName != "") {
      this.authenticateUser();
    }
  }

  onRecoveryPassword() {
    if (this.LoginForm.value.userNameRecovery != "") {
      this.recoveryPassword();
    }
  }

  onReturn() {
    this.blValidate = true;
    this.blRecovery = true;
    this.LoginForm.controls['userName'].setValue('');
    this.LoginForm.controls['userNameRecovery'].setValue('');
    this.LoginForm.controls['password'].setValue('');
  }

  showRecovery() {
    this.blRecovery = false;
    this.LoginForm.controls['userName'].setValue('');
    this.LoginForm.controls['password'].setValue('');
    this.LoginForm.controls['userNameRecovery'].setValue('');
  }

  openDialog(content: String, title: String) {
    const dialogRef = this._matDialog.open(DialogComponent);
    this._dialogService.dialog.title = title;
    this._dialogService.dialog.content = content;
  }

  async validateUser(): Promise<any> {
    this.blSpinner = true;
    let response = await this._loginService.validateUser(this.LoginForm.value.userName);

    if (response["result"]) {
      this.blValidate = false;
    } else {
      this.openDialog(response["msg"], "Advertencia")
    }
    this.blSpinner = false;
  }

  async authenticateUser(): Promise<any> {

    this.blSpinner = true;

    let response = await this._loginService.authenticateUser(this.LoginForm.value.userName, this.LoginForm.value.password);

    if (response["result"]) {

      if (response["data"]["rolId"] == Constants.ROLADMIN || response["data"]["rolId"] == Constants.ROLSTATISTICS) {

        this.user = response["data"];

        this._cacheService.save({
          key: "userId",
          data: response["data"]["id"],
          expirationMins: 360
        });
        
        this._cacheService.save({
          key: "rolId",
          data: response["data"]["rolId"],
          expirationMins: 360
        });

        this._cacheService.save({
          key: "user",
          data: this.user,
          expirationMins: 360
        });

        this._cacheService.save({
          key: "token",
          data: response["token"],
          expirationMins: 360
        });

        this._cacheService.save({
          key: "tokenAcademusoft",
          data: response["data"]["tokenAcademusoft"],
          expirationMins: 360
        });

        this._cacheService.save({
          key: "academusoftId",
          data: response["data"]["academusoftId"],
          expirationMins: 360
        });

        this._appComponent.blMenu = true;

        if (response["data"]["rolId"] == Constants.ROLADMIN) {
          this._appComponent.blAdmin = true;
          this.router.navigateByUrl('/events');
        } else {
          this.router.navigateByUrl('/statistics');
        }        

      } else {
        this.blValidate = true;
        this.blRecovery = true;
        this.openDialog(Constants.AUTHENTICATE_USER_ROLNOTFOUND, "Advertencia")
      }
    } else {
      this.openDialog(response["msg"], "Advertencia")
    }
    this.blSpinner = false;
  }

  async recoveryPassword(): Promise<any> {
    this.blSpinner = true;
    let response = await this._loginService.recoverPassword(this.LoginForm.value.userNameRecovery);

    if (response["result"]) {
      this.blValidate = true;
      this.blRecovery = true;
      this.openDialog(response["msg"], "Exito")
    } else {
      this.openDialog(response["msg"], "Advertencia")
    }
    this.blSpinner = false;
  }
}
