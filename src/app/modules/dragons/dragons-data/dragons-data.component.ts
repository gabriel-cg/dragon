import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragons-data',
  templateUrl: './dragons-data.component.html',
  styleUrls: ['./dragons-data.component.scss']
})
export class DragonsDataComponent implements OnInit {
  @Input() dragon;
  @Output() onUpdate = new EventEmitter();
  @Output() onReturn = new EventEmitter();
 
  constructor(private router: Router) { }

  ngOnInit() {}

  submit() {
    this.onUpdate.emit(this.dragon);
  }

  return() {
    this.onReturn.emit();
  }

}
