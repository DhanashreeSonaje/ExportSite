import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiceComponent } from './rice/rice.component';
import { GalleryComponent } from './testimonials/testimonials.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'riceDetails', component: RiceComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'aboutUs', component: AboutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }