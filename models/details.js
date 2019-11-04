const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'details.json'
);

const getDetailsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Detail {
  constructor(id, water, light, other) {
    this.id = id;
    this.water = water;
    this.light = light;
    this.other = other;
  }

  save() {
    getDetailsFromFile(details => {
      if (this.id) {
        const existingDetailsIndex = details.findIndex(
          det => det.id === this.id
        );
        const updatedDetails = [...details];
        updatedDetails[existingDetailsIndex] = this;
        fs.writeFile(d, JSON.stringify(updatedDetails), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        details.push(this);
        fs.writeFile(d, JSON.stringify(details), err => {
          console.log(err);
        });
      }
    });
  }

  static deleteById(id) {
    getDetailsFromFile(details => {
      const detail = details.find(det => det.id === id);
      const updatedDetails = details.filter(det => det.id !== id);
      fs.writeFile(d, JSON.stringify(updatedDetails), err => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }

  static fetchAll(cb) {
    getDetailsFromFile(cb);
  }

  static findById(id, cb) {
    getDetailsFromFile(details => {
      const detail = details.find(d => d.id === id);
      cb(detail);
    });
  }
};
