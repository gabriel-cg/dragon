import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonsComponent } from './dragons.component';
import { DragonsRoutingModule } from './dragons-routing.module';
import { DragonsListComponent } from './dragons-list/dragons-list.component';
import { CreateDragonsComponent } from './create-dragons/create-dragons.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DragonsDataComponent } from './dragons-data/dragons-data.component';

@NgModule({
  declarations: [DragonsComponent, DragonsListComponent, CreateDragonsComponent, DragonsDataComponent],
  imports: [
    CommonModule,
    DragonsRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class DragonsModule { }
