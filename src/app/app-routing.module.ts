import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from "./about-us/about-us.component";
import { CharactersComponent } from "./characters/characters.component";
import { InicioComponent } from "./inicio/inicio.component";
import { CharacterComponent } from "./character/character.component";

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
    path:'inicio',
    component:InicioComponent
  },
  {
    path: 'character/:id',
    component:CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
