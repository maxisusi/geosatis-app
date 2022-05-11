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
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { OffendersMapComponent } from './components/offenders-map/offenders-map.component';
import { OffendersPaginationComponent } from './components/offenders-pagination/offenders-pagination.component';
import { CreateOffendersModalComponent } from './components/create-offenders-modal/create-offenders-modal.component';
import { OffendersService } from './services/offenders.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModuleApp } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleAppComponent,
    OffendersComponent,
    OffendersListComponent,
    OffendersMapComponent,
    OffendersPaginationComponent,
    CreateOffendersModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LeafletModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModuleApp,
  ],
  providers: [OffendersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
