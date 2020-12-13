import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAuricular } from '../../entities/combos/auricular';
import { CombosService } from '../../services/combos.service';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-informacion-audio',
  templateUrl: './informacion-audio.component.html',
  styleUrls: ['./informacion-audio.component.css']
})
export class InformacionAudioComponent implements OnInit {
  infoAudioForm: FormGroup;
  auriculares: IAuricular[] = [];
  @ViewChild('fileTxt') fileTxt: ElementRef;
  @ViewChild('inputText') inputText: ElementRef;
  filesToUpload: Array<File>;
  public readonly submittedValue: EventEmitter<void>;
  constructor(
    private _registroFormService: RegistroFormService,
    private _comboService: CombosService
  ) {
    this.infoAudioForm = this._registroFormService.formInfoAudio;
  }

  ngOnInit(): void {
    this._comboService.comboAuricular().subscribe(auriculares => this.auriculares = auriculares || []);
  }

  get tipoDispositivo() { return this.infoAudioForm.controls['tipoDispositivo']; }
  get file() { return this.infoAudioForm.controls['file']; }
  get extension() { return this.infoAudioForm.controls['extension']; }

  public submitValue(): void {
    this.submittedValue.emit();
  }

  /**
   * @author jmeza
   */
  adjuntarImagen(): void {
    // Seleccionar el objeto

    // Crear el evento de click
    let event = new MouseEvent('click', { bubbles: true });

    // Setear el input file
    this.fileTxt.nativeElement.value = null;

    // Disparar el evento click al input file
    this.fileTxt.nativeElement.dispatchEvent(event);
  }

  fileChangeEvent(fileInput: any): void {
    //Obtener el objeto del input file
    this.filesToUpload = <Array<File>>fileInput.target.files;

    /*************** VALIDACIONES ***************/
    if (this.filesToUpload.length == 0) {
      this.fileTxt.nativeElement.value = "";
      console.log('Seleccione un PDF');
      return;
    }

    // Obtener el nombre del archivo subido
    let nameFile: string = this.filesToUpload[0].name;
    if (nameFile.split('.')[1] == undefined) {
      this.fileTxt.nativeElement.value = "";
      console.log('Archivo incorrecto sin extension');
      return;
    }

    // if (['pdf'].indexOf(this.filesToUpload[0].type.split('/')[1].toLowerCase()) < 0) {
    //   this.fileTxt.nativeElement.value = "";
    //   console.log('Seleccione un archivo de tipo .PDF');
    //   return;
    // }

    if (this.filesToUpload[0].size / 1024 / 1024 >= 2) {
      this.fileTxt.nativeElement.value = "";
      console.log('Seleccione un archivo menor a 2MB');
    }
    /*******************************************************/

    this.inputText.nativeElement.value = nameFile;
    this.file.setValue(this.filesToUpload[0]);
    this.extension.setValue(nameFile.split('.')[1]);
    // Renderizar el archivo subido para obtener el base64
    // let render = new FileReader();
    // render.readAsDataURL(this.filesToUpload[0]);
    // render.onload = (event) => {
    //   console.log('onload render');
    //   console.log(event);
    // };
  }

  get urlImg() {
    const objAuricular: IAuricular = this.auriculares.find(a => a.tipoAuricular == this.tipoDispositivo.value) || {};
    return objAuricular.urlImagen || 'assets/images/fondo/fondo-auriculares.png';
  }

}
