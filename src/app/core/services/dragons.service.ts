import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  baseUrl() {
    return 'https://dragons-api.herokuapp.com/api/dragons';
  }

  list(page = 1) {
    const params = { page: page-1 };
    return axios.get(this.baseUrl(), { params })
      .then(res => res.data);
  }

  create(dragon) {
    return axios.post(this.baseUrl(), dragon)
      .then(res => res.data)
  }

  delete(slug) {
    return axios.delete(`${this.baseUrl()}/${slug}`)
      .then(res => res.data)
  }

  update(dragon) {
    return axios.put(`${this.baseUrl()}/${dragon.slug}`, dragon);
  }

  constructor() {}
}
