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
import { StoreModule } from '@ngrx/store';
import { offenderReducer } from './store/state/offenders/offenders.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { OffendersEffect } from './store/state/offenders/offenders.effects';
import { HttpClientModule } from '@angular/common/http';
import { indexReducer } from './store/state/index/index.reducer';

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
    StoreModule.forRoot({ offenders: offenderReducer, index: indexReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([OffendersEffect]),
  ],
  providers: [OffendersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
