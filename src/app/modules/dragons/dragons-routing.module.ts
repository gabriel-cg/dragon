import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonsComponent } from './dragons.component';
import { CreateDragonsComponent } from './create-dragons/create-dragons.component';
import { AuthGuard } from '../../core/services'

const routes: Routes = [
  {
    path: 'dragons',
    component: DragonsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dragons/create',
    component: CreateDragonsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class DragonsRoutingModule { }
