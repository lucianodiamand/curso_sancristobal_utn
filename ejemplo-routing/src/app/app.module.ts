import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent,
    HomeComponent,
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
