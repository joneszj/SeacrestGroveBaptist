import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ministries',
  imports: [CommonModule],
  templateUrl: './ministries.html',
  styleUrl: './ministries.css'
})
export class Ministries {
  ministries = [
    {
      name: 'Youth Ministry',
      imageUrl: 'https://picsum.photos/300/300?random=1',
      description: 'Engaging young members in worship, learning, and community activities.'
    },
    {
      name: 'Women’s Ministry',
      imageUrl: 'https://picsum.photos/300/300?random=2',
      description: 'Empowering women through fellowship, study groups, and outreach programs.'
    },
    {
      name: 'Music Ministry',
      imageUrl: 'https://picsum.photos/300/300?random=3',
      description: 'Leading worship through choir, instruments, and praise teams.'
    },
    {
      name: 'Community Outreach',
      imageUrl: 'https://picsum.photos/300/300?random=4',
      description: 'Serving the local community through charitable projects and volunteer work.'
    },
    {
      name: 'Prayer Ministry',
      imageUrl: 'https://picsum.photos/300/300?random=5',
      description: 'Providing support through prayer, counseling, and spiritual guidance.'
    },
    {
      name: 'Children’s Ministry',
      imageUrl: 'https://picsum.photos/300/300?random=6',
      description: 'Engaging children in age-appropriate worship and learning activities.'
    }
  ];
}
