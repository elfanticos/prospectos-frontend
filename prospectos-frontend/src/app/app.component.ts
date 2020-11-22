import { Component } from '@angular/core';
import { AuthenticationService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prospectos-frontend';
  constructor(private _authenticationService: AuthenticationService) {
    this._authenticationService.refreshToken().subscribe(data => {
      console.log(data);
    });
  }
}
