import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroBusquedaComponent } from './pages/filtro-busqueda/filtro-busqueda.component';
import { ProspectoRoutingModule } from './prospecto-routing.module';
import { DetalleProspectoComponent } from './pages/detalle-prospecto/detalle-prospecto.component';
import { FiltroProspectoComponent } from './components/filtro-prospecto/filtro-prospecto.component';
import { ListaProspectoComponent } from './components/lista-prospecto/lista-prospecto.component';

@NgModule({
  imports: [
    CommonModule,
    ProspectoRoutingModule
  ],
  declarations: [
    FiltroBusquedaComponent,
    DetalleProspectoComponent,
    FiltroProspectoComponent,
    ListaProspectoComponent
  ]
})
export class ProspectoModule { }
