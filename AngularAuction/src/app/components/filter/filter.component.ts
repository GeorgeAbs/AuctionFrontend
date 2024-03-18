import { Component, Input, OnInit } from '@angular/core';
import { PaginationWithFilter } from '../../models/pagination-with-filter';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class FilterComponent implements OnInit {
  @Input() paginationWithFilter?: PaginationWithFilter
  @Input() thisName?: string

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.paginationWithFilter)
      console.log(this.thisName);
    })
    
  }

  onCl() {
    console.log(this.paginationWithFilter)
    console.log(this.thisName);
  }
}
