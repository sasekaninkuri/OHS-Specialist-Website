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
    'HOME' , 'About' , 'Services' , 'Contact', 'Testimonial' ,'Location'
  ]

}
