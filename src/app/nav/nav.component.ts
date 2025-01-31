import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  home= 'Home'

  navbarpro = [
    'OHS SPECIALIST' , 'HOME' , 'ABOUT' , 'CONTACT', 'SERVICES' , 'TESTIMONIALS' , 'FAQ' 
  ]

}
