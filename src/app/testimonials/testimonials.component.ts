import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class GalleryComponent {
index1=1;
  testimonials = [
    {
      image1: '/assets/spice1.jpeg',
      title1: 'John Doe',
      paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum eu elit ac tincidunt.',
      image2: '/assets/spice1.jpeg',
      title2: 'Jane Smith',
      paragraph2: 'Ut tincidunt magna nec nisi semper, a aliquet libero iaculis. Quisque ultricies euismod nisi sit amet varius.',
      image3: '/assets/spice1.jpeg',
      title3: 'Jane Smith',
      paragraph3: 'Ut tincidunt magna nec nisi semper, a aliquet libero iaculis. Quisque ultricies euismod nisi sit amet varius.',
      image4: '/assets/spice1.jpeg',
      title4: 'Jane Smith',
      paragraph4: 'Ut tincidunt magna nec nisi semper, a aliquet libero iaculis. Quisque ultricies euismod nisi sit amet varius.',
    },
    // Add more testimonials as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
