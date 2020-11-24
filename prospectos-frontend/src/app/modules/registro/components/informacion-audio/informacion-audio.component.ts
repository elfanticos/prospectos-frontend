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
  tipoAuriculares: any[] = [
    {
      valor: 1,
      desc: 'AURICULARES DE DIADEMA'
    },
    {
      valor: 2,
      desc: 'AURICULARES IN EAR'
    },
    {
      valor: 3,
      desc: 'AURICULARES CON CABLE'
    },
    {
      valor: 4,
      desc: 'AURICULARES INALÁMBRICOS'
    }
  ];
  constructor(
    private _registroFormService: RegistroFormService
  ) {
    this.infoAudioForm = this._registroFormService.formInfoAudio;
  }

  ngOnInit(): void {

  }

}
