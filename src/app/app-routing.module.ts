import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from "./components/about-us/about-us.component";
import { CharactersComponent } from "./components/characters/characters.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { CharacterComponent } from "./components/character/character.component";
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';

const routes: Routes = [
  { path: 'aboutUs', component:AboutUsComponent },
  { path: 'characters', component:CharactersComponent },
  { path: 'inicio', component:InicioComponent },
  { path: 'character/:id', component:CharacterComponent },
  { path: 'add', component: AddCharacterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
