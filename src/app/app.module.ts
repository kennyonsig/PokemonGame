import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { CommonModule, NgOptimizedImage } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomePageComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    CommonModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
