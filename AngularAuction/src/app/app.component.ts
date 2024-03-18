import { Component, OnInit } from '@angular/core';
import { PaginationService } from './services/pagination.service';
import { PaginationWithFilter } from './models/pagination-with-filter';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogService } from './services/catalog.service';
import { Catalog } from './components/catalog/models/catalog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, FilterComponent, CatalogComponent, HttpClientModule],
  providers: [PaginationService, CatalogService, HttpClient],
  standalone: true,
})
export class AppComponent implements OnInit {
  paginationWithFilter?: PaginationWithFilter
  catalog?: Catalog
  name: string = "wwert"

  constructor(private paginationService: PaginationService, private catalogService: CatalogService) {}

  ngOnInit() : void {
    this.catalogService
      .getCatalog()
      .subscribe((result: Catalog) => (this.catalog = result));
  }

  showRespone(): void {
    console.log(JSON.stringify(this.catalog))
  }
}
