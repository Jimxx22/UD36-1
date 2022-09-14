import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  retornar(id:string){
    return this.http.get("https://rickandmortyapi.com/api/character/"+id);
  }
}
