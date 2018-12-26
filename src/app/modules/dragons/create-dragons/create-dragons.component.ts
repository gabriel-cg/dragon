import { Component, OnInit } from '@angular/core';
import { DragonsService } from '../../../core/services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-dragons',
  templateUrl: './create-dragons.component.html',
  styleUrls: ['./create-dragons.component.scss']
})
export class CreateDragonsComponent implements OnInit {
  historiesNumber: number = 1;
  dragon = {
    name: '',
    type: '',
    histories: []
  }
  constructor(
    private dragonService: DragonsService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Salvar', 'Dragão salvo com sucesso');
  }

  addHistory() {
    this.historiesNumber += 1;
  }

  onSubmit() {
    this.dragonService.create(this.dragon);
    this.showSuccess();
    this.onBack();
  }

  onBack() {
    this.router.navigateByUrl('/dragons');
  }
}
