import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss'],
})
export class InputFilterComponent implements OnInit {
  @Output() queryEvent = new EventEmitter<string>();

  constructor() {}

  public query: string = '';

  ngOnInit(): void {}

  public onSubmit() {
    this.queryEvent.emit(this.query);
  }
}
