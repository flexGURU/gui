import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  imports: [CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css',
})
export class PatientComponent {
  // Health summary data
  healthSummary = [
    {
      metric: 'Blood Pressure',
      value: '120/80',
      status: 'Normal Range',
      borderColor: 'border-green-400',
      textColor: 'text-green-700',
    },
    {
      metric: 'Blood Glucose',
      value: '142',
      status: 'Slightly Elevated',
      borderColor: 'border-amber-400',
      textColor: 'text-amber-700',
    },
    {
      metric: 'Medication Adherence',
      value: '85%',
      status: 'Last 30 Days',
      borderColor: 'border-blue-400',
      textColor: 'text-blue-700',
    },
  ];

  // Upcoming appointments
  appointments = [
    {
      doctor: 'Dr. Sarah Johnson',
      type: 'General Checkup',
      date: 'Mar 22, 2025',
      time: '10:30 AM',
    },
    {
      doctor: 'Dr. Michael Lee',
      type: 'Diabetes Follow-up',
      date: 'Apr 05, 2025',
      time: '2:15 PM',
    },
  ];

  // Handle reschedule button click
  handleReschedule(appointment: any) {
    alert(`Rescheduling appointment with ${appointment.doctor}`);
  }
}
