import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet], // Esto permite que los botones funcionen
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {} // Asegúrate de que el nombre sea exactamente este