import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsExtend } from '@app/shared/validators/validators-extend';
import { Subject, Subscriber } from 'rxjs';

@Injectable()
export class RegistroFormService {
  private _formInfoPersonal: FormGroup;
  private _formInfoContacto: FormGroup;
  private _formInfoConectividad: FormGroup;
  private _formInfoAudio: FormGroup;
  private _formInfoPc: FormGroup;
  private _proyecto: string = 'prospectos - b12';
  public serviceActive$: Subject<any> = new Subject();
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
    let nomPattern = /^[ a-zA-Z_áéíóúàèìòùÀÈÌÒÙñÁÉÍÓÚÑÜü\'.\s]*$/;
    const values = JSON.parse(localStorage.getItem('stepOne') || '{"postulante": {}}').postulante;
    return this._fb.group({
      nombresPostulante: [values.nombresPostulante, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(75),
        Validators.pattern(nomPattern)
      ]],
      apellidosPostulante: [values.apellidosPostulante, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(75),
        Validators.pattern(nomPattern)
      ]],
      fecNacimiento: [values.fecNacimiento, [Validators.required]],
      sexo: [values.sexo, Validators.required],
      tipoDocumento: [values.tipoDocumento, [Validators.required]],
      numeroDocumento: [values.numeroDocumento, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(18),
        Validators.pattern(/^[0-9]{1,18}$/)
      ]],
    });
  }

  private _buildInfoContactoForm(): FormGroup {
    const values = JSON.parse(localStorage.getItem('stepOne') || '{"datosPersonales": {}}').datosPersonales;
    console.log('datosPersonales => ', values);
    return this._fb.group({
      telefono: [values.telefono, [
        Validators.required,
        ValidatorsExtend.isNumeric,
        Validators.minLength(7),
        Validators.maxLength(12)
      ]],
      correo: [values.correo, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(75),
        ValidatorsExtend.isOptionalEmail
      ]],
      pais: [values.pais, [Validators.required]],
      departamento: [{ value: values.departamento, disabled: !values.departamento }, [Validators.required]],
      provincia: [{ value: values.provincia, disabled: !values.provincia }, [Validators.required]],
      distrito: [{ value: values.distrito, disabled: !values.distrito }, [Validators.required]],
      direccion: [{ value: values.direccion, disabled: !values.dirección }, [
        Validators.required,
        Validators.maxLength(75)
      ]],
      latitud: [values.latitud, [Validators.required]],
      longitud: [values.longitud, [Validators.required]]
    });
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
  }

  private _buildInfoAudio(): FormGroup {
    return this._fb.group({
      tipoDispositivo: [null, [Validators.required]],
      file: [null, [Validators.required]],
      extension: [null, [Validators.required]],
      nameFile: [null, [Validators.required]],
    });
  }


  private _buildInfoPc(): FormGroup {
    return this._fb.group({
      procesador: ['', [Validators.required]],
      memoriaRam: ['', [Validators.required]],
      discoDuro: ['', [Validators.required]],
      sistOperativo: ['', [Validators.required]],
      extensionFile: [null, [Validators.required]],
      file: [null, [Validators.required]],
      nameFile: [null, [Validators.required]],
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

  get valuesFormStepTwo(): any {
    return {
      ...this.formInfoConectividad.value
    }
  }

  get valuesFormStepThree(): any {
    return {
      ...this.formInfoAudio.value
    }
  }

  get valuesFormStepFour(): any {
    return {
      ...this.formInfoPc.value
    }
  }

  touchedInputStepOne(): void {
    console.log('touchedInputStepOne');
    this.formInfoPersonal.markAllAsTouched();
    this.formInfoPersonal.controls['nombresPostulante'].markAsDirty();
    this.formInfoPersonal.controls['apellidosPostulante'].markAsDirty();
    this.formInfoPersonal.controls['fecNacimiento'].markAsDirty();
    this.formInfoPersonal.controls['sexo'].markAsDirty();
    this.formInfoPersonal.controls['tipoDocumento'].markAsDirty();
    this.formInfoPersonal.controls['numeroDocumento'].markAsDirty();

    this.formInfoContacto.markAllAsTouched();
    this.formInfoContacto.controls['telefono'].markAsDirty();
    this.formInfoContacto.controls['correo'].markAsDirty();
    this.formInfoContacto.controls['pais'].markAsDirty();
    this.formInfoContacto.controls['departamento'].markAsDirty();
    this.formInfoContacto.controls['provincia'].markAsDirty();
    this.formInfoContacto.controls['distrito'].markAsDirty();
    this.formInfoContacto.controls['direccion'].markAsDirty();
  }

  touchedInputStepTwo(): void {
    console.log('touchedInputStepTwo');
    // this.formInfoConectividad
  }

  touchedInputStepThree(): void {
    console.log('touchedInputStepThree');
    this.formInfoAudio.markAllAsTouched();
    this.formInfoAudio.controls['tipoDispositivo'].markAsDirty();
    this.formInfoAudio.controls['file'].markAsDirty();
    this.formInfoAudio.controls['extension'].markAsDirty();
    this.formInfoAudio.controls['nameFile'].markAsDirty();
  }

  touchedInputStepFour(): void {
    this.formInfoPc.markAllAsTouched();
    this.formInfoPc.controls['procesador'].markAsDirty();
    this.formInfoPc.controls['memoriaRam'].markAsDirty();
    this.formInfoPc.controls['discoDuro'].markAsDirty();
    this.formInfoPc.controls['sistOperativo'].markAsDirty();
    this.formInfoPc.controls['extensionFile'].markAsDirty();
    this.formInfoPc.controls['file'].markAsDirty();
    this.formInfoPc.controls['nameFile'].markAsDirty();
  }
}
