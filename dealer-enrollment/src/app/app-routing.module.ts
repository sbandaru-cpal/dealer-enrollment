import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component'; // Add this
import { EnrollmentComponent } from './enrollment/enrollment.component'; // Add this

const routes: Routes = [
  { path: 'enroll', component: EnrollmentComponent },              // Add this
  { path: 'notifications', component: NotificationsComponent }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
