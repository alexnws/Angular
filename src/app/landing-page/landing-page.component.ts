import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onContinue() {
    // un router à été ajouté pour accéder à la page des publications avec une méthode.
    this.router.navigateByUrl('facesnaps');
  }
}
