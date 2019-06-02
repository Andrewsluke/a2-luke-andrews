import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotographerComponent } from './photographer/photographer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BookingComponent } from './booking/booking.component';
import { PhotographerProfileComponent } from './photographer-profile/photographer-profile.component';


const routes: Routes = [
  { path: "index", component: PhotographerComponent},
  { path: "", redirectTo: "index", pathMatch: "full"},
  { path: "sign-up", component: SignUpComponent },
  { path: "booking/:id", component: BookingComponent },
  { path: "profile/:id", component: PhotographerProfileComponent },
  { path: "profile", redirectTo: "index", pathMatch: "full"}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
