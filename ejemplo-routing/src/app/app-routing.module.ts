import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DosComponent } from './dos/dos.component';
import { UnoComponent } from './uno/uno.component';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'uno', component: UnoComponent, children: [
    { path: 'listado', component: ListadoComponent },
    { path: 'detalle/:id/:ciudad', component: DetalleComponent,
      data: { title: 'hola' }, canDeactivate: [ AuthGuard ] }
  ] },
  { path: 'dos', component: DosComponent, canActivate: [ AuthGuard ] },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: !environment.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
