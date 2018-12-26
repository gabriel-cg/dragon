import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.scss']
})
export class DragonsListComponent implements OnInit {
  currentPage = 1;
  @Input() dragons;
  @Input() paginationInfo;
  @Output() onUpdate = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onChangePage = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

  edit(slug) {
    this.onUpdate.emit(slug);
  }

  delete(slug) {
    this.onDelete.emit(slug);
  }

  changePage(page) {
    this.currentPage = page;
    this.onChangePage.emit(page);
  }
}
