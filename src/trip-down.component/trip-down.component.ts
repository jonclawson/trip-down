import 'zone.js/dist/zone';
import { Component, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'trip-down',
  templateUrl: './trip-down.component.html',
  styleUrls: ['./trip-down.component.css'],
})
export class TripDownComponent implements OnChanges {
  @Input() options: any[];
  @Input() values: any[];
  selected;
  selectedValue;
  disabled = false;

  ngOnChanges() {
    if (!this.values) {
      this.values = this.options.map(o => o.value);
    }
  }

  valueChange() {
    this.selected = this.options.find(o => o.value == this.selectedValue);
    console.log('valueChange', this.selectedValue, this.selected);
  }

}
