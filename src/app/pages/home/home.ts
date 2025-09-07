import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  churchName: string = 'Seacrest Grove Baptist Church';
  currentYear: number = new Date().getFullYear();
}
