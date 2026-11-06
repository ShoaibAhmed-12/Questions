// =================================
// 1. SELECT HTML ELEMENTS
// =================================

const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const categoriesContainer = document.getElementById("categories");
const productCount = document.getElementById("productCount");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");

const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

// =================================
// 2. GLOBAL VARIABLES
// =================================

let allProducts = [];
let cart = [];
let selectedCategory = "all";

// =================================
// 3. FETCH API DATA
// =================================

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error("API data not found");
    }

    return response.json();
  })
  .then((data) => {
    allProducts = data;

    loading.style.display = "none";

    displayProducts(allProducts);
    displayCategories();
  })
  .catch((error) => {
    loading.style.display = "none";

    errorMessage.textContent = "Something went wrong. Please refresh the page.";

    console.log("Error:", error);
  });

// =================================
// 4. DISPLAY PRODUCTS
// =================================

function displayProducts(products) {
  productsContainer.innerHTML = "";

  productCount.textContent = products.length + " Products Found";

  if (products.length === 0) {
    productsContainer.innerHTML = `<div class="message">No Products Found!</div>`;

    return;
  }

  products.forEach((product) => {
    productsContainer.innerHTML += `

            <div class="product-card">

                <div class="product-image">

                    <img src="${product.image}"
                         alt="${product.title}"
                         loading="lazy">

                </div>

                <p class="product-category">
                    ${product.category}
                </p>

                <h3>${product.title}</h3>

                <div class="product-price">
                    $${product.price.toFixed(2)}
                </div>

                <div class="product-rating">
                    ⭐ ${product.rating.rate}
                    (${product.rating.count} reviews)
                </div>

                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})">

                    Add to Cart

                </button>

            </div>

        `;
  });
}

// =================================
// 5. DISPLAY CATEGORIES
// =================================

function displayCategories() {
  let categories = [
    ...new Set(
      allProducts.map((product) => {
        return product.category;
      })
    ),
  ];

  categoriesContainer.innerHTML = `
        <button class="category-btn active"
                data-category="all">
            All Products
        </button>
    `;

  categories.forEach((category) => {
    categoriesContainer.innerHTML += `

            <button class="category-btn"
                    data-category="${category}">

                ${category}

            </button>

        `;
  });
}

// =================================
// 6. CATEGORY FILTER
// =================================

categoriesContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("category-btn")) {
    return;
  }

  selectedCategory = e.target.dataset.category;

  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  e.target.classList.add("active");

  filterProducts();
});

// =================================
// 7. LIVE SEARCH
// =================================

searchInput.addEventListener("input", () => {
  filterProducts();
});

// =================================
// 8. FILTER PRODUCTS LOGIC
// =================================

function filterProducts() {
  let searchValue = searchInput.value.trim().toLowerCase();

  let filteredProducts = allProducts.filter((product) => {
    let matchesSearch =
      product.title.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue);

    let matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  displayProducts(filteredProducts);
}

// =================================
// 9. SEARCH BUTTON
// =================================

document.getElementById("searchBtn").addEventListener("click", () => {
  filterProducts();
});

// =================================
// 10. ADD TO CART
// =================================

function addToCart(productId) {
  let product = allProducts.find((item) => {
    return item.id === productId;
  });

  if (!product) return;

  let existingProduct = cart.find((item) => {
    return item.id === productId;
  });

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  updateCart();
}

// =================================
// 11. UPDATE CART
// =================================

function updateCart() {
  let totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  let totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  cartCount.textContent = totalItems;

  cartTotal.textContent = totalPrice.toFixed(2);

  displayCart();
}

// =================================
// 12. DISPLAY CART ITEMS
// =================================

function displayCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";

    return;
  }

  cart.forEach((product) => {
    cartItems.innerHTML += `

            <div class="cart-item">

                <img src="${product.image}" alt="Product">

                <div class="cart-item-info">

                    <h4>${product.title}</h4>

                    <p>
                        $${product.price.toFixed(2)}
                        × ${product.quantity}
                    </p>

                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${product.id})">

                    Remove

                </button>

            </div>

        `;
  });
}

// =================================
// 13. REMOVE FROM CART
// =================================

function removeFromCart(productId) {
  cart = cart.filter((product) => {
    return product.id !== productId;
  });

  updateCart();
}

// =================================
// 14. OPEN CART
// =================================

document.getElementById("openCart").addEventListener("click", () => {
  cartPanel.classList.add("show");
  cartOverlay.classList.add("show");
});

// =================================
// 15. CLOSE CART
// =================================

function closeCart() {
  cartPanel.classList.remove("show");
  cartOverlay.classList.remove("show");
}

document.getElementById("closeCart").addEventListener("click", closeCart);

cartOverlay.addEventListener("click", closeCart);

// =================================
// 16. CHECKOUT BUTTON
// =================================

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");

    return;
  }

  alert("Shopping cart ready! Payment system is not connected yet.");
});

// let allProducts = [];

// fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     allProducts = data;
//     displayProducts(allProducts);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// // Display Products
// function displayProducts(products) {
//   document.getElementById("products").innerHTML = "";

//   if (products.length === 0) {
//     document.getElementById("products").innerHTML =
//       "<h2>No Products Found!</h2>";
//     return;
//   }

//   products.forEach((product) => {
//     document.getElementById("products").innerHTML += `
//             <div class="product-card">
//                 <img src="${product.image}">
//                 <h3>${product.title}</h3>
//                 <p>$${product.price}</p>
//                 <button>Add to Cart</button>
//             </div>
//         `;
//   });
// }

// // Search Products
// function searchProducts() {
//   let searchValue = document.getElementById("searchInput").value.toLowerCase();

//   let filteredProducts = allProducts.filter((product) => {
//     return product.title.toLowerCase().includes(searchValue);
//   });

//   displayProducts(filteredProducts);
// }

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

//   <div id="products"></div>

// <script>
// fetch("https://fakestoreapi.com/products")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {

//         data.forEach((product) => {

//             document.getElementById("products").innerHTML += `
//                 <div>
//                     <img src="${product.image}" width="100">
//                     <h3>${product.title}</h3>
//                     <p>$${product.price}</p>
//                     <button>Add to Cart</button>
//                 </div>
//             `;

//         });

//     })
//     .catch((error) => {
//         console.log(error);
//     });
// </script>

// const getuser = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     if (!response.ok) {
//       throw new Error ('Could not fetch the data!')
//     }
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }
// }
// getuser( )

// const getuser = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error("Could not fetch the data!");
//     }
//     const data = await response.json();

//     document.write(data)
//   } catch (error) {
//    document.error(error)
//   }
// }
// getuser();

// const getuser = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     if (!response.ok) {
//       throw new Error ("Could not fetch the data!")
//     }
//     const data = await response.json();
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// getuser()

// const getUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!response.ok) {
//       throw new Error("Could not fetch the data!");
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// getUsers();

// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("Could not found the resource!");
//       }
//     });

//     request.open("GET", url);
//     request.send();
//   });
// };

// fetchData("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     console.log(data);
//     return fetchData("https://jsonplaceholder.typicode.com/posts");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // resolve("Success")
//         reject("Reject")
//     })
// };

// getSomething().then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         resolve("Success")
//     })
// };

// let result = getSomething()

// console.log(result)

// ---------------------------------------------------------------
// const fetchData = (url, cb) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText)
//             cb(undefined, data)
//         } else if (request.readyState === 4) {
//             cb("Could not found the resource!", undefined)
//         }
//     })

//     request.open("GET", url);
//     request.send();

// }

// fetchData('https://jsonplaceholder.typicode.com/users', (err, data) => {
//     console.log("**** users data *****")
//     console.log(data)
//     fetchData('https://jsonplaceholder.typicode.com/posts', (err, data) => {
//         console.log("**** posts data *****")
//         console.log(data)
//         fetchData('https://jsonplaceholder.typicode.com/comments', (err, data) => {
//             console.log("**** comments data *****")
//             console.log(data)
//             fetchData('https://jsonplaceholder.typicode.com/comments', (err, data) => {
//                 console.log("**** comments data *****")
//                 console.log(data)
//             })
//         })
//     })
// })

// ---------------------------------------------------------------------
// const fetchData = (url, cb) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText)
//             cb(undefined, data)
//         } else if (request.readyState === 4) {
//             cb("Could not found the resource!", undefined)
//         }
//     })

//     request.open("GET", url);
//     request.send();

// }

// fetchData('https://jsonplaceholder.typicode.com/users', (err, data) => {
//     console.log("**** users data *****")
//     console.log(data)
//     fetchData('https://jsonplaceholder.typicode.com/posts', (err, data) => {
//         console.log("**** posts data *****")
//         console.log(data)
//         fetchData('https://jsonplaceholder.typicode.com/comments', (err, data) => {
//             console.log("**** comments data *****")
//             console.log(data)
//             fetchData('https://jsonplaceholder.typicode.com/comments', (err, data) => {
//                 console.log("**** comments data *****")
//                 console.log(data)
//             })
//         })
//     })
// })

// ----------------------------------------------------------------
// const fetchData = (url, cb) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText)
//             cb(undefined, data)
//         } else if (request.readyState === 4) {
//             cb("Could not found the resource!", undefined)
//         }
//     })

//     request.open("GET", url);
//     request.send();

// }

// fetchData('https://jsonplaceholder.typicode.com/users', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("**** users data *****")
//         console.log(data)
//     }

// })

// fetchData('https://jsonplaceholder.typicode.com/posts', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("**** posts data *****")
//         console.log(data)
//     }
// })

// fetchData('https://jsonplaceholder.typicode.com/comments', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("**** comments data *****")
//         console.log(data)
//     }
// })

// ----------------------------------------------------------------------
// const getData = (url) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(JSON.parse(request.responseText))
//             console.log('-----------------------------------------')
//         } else if (request.readyState === 4) {
//             console.log("Could not found the resource!")
//         }

//     })

//     request.open("GET", url);
//     request.send();

// }

// getData('https://jsonplaceholder.typicode.com/users')

// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText)
//     } else if (request.readyState === 4) {
//         console.log("Could not found the resource!")
//     }

// })

// request.open("GET", 'https://jsonplaceholder.typicode.com/users');
// request.send();

// ----------------------

// console.log("start");

// setTimeout(() => {
//     console.log("Timeout!")
// }, 3000)

// console.log("end")

// -------------
// console.log("start");

// for (let i = 0; i < 1000; i++) {
//     console.log(i)
// }

// console.log("end")

//---------------------------------------
// const getData = (url) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       console.log(JSON.parse(request.responseText));
//       console.log("-----------------------------------------");
//     } else if (request.readyState === 4) {
//       console.log("Could not found the resource!");
//     }
//   });

//   request.open("GET", url);
//   request.send();
// };

// getData("https://jsonplaceholder.typicode.com/users");

// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText)
//     } else if (request.readyState === 4) {
//         console.log("Could not found the resource!")
//     }

// })

// request.open("GET", 'https://jsonplaceholder.typicode.com/users');
// request.send();
