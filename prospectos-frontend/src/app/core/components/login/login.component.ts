import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  service: boolean = false;
  msj: string = '';
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

    // this._authenticationService.login().subscribe(data => {
    //   console.log(data);
    // });
    this.formLogin.valueChanges.subscribe(() => { this.service = false; this.msj = ''; });
  }

  get username() { return this.formLogin.controls['username']; }
  get password() { return this.formLogin.controls['password']; }

  login(): void {

    if (this.formLogin.invalid) return;

    this.service = true;
    if (this.username.value != 'UsuAdmin' && this.password.value != '123') {
      this.msj = 'No existe el usuario';
      return;
    }
    console.log("Usuario logueado");
    this._router.navigate(['intranet/prospectos']);

  }

}

