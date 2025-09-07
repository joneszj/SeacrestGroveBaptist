import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social.html',
  styleUrls: ['./social.css']
})
export class Social {
  ngAfterViewInit() {
    // @ts-ignore
    if ((window as any).FB) {
      // Parse newly rendered FB elements
      (window as any).FB.XFBML.parse();
    }
  }
}
