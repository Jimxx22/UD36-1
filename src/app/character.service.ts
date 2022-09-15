import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Character } from './models/character.model';
import { Observable } from "rxjs";

const baseURL = "https://jgv-ud41-backend.herokuapp.com/characters";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

//  retornar(id:string){
//    return this.http.get("https://rickandmortyapi.com/api/character/"+id);
//  }

getAll():Observable<Character[]>{
  return this.http.get<Character[]>(baseURL);
}

get(id:any): Observable<any>{
  return this.http.get(`${baseURL}/${id}`);
}

create(data:any):Observable<any>{
  return this.http.post(baseURL, data);
}

update(id:any,data:any):Observable<any>{
  return this.http.put(`${baseURL}/${id}`, data);
}

delete(id:any): Observable<any>{
  return this.http.delete(`${baseURL}/${id}`);
}

deleteAll():Observable<any>{
  return this.http.delete(baseURL);
}

findByName(name:any): Observable<Character[]>{
  return this.http.get<Character[]>(`${baseURL}?name=${name}`);
}

}
