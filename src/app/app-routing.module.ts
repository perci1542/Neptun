import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './acceso/acceso.component';
import { InscipsionComponent } from './inscipsion/inscipsion.component';

const routes: Routes = [
  { path: 'acceso', component: AccesoComponent},
  { path: 'inscipsion', component: InscipsionComponent},
  { path: 'Cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) }, 
  { path: 'Administrador', loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
