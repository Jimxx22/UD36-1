import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from "./about-us/about-us.component";
import { CharactersComponent } from "./characters/characters.component";
import { InicioComponent } from "./inicio/inicio.component";
import { CharacterComponent } from "./character/character.component";
import { AddCharacterComponent } from './add-character/add-character.component';

const routes: Routes = [
  {
    path:'aboutUs',
    component:AboutUsComponent
  },
  {
    path:'characters',
    component:CharactersComponent
  },
  {
    path:'',
    component:InicioComponent
  },
  {
    path: 'character/:id',
    component:CharacterComponent
  },
  {
    path: 'add', component: AddCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
