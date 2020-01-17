import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAppComponent } from '../app/feature/home-app/home-app.component';
import { SearchComponent } from './feature/search/search.component';
import { TarjetaComponent } from './shared/tarjeta/tarjeta.component';





const routes: Routes = [
  { path: 'home-form', component: HomeAppComponent },
  { path: 'search-form', component: SearchComponent },
  { path: 'tarjeta-path', component: TarjetaComponent },
  { path: '', pathMatch:'full', redirectTo:'home-form'}, //cualquier otro path vacio me va a dirigir al home
  { path: '**', pathMatch:'full', redirectTo:'home-form'} // cualquier otro path que no sea vacío pero que no exista mapeado va a estar direccionado al home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


