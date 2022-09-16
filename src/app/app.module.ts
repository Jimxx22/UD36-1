import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { CharactersComponent } from './components/characters/characters.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CharacterComponent } from './components/character/character.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardUserComponent } from './components/board-user/board-user.component';

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
    AddCharacterComponent,
    LoginComponent,
    RegisterComponent,
    BoardAdminComponent,
    BoardUserComponent
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
