import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsExtend } from '@app/shared/validators/validators-extend';

@Injectable()
export class RegistroFormService {
  private _formInfoPersonal: FormGroup;
  private _formInfoContacto: FormGroup;
  private _formInfoConectividad: FormGroup;
  private _formInfoAudio: FormGroup;
  private _formInfoPc: FormGroup;
  private _proyecto: string = 'prospectos - b12';
  constructor(
    private _fb: FormBuilder
  ) { }

  initForm(): void {
    this._formInfoPersonal = this._buildInfoPersonalForm();
    this._formInfoContacto = this._buildInfoContactoForm();
    this._formInfoConectividad = this._buildInfoConectividad();
    this._formInfoAudio = this._buildInfoAudio();
    this._formInfoPc = this._buildInfoPc();
  }


  get formInfoPersonal(): FormGroup {
    return this._formInfoPersonal;
  }

  set formInfoPersonal(value: FormGroup) {
    this._formInfoPersonal = value;
  }

  get formInfoContacto(): FormGroup {
    return this._formInfoContacto;
  }

  set formInfoContacto(value: FormGroup) {
    this._formInfoContacto = value;
  }

  get formInfoConectividad(): FormGroup {
    return this._formInfoConectividad;
  }

  set formInfoConectividad(value: FormGroup) {
    this._formInfoConectividad = value;
  }

  get formInfoAudio(): FormGroup {
    return this._formInfoAudio;
  }

  set formInfoAudio(value: FormGroup) {
    this._formInfoAudio = value;
  }

  get formInfoPc(): FormGroup {
    return this._formInfoPc;
  }

  set formInfoPc(value: FormGroup) {
    this._formInfoPc = value;
  }

  private _buildInfoPersonalForm(): FormGroup {
    let nomPattern = /^[ a-zA-Z0-9_áéíóúàèìòùÀÈÌÒÙñÁÉÍÓÚÑÜü\'.\s]*$/;
    return this._fb.group({
      nombresPostulante: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(75),
        Validators.pattern(nomPattern)
      ]],
      apellidosPostulante: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(75),
        Validators.pattern(nomPattern)
      ]],
      fecNacimiento: [null, [Validators.required]],
      sexo: [null, Validators.required],
      tipoDocumento: ['', [Validators.required]],
      numeroDocumento: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(18),
        Validators.pattern(/^[0-9]{1,18}$/)
      ]],
    });
    // "nombresPostulante":"Jose Luis",
    //     "apellidosPostulante":"Minaya Castañeda",
    //     "fecNacimiento":"2020-09-25",
    //     "sexo":1,
    //     "tipoDocumento":1,
    //     "numeroDocumento":"75698654",
    //     "fecha_hora_post":"2020-09-25T03:30:00.000Z"
  }

  private _buildInfoContactoForm(): FormGroup {
    return this._fb.group({
      telefono: [null, [
        Validators.required,
        ValidatorsExtend.isNumeric,
        Validators.minLength(7),
        Validators.maxLength(12)
      ]],
      correo: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(75),
        ValidatorsExtend.isOptionalEmail
      ]],
      pais: ['', [Validators.required]],
      departamento: [{ value: '', disabled: true }, [Validators.required]],
      provincia: [{ value: '', disabled: true }, [Validators.required]],
      distrito: [{ value: '', disabled: true }, [Validators.required]],
      direccion: [null, [
        Validators.required,
        Validators.maxLength(75)
      ]],
      latitud: [null, [Validators.required]],
      longitud: [null, [Validators.required]]
    });
    // "telefono": "012684759",
    // "correo": "corre@gmail.com",
    // "pais": 140,
    // "departamento": 15,
    // "provincia": 136,
    // "distrito": "SJM",
    // "direccion": "Av. prueba de registro",
    // "latitud": "145'3215.156 ",
    // "longitud": "145'3215.158",
    // "fec_hora_datos": "2020-09-25T03:30",
    // "postulante": {
    // }
  }

  private _buildInfoConectividad(): FormGroup {
    return this._fb.group({
      operador: ['null', [Validators.required]],
      carga: ['null', [Validators.required]],
      descarga: ['null', [Validators.required]],
      ping: ['null', [Validators.required]],
      latencia: ['null', [Validators.required]],
      ip: ['null', [Validators.required]],
      isp: ['null', [Validators.required]]
    });
    // "operador": "movistar",
    // "carga": "35 mb",
    // "descarga": "45 mb",
    // "ping": "4 perdidos",
    // "latencia": "latencia",
    // "ip": "192.192.192.192",
    // "isp": "isp",
    // "fecha_hora_conec": "2020-09-25T03:30",
    // "postulante": {
    //     "idPostulante": 1
    // }
  }

  private _buildInfoAudio(): FormGroup {
    return this._buildInfoDispositivo();
    // return this._fb.group({
    //   dispositivos: this._fb.array([
    //     this._buildInfoDispositivo(),
    //     this._buildInfoDispositivo()
    //   ])
    // });
    // "tipoDispositivo": "Microfono",
    // "marca": "microphone ",
    // "modelo": "del mercado",
    // "fec_hora_disp": "2020-09-25T03:30",
    // "idPostulante": 1,
    // "urlImagen": "D:/PROYECTOS/PROSPECTOS/Base de datos",
    // "nombreImagen": "nombre de imagen de prueba"
  }

  private _buildInfoDispositivo(): FormGroup {
    return this._fb.group({
      tipoDispositivo: ['', [Validators.required]],
      file: [, [Validators.required]]
    });
    // return this._fb.group({
    //   tipoDispositivo: ['null', [Validators.required]],
    //   marca: ['null', [Validators.required]],
    //   modelo: ['null', [Validators.required]],
    //   fec_hora_disp: ['null', [Validators.required]],
    //   idPostulante: ['null', [Validators.required]],
    //   urlImagen: ['null', [Validators.required]],
    //   nombreImagen: ['null', [Validators.required]]
    // });
  }

  private _buildInfoPc(): FormGroup {
    return this._fb.group({
      procesador: ['', [Validators.required]],
      memoriaRam: ['', [Validators.required]],
      discoDuro: ['', [Validators.required]],
      sistOperativo: ['', [Validators.required]],
      file: [null, [Validators.required]]
    });
  }



  get formValidStep1(): boolean {
    return this.formInfoPersonal.valid && this.formInfoContacto.valid;
  }

  get formValidStep2(): boolean {
    return this.formValidStep1 && this.formInfoConectividad.valid;
  }

  get formValidStep3(): boolean {
    return this.formValidStep2 && this.formInfoAudio.valid;
  }

  get formValidStepConfirm(): boolean {
    return this.formValidStep3 && this.formInfoPc.valid;
  }

  get valuesFormStepOne(): any {
    const fecha_hora_post = new Date().toISOString();
    return {
      postulante: {
        ...this._formInfoPersonal.value,
        tipoDocumento: parseInt(this._formInfoPersonal.controls['tipoDocumento'].value, 10),
        fecha_hora_post
      },
      datosPersonales: {
        ...this.formInfoContacto.value,
        fec_hora_datos: fecha_hora_post,
        postulante: {}
      },
      proyecto: this._proyecto
    }
  }
}
