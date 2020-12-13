import { Component, Directive, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { SharedConstants } from '@app/shared/shared.constants';
import { Subscription } from 'rxjs';
import { IProspecto } from '../../models/prospecto';
import { AdminProspectoService } from '../../services/admin-prospecto.service';

export type SortColumn = keyof IProspecto | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}
@Component({
  selector: 'app-lista-prospecto',
  templateUrl: './lista-prospecto.component.html',
  styleUrls: ['./lista-prospecto.component.css']
})
export class ListaProspectoComponent implements OnInit, OnDestroy {
  prospectos: IProspecto[] = [];
  prospectosBackup: IProspecto[] = [];
  ICON_ARROW_BUTTON = SharedConstants.ICONS.ICON_ARROW_BUTTON;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  subListProspectos: Subscription = new Subscription();
  constructor(
    private _adminProspectoService: AdminProspectoService
  ) { }

  ngOnInit():void {
    this.subListProspectos = this._adminProspectoService.listProspectos$.subscribe(data => {
      this.prospectosBackup = data || [];
      this.prospectos = JSON.parse(JSON.stringify(this.prospectosBackup));
    });
  }
  
  ngOnDestroy(): void {
    this.subListProspectos.unsubscribe();
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting
    if (direction === '' || column === '') {
      this.prospectos = this.prospectosBackup;
    } else {
      this.prospectos = [...this.prospectosBackup].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

}
