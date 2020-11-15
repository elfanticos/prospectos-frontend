import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-informacion-audio',
  templateUrl: './informacion-audio.component.html',
  styleUrls: ['./informacion-audio.component.css']
})
export class InformacionAudioComponent implements OnInit {
  infoAudioForm: FormGroup;
  constructor(
    private _registroFormService: RegistroFormService
  ) {
    this.infoAudioForm = this._registroFormService.formInfoAudio;
  }

  ngOnInit(): void {

  }

}
