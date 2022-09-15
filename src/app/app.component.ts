import { Component } from '@angular/core';
import { CharacterService } from "./character.service";
import { Character } from './models/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD36-1';

  characters?:Character[];
  currentCharacter: Character={};
  currentIndex = -1;
  name = '';

  constructor(private characterService: CharacterService){}

  searchName(): void{
    this.currentCharacter = {};
    this.currentIndex = -1;
    this.characterService.findByName(this.name)
    .subscribe(
      data => {
        this.characters = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
