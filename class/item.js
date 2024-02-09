class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isFood = false;
  }
}

try {
  module.exports = { Item };
} catch {
  module.exports = null;
};
