import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotographerComponent } from './photographer/photographer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: "", component: PhotographerComponent},
  { path: "sign-up", component: SignUpComponent },
  { path: "booking", component: BookingComponent }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
