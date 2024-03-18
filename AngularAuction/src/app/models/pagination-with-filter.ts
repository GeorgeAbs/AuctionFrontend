import { Filter } from "./filter"
import { Item } from "./item"

export class PaginationWithFilter {
  pageViewModel: PageViewModel = new PageViewModel()
  items: Item[] = []
  catalogFilter: Filter = new Filter()
}

export class PageViewModel {
  pageNumber: number = 0
  totalPages: number = 0
  hasPreviousPage: boolean = false
  hasNextPage: boolean = false
}
