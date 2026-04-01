import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keycloak: Keycloak | undefined;
  private _profile: UserProfile | undefined;

  get keycloak() {
    if(!this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://localhost:9090',
        realm: 'book-social-network',
        clientId: 'bsn'
      });
    }

    return this._keycloak;
  }

  get profile() {
    return this._profile;
  }

  constructor() { }

  public async init() {
    const authenticated =  await this.keycloak?.init({
      onLoad: 'login-required'
    });

    if(authenticated) {
      this._profile = await this.keycloak.loadUserProfile();
      this._profile.token = this.keycloak.token;
    }
  }

  public login() {
    return this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout({ redirectUri: window.location.origin })
  }
}
