import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaginationService } from '../../services/pagination.service';
import { CatalogService } from '../../services/catalog.service';
import { PaginationWithFilter } from '../../models/pagination-with-filter';
import { Catalog } from './models/catalog';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  standalone: true,
  imports: [FormsModule, FilterComponent, HttpClientModule],
  providers: [PaginationService, CatalogService, HttpClient],
})
export class CatalogComponent{
  paginationWithFilter?: PaginationWithFilter
  @Input() catalog?: Catalog

  constructor(private paginationService: PaginationService, private catalogService: CatalogService) { }
  
}
