import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('seacrestgrovebaptist');
  protected readonly churchName: string = 'Seacrest Grove Baptist Church';
  protected readonly currentYear: number = new Date().getFullYear();
}
