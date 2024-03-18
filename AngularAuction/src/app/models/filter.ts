export class Filter {
  pageNumber: number = 1
  pageSize: number = 20
  catalogCategoryId: string = ""
  listCatalogFilterStringProperties: CatalogFilterStringProperties[] = []
  listCatalogFilterIntProperties: CatalogFilterIntProperties[] = []
  listCatalogFilterFloatProperties: CatalogFilterFloatProperties[] = []
  sortingBy: string = ""
  sortingByDisplayedValue: string = ""
  isAscending: boolean = false
  sortingDirectionDisplayedValue: string = ""
  sortingsBy: { [id: string]: string } = {}
}

export class CatalogFilterStringProperties {
  displayedName: string = ""
  catalogPropertyId: string = ""
  propertyItems: CatalogFilterPropertyStringItem[] = []
}

export class CatalogFilterIntProperties {
  displayedName: string = ""
  catalogPropertyId: string = ""
  propertyItems: CatalogFilterPropertyIntItem[] = []
}

export class CatalogFilterFloatProperties {
  displayedName: string = ""
  catalogPropertyId: string = ""
  propertyItems: CatalogFilterPropertyFloatItem[] = []
}

export class CatalogFilterPropertyStringItem {
  catalogItemPropertyId: string = ""
  value: string = ""
  isSelected: boolean = false;
}

export class CatalogFilterPropertyIntItem {
  catalogItemPropertyId: string = ""
  value: number = 0
  isSelected: boolean = false
}

export class CatalogFilterPropertyFloatItem {
  catalogItemPropertyId: string = ""
  value: number = 0
  isSelected: boolean = false
}
