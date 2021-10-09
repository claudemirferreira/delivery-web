import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEntregaComponent } from './components/lista-entrega/lista-entrega.component';
import { ListaEntregadorComponent } from './components/lista-entregador/lista-entregador.component';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lista-usuario', component: ListaUsuarioComponent },
  { path: 'lista-entregador', component: ListaEntregadorComponent },
  { path: 'lista-entrega', component: ListaEntregaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
