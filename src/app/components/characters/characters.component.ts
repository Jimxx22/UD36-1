import { Component, OnInit } from '@angular/core';
import { CharacterService } from "../../services/character.service";
import { Character } from "../../models/character.model";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters?:Character[];
  currentCharacter: Character={};
  currentIndex = -1;
  name = '';

  constructor(private characterService: CharacterService) { }

  ngOnInit(){
    this.retriveCharacters();
  }

  retriveCharacters():void{
    this.characterService.getAll()
      .subscribe(
        data => {
          this.characters = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList():void{
    this.retriveCharacters();
    this.currentCharacter = {};
    this.currentIndex = -1;
  }

  setActiveCharacter(character: Character, index: number): void{
    this.currentCharacter = character;
    this.currentIndex = index;
  }

  removeAllCharacters():void{
    this.characterService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.refreshList();
      },
      error => {
        console.log(error);
      });
  }

}
