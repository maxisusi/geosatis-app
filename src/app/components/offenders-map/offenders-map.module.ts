import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { OffendersComponent } from '../offenders/offenders.component';

@NgModule({
  imports: [LeafletModule],
  declarations: [OffendersComponent],
})
export class MaterialModule {}
