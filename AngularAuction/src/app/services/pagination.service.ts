import { Injectable } from '@angular/core';
import { PaginationWithFilter } from '../models/pagination-with-filter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private url = "Item/Pagination/";
  body?: PaginationWithFilter

  constructor(private httpClient: HttpClient) {}

  public getPaginationWithFilter(): Observable<PaginationWithFilter> {
    return this.httpClient.post<PaginationWithFilter>(`${environment.apiUrl}/${this.url}`, this.body);
  }
}
