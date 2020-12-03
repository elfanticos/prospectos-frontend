import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent {
  @Input() name;
  isDisabled = true;
  formConfirm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    public _fb: FormBuilder
  ) {
    this.formConfirm = this._buildForm();
  }
  _buildForm(): FormGroup {
    return this._fb.group({
      confirm: [null, [Validators.required]],
      authorization: [null, [Validators.required]]
    });
  }

  get validForm(): boolean {
    return this.formConfirm.controls['confirm'].value && this.formConfirm.controls['authorization'].value;
  }

}