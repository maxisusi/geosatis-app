import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { indexReducer } from './state/index/index.reducer';
import { OffendersEffect } from './state/offenders/offenders.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { offenderReducer } from './state/offenders/offenders.reducer';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';

const StoreImports = [
  CommonModule,
  StoreModule.forRoot({ offenders: offenderReducer, index: indexReducer }),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),
  EffectsModule.forRoot([OffendersEffect]),
];

@NgModule({
  imports: [StoreImports],
  exports: [StoreImports],
})
export class StoreModuleApp {}
