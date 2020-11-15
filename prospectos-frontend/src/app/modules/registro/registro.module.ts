import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroProspectoComponent } from './pages/registro-prospecto/registro-prospecto.component';
import { RegistroRoutingModule } from './registro-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformacionPersonalComponent } from './components/informacion-personal/informacion-personal.component';
import { InformacionContactoComponent } from './components/informacion-contacto/informacion-contacto.component';
import { InformacionConectividadComponent } from './components/informacion-conectividad/informacion-conectividad.component';
import { InformacionMapaComponent } from './components/informacion-mapa/informacion-mapa.component';
import { InformacionAudioComponent } from './components/informacion-audio/informacion-audio.component';
import { InformacionEnvioCorreoComponent } from './components/informacion-envio-correo/informacion-envio-correo.component';
import { InformacionPcComponent } from './components/informacion-pc/informacion-pc.component';
import { RegistroFormService } from './services/registro-form.service';



@NgModule({
  declarations: [
    RegistroProspectoComponent,
    InformacionPersonalComponent,
    InformacionContactoComponent,
    InformacionConectividadComponent,
    InformacionMapaComponent,
    InformacionAudioComponent,
    InformacionEnvioCorreoComponent,
    InformacionPcComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistroRoutingModule,
    SharedModule
  ],
  providers: [
    RegistroFormService
  ]
})
export class RegistroModule { }
