import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateOffendersModalComponent } from './components/create-offenders-modal/create-offenders-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { OffendersListComponent } from './components/offenders-list/offenders-list.component';
import { OffendersMapComponent } from './components/offenders-map/offenders-map.component';
import { OffendersPaginationComponent } from './components/offenders-pagination/offenders-pagination.component';
import { OffendersComponent } from './components/offenders/offenders.component';
import { TitleAppComponent } from './components/title-app/title-app.component';
import { MaterialModule } from './material/material.module';
import { OffendersService } from './services/offenders.service';
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
