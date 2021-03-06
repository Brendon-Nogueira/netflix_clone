import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FullBannerComponent } from './shared/full-banner/full-banner.component';
import { ListTitlesComponent } from './shared/list-titles/list-titles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
