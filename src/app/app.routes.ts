import { Routes } from '@angular/router';
import { ProviderComponent } from './provider/provider.component';
import { PatientComponent } from './patient/patient.component';

export const routes: Routes = [
  { path: 'provider', component: ProviderComponent },
  { path: 'patient', component: PatientComponent },
  { path: '', redirectTo: '/provider', pathMatch: 'full' },
];
