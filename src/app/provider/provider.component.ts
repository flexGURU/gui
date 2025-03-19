import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-provider',
  imports: [CommonModule],
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.css',
})
export class ProviderComponent {
  // Sample data for the dashboard
  activePatients = 284;
  appointmentsToday = 12;
  pendingResults = 7;
  urgentCases = 3;
  
  stats = [
    {
      label: 'Active Patients',
      value: 284,
      bgColor: 'bg-blue-50 border-blue-100',
    },
    {
      label: 'Appointments Today',
      value: 12,
      bgColor: 'bg-green-50 border-green-100',
    },
    {
      label: 'Pending Results',
      value: 7,
      bgColor: 'bg-amber-50 border-amber-100',
    },
    { label: 'Urgent Cases', value: 3, bgColor: 'bg-red-50 border-red-100' },
  ];

  riskStratification = [
    { level: 'Low Risk', percentage: 56, bgColor: 'bg-green-200' },
    { level: 'Medium Risk', percentage: 28, bgColor: 'bg-amber-200' },
    { level: 'High Risk', percentage: 16, bgColor: 'bg-red-200' },
  ];

  // Priority patient list
  priorityPatients = [
    {
      name: 'John Miller',
      status: 'Critical',
      lastReading: 'BP: 180/110',
      riskLevel: 'High',
    },
    {
      name: 'Emily Rogers',
      status: 'Needs Review',
      lastReading: 'Glucose: 210',
      riskLevel: 'Medium',
    },
    {
      name: 'Robert Chen',
      status: 'Stable',
      lastReading: 'BP: 118/76',
      riskLevel: 'Low',
    },
  ];

  // Handle button clicks
  handleContact(patient: any) {
    alert(`Contacting ${patient.name} (${patient.status})`);
  }

  handleReview(patient: any) {
    alert(`Reviewing ${patient.name}'s case`);
  }

  handleView(patient: any) {
    alert(`Viewing ${patient.name}'s details`);
  }
}
