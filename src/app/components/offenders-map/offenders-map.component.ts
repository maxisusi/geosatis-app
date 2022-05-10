import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {
  selectAllOffenders,
  selectByPagination,
  selectPaginatedOffenders,
} from 'src/app/store/state/offenders/offenders.selectors';
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
import { selectTotalIndex } from 'src/app/store/state/index/index.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offenders-map',
  templateUrl: './offenders-map.component.html',
  styleUrls: ['./offenders-map.component.css'],
})
export class OffendersMapComponent implements OnInit {
  constructor(private readonly store: Store<AppState>) {}
  public paginatedOffender$ = this.store.pipe(select(selectPaginatedOffenders));
  public selectAllOffender$ = this.store.pipe(select(selectAllOffenders));

  private indexPage$ = this.store.pipe(select(selectTotalIndex));
  public allOffenders$!: Observable<Offender[]>;

  markerList: any = [];
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 3.5,
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

  layers = [];

  updateView(checkedValue: boolean): void {
    if (!checkedValue) {
      // * Subscribe to get datas from offender store

      this.indexPage$.subscribe((index) => {
        this.store
          .pipe(select(selectByPagination(index)))
          .subscribe((offenders: Offender[]) => {
            console.log('Select paginated');
            // * Reset markers list
            this.markerList = [];
            offenders.map((offender) => {
              const singleMarker = marker(
                [
                  parseFloat(offender.location.lat),
                  parseFloat(offender.location.long),
                ],
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
            this.layers = this.markerList;
          });
      });
    } else {
      // * Subscribe to get datas from offender store
      this.selectAllOffender$.subscribe((offenders: Offender[]) => {
        console.log('Select all');
        // * Reset markers list
        this.markerList = [];
        offenders.map((offender) => {
          const singleMarker = marker(
            [
              parseFloat(offender.location.lat),
              parseFloat(offender.location.long),
            ],
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

        this.layers = this.markerList;
      });
    }
  }

  ngOnInit(): void {
    this.updateView(false);
  }

  ngDoCheck(): void {}
}
