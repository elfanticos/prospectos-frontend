import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class RegistroFormService {
  private _formInfoPersonal: FormGroup;
  private _formInfoContacto: FormGroup;
  private _formInfoConectividad: FormGroup;
  private _formInfoAudio: FormGroup;
  private _formInfoPc: FormGroup;
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
    return this._fb.group({
      nombresPostulante: [null, [Validators.required]],
      apellidosPostulante: [null, [Validators.required]],
      fecNacimiento: [null, [Validators.required]],
      sexo: [null, Validators.required],
      tipoDocumento: [null, [Validators.required]],
      numeroDocumento: [null, [Validators.required]],
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
      telefono: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      pais: [null, [Validators.required]],
      departamento: [null, [Validators.required]],
      provincia: [null, [Validators.required]],
      distrito: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
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
      operador: [null, [Validators.required]],
      carga: [null, [Validators.required]],
      descarga: [null, [Validators.required]],
      ping: [null, [Validators.required]],
      latencia: [null, [Validators.required]],
      ip: [null, [Validators.required]],
      isp: [null, [Validators.required]]
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
    return this._fb.group({
      dispositivos: this._fb.array([
        this._buildInfoDispositivo(),
        this._buildInfoDispositivo()
      ])
    });
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
      tipoDispositivo: [null, [Validators.required]],
      marca: [null, [Validators.required]],
      modelo: [null, [Validators.required]],
      fec_hora_disp: [null, [Validators.required]],
      idPostulante: [null, [Validators.required]],
      urlImagen: [null, [Validators.required]],
      nombreImagen: [null, [Validators.required]]
    });
  }

  private _buildInfoPc(): FormGroup {
    return this._fb.group({
      equipo: this._fb.group({
        procesador: [null, [Validators.required]],
        memoriaRam: [null, [Validators.required]],
        discoDuro: [null, [Validators.required]],
        sistOperativo: [null, [Validators.required]]
      }),
      image: this._fb.group({
        urlImagen: [null, [Validators.required]],
        nombreImagen: [null, [Validators.required]]
      })  
    });
    // "equipo": {
    //   "procesador": "intel core i3",
    //   "memoriaRam": "8 GB de RAM",
    //   "discoDuro": "512 GB SSD",
    //   "sistOperativo": "Windows 10 PRO",
    //   "fec_hora_equipo": "2020-09-25T03:30",
    //   "postulante": {
    //       "idPostulante": "1"
    //   }
    // },
    // "imagen": {
    //     "urlImagen": "D:/PROYECTOS/PROSPECTOS/Base de datos",
    //     "nombreImagen": "nombre de imagen de prueba"
    // }
  }
}
