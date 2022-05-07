import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { TitleAppComponent } from './components/title-app/title-app.component';
import { OffendersComponent } from './components/offenders/offenders.component';
import { OffendersListComponent } from './components/offenders-list/offenders-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleAppComponent,
    OffendersComponent,
    OffendersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
