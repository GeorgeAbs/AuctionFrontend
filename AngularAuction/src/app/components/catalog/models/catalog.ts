export class Catalog {
  categories: CatalogCategory[] = []
}

export class CatalogCategory {
  id: string = ""
  displayedName: string = ""
  systemName: string = ""
  parentCatalogCategoryId: string = ""
  childrenCategories: CatalogCategory[] = []
}
