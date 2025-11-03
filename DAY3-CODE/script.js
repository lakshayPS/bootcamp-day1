(function () {
  function Product(prodName, prodPrice, prodCat) {
    this.name = prodName;
    this.price = parseInt(prodPrice);
    this.category = prodCat;

    var box = document.createElement("div");
    box.classList.add("card");
    box.style.width = "200px";
    box.style.border = "1px solid #ccc";
    box.style.margin = "4px";
    box.style.backgroundColor = "yellow";

    var elements = createProductElements();

    var name = elements[0];
    var price = elements[1];
    var category = elements[2];

    name.textContent = "Name: " + prodName;
    price.textContent = "Price: " + prodPrice;
    category.textContent = "Category: " + prodCat;

    box.appendChild(name);
    box.appendChild(price);
    box.appendChild(category);

    box.onmouseover = function () {
      box.style.backgroundColor = "pink";
    };
    box.onmouseout = function () {
      box.style.backgroundColor = "yellow";
    };

    document.body.appendChild(box);
  }

  Product.prototype.getDiscountPrice = function (perc) {
    var prodPrice = this.getProductPrice();
    // console.log(prodPrice);
    var discAmnt = (prodPrice * perc) / 100;
    var finalPrice = prodPrice - discAmnt;

    console.log(
      `${this.name} discounted price (${prodPrice}% off): ${finalPrice}`
    );
    return finalPrice;
  };

  Product.prototype.getProductPrice = function () {
    return this.price;
  };

  function createProductElements() {
    var name = document.createElement("li");
    name.classList.add("name");
    name.style.listStyleType = "none";

    var price = document.createElement("li");
    price.classList.add("price");
    price.style.listStyleType = "none";

    var category = document.createElement("li");
    category.classList.add("category");
    category.style.listStyleType = "none";

    var elements = [name, price, category];

    return elements;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var p1 = new Product("p1", "99", "cat1");
    var p2 = new Product("p2", "199", "cat2");
    var p3 = new Product("p3", "1991", "cat3");
    var p4 = new Product("p4", "499", "cat4");

    var products = [p1, p2, p3, p4];

    var prices = products.map((prod) => prod.getProductPrice.call(prod));
    console.log(prices);

    var maxPrice = Math.max.apply(null, prices);

    function showMessage(msg, price) {
      var heading = document.createElement("h3");
      heading.textContent = msg + " " + price;
      heading.style.color = "blue";
      document.body.insertBefore(heading, document.body.firstChild);
    }

    p1.getDiscountPrice(10);

    var showMaxPrice = showMessage.bind(
      null,
      "Price of costliest product is",
      maxPrice
    );
    showMaxPrice();
  });
})();

// window.onload = function () {
//   var p1 = new Product("p1", "99", "c1");
//   Product("p2", "1099", "c2");
//   Product("p3", "1299", "c3");
//   Product("p4", "1599", "c4");

//   p1.getDiscountPrice(50);
// };
