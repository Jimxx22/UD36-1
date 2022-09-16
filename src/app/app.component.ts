import { Component } from '@angular/core';
import { CharacterService } from "./services/character.service";
import { Character } from './models/character.model';
import { TokenStorageService } from "./services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UD036-1';
  private roles: string[] = [];
  isLoggedIn = false
  username?:string | null;

  constructor (private tokenStorageService: TokenStorageService) { }

  ngOnInit():void {
    this.isLoggedIn=!!this.tokenStorageService.getToken()

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser()
      this.roles = user.roles;
      this.username = user.username;
      console.log(this.tokenStorageService.getUser());
    }
  }

  logout():void{
    this.tokenStorageService.signOut()
    window.location.reload();
  }
}
