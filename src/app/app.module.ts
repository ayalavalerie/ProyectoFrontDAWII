import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './views/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CardComponent,
    FooterComponent,
    LandingComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [],
})
export class AppModule {}
