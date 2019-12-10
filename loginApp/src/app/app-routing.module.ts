import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Add this
import { RegisterComponent } from './register/register.component'; 
import { ProfileComponent } from './profile/profile.component'; 


const routes: Routes = [
  { path: 'register', component: RegisterComponent },              // Add this
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
