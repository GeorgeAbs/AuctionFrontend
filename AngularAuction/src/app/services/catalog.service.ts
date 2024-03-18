import { Injectable } from '@angular/core';
import { PaginationWithFilter } from '../models/pagination-with-filter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Catalog } from '../components/catalog/models/catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private url = "Catalog/GetCatalog/";
  body?: Catalog

  constructor(private httpClient: HttpClient) { }

  public getCatalog(): Observable<Catalog> {
    return this.httpClient.post<Catalog>(`${environment.apiUrl}/${this.url}`, this.body);
  }
}
