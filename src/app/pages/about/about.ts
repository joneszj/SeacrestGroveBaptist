import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Staff } from '../../models/staff.model';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  staff: Staff[] = [
    {
      name: 'Pastor John Doe',
      title: 'Senior Pastor',
      imageUrl: 'https://picsum.photos/300/300?random=1',
      description: 'Leading the congregation with a focus on faith, love, and community service.'
    },
    {
      name: 'Jane Smith',
      title: 'Youth Director',
      imageUrl: 'https://picsum.photos/300/300?random=2',
      description: 'Guiding our youth programs and fostering spiritual growth among young members.'
    },
    {
      name: 'Mark Johnson',
      title: 'Church Secretary',
      imageUrl: 'https://picsum.photos/300/300?random=3',
      description: 'Organizes church events, manages communications, and supports the staff team.'
    },
    {
      name: 'Emily Brown',
      title: 'Committee Chair',
      imageUrl: 'https://picsum.photos/300/300?random=4',
      description: 'Coordinates community outreach initiatives and volunteer programs.'
    }
  ];
  beliefs = [
    {
      title: 'The Bible',
      description: 'We believe the Bible is the inspired Word of God and the ultimate authority for faith and practice.'
    },
    {
      title: 'God the Father',
      description: 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.'
    },
    {
      title: 'Jesus Christ',
      description: 'We believe in the deity of Jesus Christ, His death for our sins, and His resurrection.'
    },
    {
      title: 'Salvation',
      description: 'We believe salvation is by grace through faith in Jesus Christ alone.'
    }
  ];
}
