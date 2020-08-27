import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExtraService {
  constructor(private http: HttpClient) {}

  getExtra() {
    return 'Eeeeeeeeeeeeeextra!';
  }
}
