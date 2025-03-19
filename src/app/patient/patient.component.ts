import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-patient',
  imports: [CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css',
})
export class PatientComponent {
  healthTips = [
    {
      title: 'Stay Hydrated',
      description: 'Drink at least 8 glasses of water daily.',
    },
    {
      title: 'Exercise Regularly',
      description: 'Aim for 30 minutes of moderate exercise 5 times a week.',
    },
    {
      title: 'Monitor Blood Sugar',
      description: 'Check your blood glucose levels regularly.',
    },
  ];
  labResults = [
    {
      test: 'Hemoglobin A1C',
      result: '6.2%',
      referenceRange: '4.0% - 5.6%',
      status: 'High',
    },
    {
      test: 'Cholesterol',
      result: '180 mg/dL',
      referenceRange: '< 200 mg/dL',
      status: 'Normal',
    },
    {
      test: 'Blood Glucose',
      result: '142 mg/dL',
      referenceRange: '70 - 100 mg/dL',
      status: 'High',
    },
  ];
  pastAppointments = [
    { doctor: 'Dr. Sarah Johnson', type: 'General Checkup', date: 'Jan 15, 2025', time: '10:30 AM' },
    { doctor: 'Dr. Michael Lee', type: 'Diabetes Follow-up', date: 'Dec 20, 2024', time: '2:15 PM' }
  ];
  ngAfterViewInit() {
    Chart.register(...registerables);
    const ctx = document.getElementById(
      'healthTrendsChart'
    ) as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Blood Pressure (Systolic)',
            data: [120, 118, 122, 125, 130, 128],
            borderColor: 'blue',
            fill: false,
          },
          {
            label: 'Blood Glucose',
            data: [140, 142, 138, 145, 150, 148],
            borderColor: 'green',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }

  medications = [
    { name: 'Metformin', dosage: '500mg', time: '8:00 AM', frequency: 'Daily' },
    { name: 'Lisinopril', dosage: '10mg', time: '7:00 PM', frequency: 'Daily' },
    {
      name: 'Atorvastatin',
      dosage: '20mg',
      time: '9:00 PM',
      frequency: 'Daily',
    },
  ];

  markAsTaken(medication: any) {
    alert(`Marked ${medication.name} as taken.`);
  }
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
