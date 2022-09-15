import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharactersComponent } from './characters/characters.component';
import { InicioComponent } from './inicio/inicio.component';
import { CharacterComponent } from './character/character.component';
import { AddCharacterComponent } from './add-character/add-character.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
//import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CharactersComponent,
    InicioComponent,
    CharacterComponent,
    AddCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
