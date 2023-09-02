import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RiceComponent } from './rice/rice.component';
import { SpicesComponent } from './spices/spices.component';
import { PharmaComponent } from './pharma/pharma.component';
import { GalleryComponent } from './testimonials/testimonials.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { HomeComponent } from './home/home.component';
import { NavbarCompComponent } from './navbar-comp/navbar-comp.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    RiceComponent,
    SpicesComponent,
    PharmaComponent,
    GalleryComponent,
    InfrastructureComponent,
    HomeComponent,
    NavbarCompComponent,
    FooterComponent,
    BlogComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
