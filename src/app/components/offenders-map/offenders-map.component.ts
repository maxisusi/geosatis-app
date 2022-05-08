import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectAllOffenders } from 'src/app/store/state/offenders/offenders.selectors';
import {
  circle,
  Icon,
  icon,
  latLng,
  marker,
  polygon,
  tileLayer,
} from 'leaflet';
import { Offender } from 'src/app/shared/application.models';
import { loadOffenders } from 'src/app/store/state/offenders/offenders.actions';

@Component({
  selector: 'app-offenders-map',
  templateUrl: './offenders-map.component.html',
  styleUrls: ['./offenders-map.component.css'],
})
export class OffendersMapComponent implements OnInit {
  public allOffenders$ = this.store.select(selectAllOffenders);

  markerList: any = [];
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 7.5,
    center: latLng(46.8182, 8.2275),
  };

  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: '...' }
      ),
      'Open Cycle Map': tileLayer(
        'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: '...' }
      ),
    },
    overlays: {},
  };

  layers = this.markerList;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    // Subscribe to get datas from offender store
    this.allOffenders$.subscribe((offenders: Offender[]) => {
      console.log(offenders);

      offenders.map((offender) => {
        const singleMarker = marker(
          [offender.location.lat, offender.location.long],
          {
            icon: icon({
              ...Icon.Default.prototype.options,
              iconUrl: 'assets/marker-icon.png',
              iconRetinaUrl: 'assets/marker-icon-2x.png',
              shadowUrl: 'assets/marker-shadow.png',
            }),
          }
        );
        this.markerList.push(singleMarker);
      });
    });
  }
}
