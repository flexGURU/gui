import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  userName = 'Dr. Sarah Johnson'; // Default user
  userAvatar = 'assets/images/doctor-avatar.png'; // Default avatar

  constructor(private router: Router) {}

  // Navigate to Provider Dashboard
  navigateToProvider() {
    this.userName = 'Dr. Sarah Johnson';
    this.userAvatar = 'assets/images/doctor-avatar.png';
    this.router.navigate(['/provider']);
  }

  // Navigate to Patient Dashboard
  navigateToPatient() {
    this.userName = 'James Wilson';
    this.userAvatar = 'assets/images/patient-avatar.png';
    this.router.navigate(['/patient']);
  }
}
