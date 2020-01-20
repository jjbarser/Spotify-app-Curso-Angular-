import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAppComponent } from './feature/home-app/home-app.component';
import { SearchComponent } from './feature/search/search.component';
import { ArtistaComponent } from './feature/artista/artista.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BusquedaPipe } from './core/pipes/busqueda.pipe';
import { TarjetaComponent } from './shared/tarjeta/tarjeta.component';
import { ImagenesBlankPipe } from './core/pipes/imagenes-blank.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    BusquedaPipe,
    TarjetaComponent,
    ImagenesBlankPipe
  ],
  imports: [
    BrowserModule,
        // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
