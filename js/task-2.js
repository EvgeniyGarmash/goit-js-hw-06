class Storage {
  #item = [];
  constructor(item) {
    this.#item = item;
  }
  getItems() {
    return this.#item
  }
  addItem(newItem){
    this.#item.push(newItem)
  }
  removeItem(itemToRemove){
    let newList = [];
    this.#item.forEach(function (Remove) {
      if (Remove != itemToRemove){
        newList.push(Remove)
        }
      }
    );
    this.#item = newList;
  }

}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]