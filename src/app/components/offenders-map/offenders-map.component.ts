import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Icon, icon, latLng, marker, tileLayer } from 'leaflet';
import { Offender } from 'src/app/shared/application.models';
import { AppState } from 'src/app/store/app.state';
import { selectTotalIndex } from 'src/app/store/state/index/index.selectors';
import {
  selectAllOffenders,
  selectByPagination,
} from 'src/app/store/state/offenders/offenders.selectors';

@Component({
  selector: 'app-offenders-map',
  templateUrl: './offenders-map.component.html',
  styleUrls: ['./offenders-map.component.css'],
})
export class OffendersMapComponent implements OnInit {
  constructor(private readonly store: Store<AppState>) {}

  // * Instanciate the selectors for the offenders
  selectAllOffender$ = this.store.pipe(select(selectAllOffenders));
  indexPage$ = this.store.pipe(select(selectTotalIndex));

  // * Tracks and manipulate the toggle control
  isSlideChecked: boolean = false;

  /**
   * Leaflet Params
   */

  layers = [];

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

  // * Configuration for the marker config
  markerConfig = {
    icon: icon({
      ...Icon.Default.prototype.options,
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png',
    }),
  };

  ngOnInit(): void {
    // * Initialize the "Show All Offenders" as false
    this.updateView(false);
  }

  /**
   * Generate and display the markers on the map.
   * Decides if it displays the paginated list of offenders or all offenders
   * @param checkedValue
   */

  updateView(checkedValue: boolean | any): void {
    // * Set the toggle variable with the $event
    this.isSlideChecked = checkedValue.checked;

    // * Checks if we don't want to display all the offenders
    if (!this.isSlideChecked) {
      // * Get datas from the paginated list of offenders
      this.indexPage$.subscribe((index) => {
        this.store
          .pipe(select(selectByPagination(index)))
          .subscribe((offenders: Offender[]) => {
            // * Triggers the slider to false if we are navigation to another page
            this.isSlideChecked = false;

            // * Pushes the coordinates to the marker list to display them on the map
            this.displayMarkers(offenders);
          });
      });
    } else {
      // * Get datas from all of our offenders
      this.selectAllOffender$.subscribe((offenders: Offender[]) => {
        this.displayMarkers(offenders);
      });
    }
  }

  /**
   * Creates the marker and push them on the map
   * @param offenders
   * @returns put the marker list inside the layer params of leaflet
   */
  displayMarkers(offenders: Offender[]): void {
    // * Reset markers list
    this.markerList = [];

    offenders.map((offender: Offender) => {
      // * Create markers and set a default visual configuration
      const singleMarker = marker(
        [offender.location.coordinates.lat, offender.location.coordinates.long],
        { ...this.markerConfig }
      );
      this.markerList.push(singleMarker);
    });
    return (this.layers = this.markerList);
  }
}
