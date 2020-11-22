import { Component, OnInit } from '@angular/core';
import { ModalConfirmComponent } from '@app/shared/components/modal-confirm/modal-confirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PASOS } from '../../constants/step';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-registro-prospecto',
  templateUrl: './registro-prospecto.component.html',
  styleUrls: ['./registro-prospecto.component.css'],
})
export class RegistroProspectoComponent implements OnInit {
  PASOS = PASOS;
  pasoSeleccionado = PASOS.PASO_1;
  constructor(
    private _registroFormService: RegistroFormService,
    private modalService: NgbModal
  ) { 
    this._registroFormService.initForm();
  }

  ngOnInit(): void {
    this.open();
  }

  get imageForStep(): string {
    return `../../../../../assets/images/fondo/fondo-home${this.pasoSeleccionado}.png`;
  }


  get validStep1(): boolean {
    return this._registroFormService.formValidStep1;
  }

  get validStep2(): boolean {
    return this._registroFormService.formValidStep2;
  }

  get validStep3(): boolean {
    return this._registroFormService.formValidStep3;
  }

  open() {
    const modalRef = this.modalService.open(ModalConfirmComponent, {
      centered: true,
      // windowClass: 'class-custom' - Clase personalizada
    });
    modalRef.componentInstance.name = 'World';
  }
}
