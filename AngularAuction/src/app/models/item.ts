export class ItemProperty {
  name: string = "";
  values: string[] = [];
}

export class Item {
  title: string = "";
  description: string = "";
  properties: ItemProperty[] = []
}
