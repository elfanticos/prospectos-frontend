import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { SharedConstants } from '@app/shared/shared.constants';
interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const PROSPECTOS: any [] = [
  {
    proyecto: 'Atención al cliente-Campaña Prima',
    nombre: 'María Jóse',
    apellido: 'Ramirez',
    tipo_documento: 'DNI',
    nro_documento: '12345678',
    distrito: 'San Isidro',
    descaga: '33.5 Mb/s',
    carga: '120 Mb/s',
    auricular: 'USB',
    fecha_registro: '14/09/2020',
    cantidad_post: '2'
  },
  {
    proyecto: 'Atención al cliente-Campaña Prima',
    nombre: 'María Jóse',
    apellido: 'Ramirez',
    tipo_documento: 'DNI',
    nro_documento: '12345678',
    distrito: 'San Isidro',
    descaga: '33.5 Mb/s',
    carga: '120 Mb/s',
    auricular: 'USB',
    fecha_registro: '14/09/2020',
    cantidad_post: '2'
  },
  {
    proyecto: 'Atención al cliente-Campaña Prima',
    nombre: 'María Jóse',
    apellido: 'Ramirez',
    tipo_documento: 'DNI',
    nro_documento: '12345678',
    distrito: 'San Isidro',
    descaga: '33.5 Mb/s',
    carga: '120 Mb/s',
    auricular: 'USB',
    fecha_registro: '14/09/2020',
    cantidad_post: '2'
  },
  {
    proyecto: 'Atención al cliente-Campaña Prima',
    nombre: 'María Jóse',
    apellido: 'Ramirez',
    tipo_documento: 'DNI',
    nro_documento: '12345678',
    distrito: 'San Isidro',
    descaga: '33.5 Mb/s',
    carga: '120 Mb/s',
    auricular: 'USB',
    fecha_registro: '14/09/2020',
    cantidad_post: '2'
  },
  {
    proyecto: 'Atención al cliente-Campaña Prima',
    nombre: 'María Jóse',
    apellido: 'Ramirez',
    tipo_documento: 'DNI',
    nro_documento: '12345678',
    distrito: 'San Isidro',
    descaga: '33.5 Mb/s',
    carga: '120 Mb/s',
    auricular: 'USB',
    fecha_registro: '14/09/2020',
    cantidad_post: '2'
  },
  {
    proyecto: 'Atención al cliente-Campaña Segunda',
    nombre: 'Jóse María',
    apellido: 'Perez',
    tipo_documento: 'DNI',
    nro_documento: '12345677',
    distrito: 'San Martin',
    descaga: '32.5 Mb/s',
    carga: '140 Mb/s',
    auricular: 'USB',
    fecha_registro: '14/09/2020',
    cantidad_post: '40'
  },
  {
    proyecto: 'Atención al cliente-Campaña Segunda',
    nombre: 'Jóse María',
    apellido: 'Perez',
    tipo_documento: 'DNI',
    nro_documento: '12345677',
    distrito: 'San Martin',
    descaga: '32.5 Mb/s',
    carga: '140 Mb/s',
    auricular: 'USB',
    fecha_registro: '14/09/2020',
    cantidad_post: '40'
  },
  {
    proyecto: 'Atención al cliente-Campaña Segunda',
    nombre: 'Jóse María',
    apellido: 'Perez',
    tipo_documento: 'DNI',
    nro_documento: '12345677',
    distrito: 'San Martin',
    descaga: '32.5 Mb/s',
    carga: '140 Mb/s',
    auricular: 'USB',
    fecha_registro: '14/09/2020',
    cantidad_post: '40'
  }
];

export type SortColumn = keyof Country | '';
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
export class ListaProspectoComponent implements OnInit {
  prospectos = PROSPECTOS;
  ICON_ARROW_BUTTON = SharedConstants.ICONS.ICON_ARROW_BUTTON;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  constructor() { }

  ngOnInit() {
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.prospectos = PROSPECTOS;
    } else {
      this.prospectos = [...PROSPECTOS].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

}
