import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core/services';
import { SharedConstants } from '@app/shared/shared.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  service: boolean = false;
  msj: string = '';
  ICON_ARROW_BUTTON = SharedConstants.ICONS.ICON_ARROW_BUTTON;
  hide: boolean = true;
  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    this.formLogin = this._buildForm();
  }
  _buildForm(): FormGroup {
    return this._fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._@\-]*$'), Validators.minLength(4), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    })
  }

  ngOnInit(): void {
    this.formLogin.valueChanges.subscribe(() => { this.service = false; this.msj = ''; });
  }

  get username() { return this.formLogin.controls['username']; }
  get password() { return this.formLogin.controls['password']; }

  login(): void {

    if (this.formLogin.invalid) return;

    this.service = true;
    
    this._authenticationService.login(this.username.value, this.password.value).subscribe((data: any) => {
      localStorage.setItem('token', data.access_token);
      this._router.navigate(['intranet/prospectos']);
    }, err => {
      this.msj = 'No existe el usuario';
      console.log(err);
    });
  }

}

