import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from "../character.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  id:any;
  character:any =null;
  constructor(private route :ActivatedRoute, private characterService: CharacterService) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')||"[]");
  }

  ngOnInit(): void {
    this.characterService.retornar(this.id).subscribe(
      result => this.character=result
    )
  }

}
