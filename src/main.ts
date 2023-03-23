import 'zone.js/dist/zone';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import 'bootstrap/dist/css/bootstrap.css';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TripDownComponent } from './trip-down.component/trip-down.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  declarations: [AppComponent, TripDownComponent],
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // bootstrapApplication(AppModule);
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
