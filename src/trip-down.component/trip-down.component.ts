import 'zone.js/dist/zone';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
@Component({
  selector: 'trip-down',
  templateUrl: './trip-down.component.html',
  styleUrls: ['./trip-down.component.css'],
})
export class TripDownComponent implements OnChanges, OnInit {
  @Input() options: any[];
  @Input() values: any[];
  selected;
  selectedValue;
  disabled = false;
  flatOptions = []

  ngOnInit() {
    this.getFlatOptions(this.options)
  }

  getFlatOptions(options) {
    options.forEach((option) => {
      if (option.options) {
        this.getFlatOptions(option.options);
      }
      else {
        this.flatOptions.push(option);
      }
    });
  }

  ngOnChanges() {
    if (!this.values) {
      this.values = this.options.map(o => o.value);
    }
  }

  valueChange() {
    this.selected = this.flatOptions.find(o => o.value == this.selectedValue);
    console.log('valueChange', this.selectedValue, this.selected);
  }

}
