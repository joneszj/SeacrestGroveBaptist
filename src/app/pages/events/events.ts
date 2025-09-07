import { Component } from '@angular/core';
import { Event } from '../../models/event.model';
import { CommonModule } from '@angular/common';
import { Social } from '../../social/social';

@Component({
  selector: 'app-events',
  imports: [CommonModule, Social],
  templateUrl: './events.html',
  styleUrls: ['./events.css']
})
export class Events {
  events: Event[] = [
    {
      title: 'Pine Ridge Boys',
      date: '08-11-2025 @10:30am',
      description: 'Pine Ridge Boys Quartet.',
      imageUrl: 'images/20250811PineRidgeBoys.jpg'
    },
    {
      title: 'Clearvision',
      date: '04-21-2025 @10:30am',
      description: 'Clearvision Music.',
      imageUrl: 'images/20250421Clearvision.jpg'
    },
    {
      title: 'Homecoming With The Pine Ridge Boys',
      date: '08-13-2023 @10:30am',
      description: 'Homecoming Pine Ridge Boys Quartet.',
      imageUrl: 'images/20230813Homecoming.jpg'
    },
    {
      title: 'Annual Fall Festival',
      date: '08-13-2023 @10:30am',
      description: 'Food, Bounce House, Bingo, Bake Auction, Hay Ride, Outdoor Movie (weather permitting).',
      imageUrl: 'images/20251112FallFestival.jpg'
    }
  ]
}
