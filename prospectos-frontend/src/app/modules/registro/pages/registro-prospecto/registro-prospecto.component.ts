import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalConfirmComponent } from '@app/shared/components/modal-confirm/modal-confirm.component';
import { TechCheckService } from '@app/shared/services/tech-check.service';
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
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private _techCheckService: TechCheckService
  ) {
    this._registroFormService.initForm();
  }

  ngOnInit(): void {
    const confirmar_condiciones = localStorage.getItem('confirmar_condiciones');
    if (!confirmar_condiciones) {
      this.open();
    }
    this._registroFormService.project = this.route.snapshot.data.proyecto || {};
    this._techCheckService.getIp().subscribe(() => {});
  }

  get imageForStep(): string {
    return `assets/images/fondo/fondo-home${this.pasoSeleccionado}.png`;
  }


  // get validStep1(): boolean {
  //   return this._registroFormService.formValidStep1;
  // }

  // get validStep2(): boolean {
  //   return this._registroFormService.formValidStep2;
  // }

  // get validStep3(): boolean {
  //   return this._registroFormService.formValidStep3;
  // }

  open() {
    const modalRef = this.modalService.open(ModalConfirmComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static'
      // windowClass: 'class-custom' - Clase personalizada
    });
    modalRef.componentInstance.name = 'World';
  }
}
