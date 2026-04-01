import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'src/app/commons/keycloak/keycloak.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    const linkActive = document.querySelectorAll('.nav-link');
    linkActive.forEach(link => {
      if(window.location.href.endsWith(link.getAttribute('href') || '')) link.classList.add('active');

      link.addEventListener('click', () => {
        linkActive.forEach(e => e.classList.remove('active'));
        link.classList.add('active');
      })
    })
  }

  get username() {
    return this.keycloakService.profile?.username;
  }
  
  logout() {
    this.keycloakService.logout();
  }
}
