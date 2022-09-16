import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from "../../services/character.service";
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  currentCharacter: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  };
  message = '';

  constructor(private route :ActivatedRoute, private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.message='';
    this.getCharacter(this.route.snapshot.params['id']);
  }

  getCharacter(id: string):void{
    this.characterService.get(id)
    .subscribe(
      data => {
        this.currentCharacter = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )};

    updateCharacter(): void{
      this.message='';

      this.characterService.update(this.currentCharacter.id, this.currentCharacter)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message:'Este personaje se ha actualizado correctamente';
        },
        error => {
          console.log(error);
        })
    }

    deleteCharacter(): void{
      this.characterService.delete(this.currentCharacter.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/characters']);
        },
        error => {
          console.log(error);
        })
    }

}
