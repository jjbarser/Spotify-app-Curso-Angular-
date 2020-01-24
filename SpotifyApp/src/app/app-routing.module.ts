import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAppComponent } from '../app/feature/home-app/home-app.component';
import { SearchComponent } from './feature/search/search.component';
import { TarjetaComponent } from './shared/tarjeta/tarjeta.component';
import { ArtistaComponent } from './feature/artista/artista.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { AuthGuard } from './core/services/guard/auth.guard';







const routes: Routes = [
  { path: 'home-form', component: HomeAppComponent },
  { path: 'search-form', component: SearchComponent },
  { path: 'tarjeta-form', component: TarjetaComponent },
  { path: 'artista-form/:id', component: ArtistaComponent }, 
  //// para trabajar con autenticación por Auth0, [AuthGuard] sirve para que cuando intenten entrar directente 
  //a las páginas privadas por medio del enlace les pida el login y no entren directamente
  {path: 'perfil', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '', pathMatch:'full', redirectTo:'home-form'}, //cualquier otro path vacio me va a dirigir al home
  { path: '**', pathMatch:'full', redirectTo:'home-form'} // cualquier otro path que no sea vacío pero que no exista mapeado va a estar direccionado al home
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


