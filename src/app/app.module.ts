import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharactersComponent } from './characters/characters.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from "@angular/common/http";
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CharactersComponent,
    InicioComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
