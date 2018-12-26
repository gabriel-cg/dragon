import { Component, OnInit } from '@angular/core';
import { DragonsService } from '../../core/services/dragons.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit {
  dragons = [];
  pagination: any = {};
  isUpdating = false;
  dragonToUpdate = {};

  constructor(
    private dragonService: DragonsService,
    private router: Router,
    private toastr: ToastrService,
  ) { }
  
  ngOnInit() {
    this.list();
  }

  async list(page = 1) {
    const result = await this.dragonService.list(page);
    this.dragons = result.items;
    this.pagination = result._metadata;
  }

  newDragon() {
    this.router.navigateByUrl('/dragons/create');
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

  showEditWarging() {
    this.toastr.warning('Você só pode editar um dragão que contenha Nome' ,'Atenção');
  }

  showDeletetWarging() {
    this.toastr.warning('Você só pode deletar um dragão que contenha Nome' ,'Atenção');
  }

  showEditSuccess() {
    this.toastr.success('', 'Dragão atualizado com sucesso');
  }
  
  showDeleteSuccess() {
    this.toastr.success('', 'Dragão deletado com sucesso');
  }

  openUpdate(slug) {
    if (slug) {
      this.isUpdating = true;
      this.dragonToUpdate = {...this.dragons.find(dragon => dragon.slug === slug)};
    } else {
      this.showEditWarging();
    }
  }

  async updateDragon(dragon) {
    await this.dragonService.update(dragon);
    this.isUpdating = false;
    this.dragonToUpdate = {};
    await this.list(this.pagination.page+1);
    this.showEditSuccess();
  }

  async deleteDragon(slug) {
    if (slug) {
      await this.dragonService.delete(slug);
      this.list();
      this.showDeleteSuccess();
    } else {
      this.showDeletetWarging();
    }
  }
}
