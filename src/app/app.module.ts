import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCarouselComponent } from './shared/image-carousel/image-carousel.component';

@NgModule({
  declarations: [AppComponent, ImageCarouselComponent],
  imports: [BrowserModule, AppRoutingModule, IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
