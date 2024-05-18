const category_id_list = {
  all: '',
  laptops: '?category_id=1',
  tablets: '?category_id=2',
  accessories: '?category_id=3',
  'raspberry-pis': '?category_id=4',
};
localStorage.setItem('moneyType', '0');
var money = [1, 25345, 0.93, 158.01];
var moneyType = localStorage.getItem('moneyType');
var postFixMoney = ['USD', 'VND', 'EUR', 'JPY'];
var selectElement = document.querySelector('#money-menu');

// Fetch list of products
async function Get_Product_List(category_id = '') {
  const res = await fetch(`http://localhost:8000/product${category_id}`, {
    method: 'GET',
  });
  let data = await res.json();
  data = data['data'];

  return data;
}

// Sort by price
function Product_List_Sorted(products, sort_id) {
  if (sort_id === 'default') return products;

  if (sort_id === 'price-low-high') {
    products.sort((a, b) => {
      return parseFloat(a.price) - parseFloat(b.price);
    });
  } else if (sort_id === 'price-high-low') {
    products.sort((b, a) => {
      return parseFloat(a.price) - parseFloat(b.price);
    });
  }

  return products;
}

function get_token() {
  if (!localStorage.getItem('user')) {
    alert('Please login to use this features');
    window.location.href = '/pages/sign.php';
    return '';
  }
  return JSON.parse(localStorage.getItem('user')).token;
}

async function access_current_cart(myToken) {
  const res = await fetch(`http://localhost:8000/cart`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });

  let data = await res.json();

  return { status: res.ok, message: data.message };
}

async function update_current_cart(myToken, id, quantity) {
  const res = await fetch(`http://localhost:8000/cart/product/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
    body: `{
            "quantity": "${quantity}"
        }
        `,
  });

  let data = await res.json();

  return { status: res.ok, message: data.message };
}

async function add_to_cart(myToken, id, quantity = 1) {
  const res = await fetch(`http://localhost:8000/cart/product/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
    body: `{
            "quantity": ${quantity}
        }
        `,
  });

  let data = await res.json();
  return { status: res.ok, message: data.message };
}

async function delete_from_cart(myToken, id) {
  const res = await fetch(`http://localhost:8000/cart/product/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });

  let data = await res.json();
  return { status: res.ok, message: data.message };
}

function get_label_quantity(i, id) {
  let qty_label = document.querySelector(`#quantity-${id}`);
  return parseInt(qty_label.value);
}

////////////////// FORMAT PRODUCT ////////////////////
function generateItem(id, name, image_url, price, short_description, quantity) {
  // image_url = '/images/product_Laptop13.png' //Static img for testing purpose
  // Init list features
  var list_features = '';
  for (i in short_description) {
    list_features += `<li class="fb">${short_description[i]}</li>`;
  }
  list_features += '<li class="fb">Click to see more...</li>';

  // Create template
  var product_template = document.createElement('div');
  product_template.className =
    'card border-0 rounded-0 bg-light col-xs-6 col-sm-6 col-md-4 col-lg-4 item mb-4';
  product_template.id = `${id}`;

  var product_body = `
    <div class="d-flex flex-column justify-content-between align-items-center col-4 row-4" style="width: 100%; height: 100%;">
        <div class="my-2 position-relative" style="width: 80%; height: 100%;">
            <div class="position-absolute d-none" style="width: 92%; height: 92%; background-color: rgba(240, 235, 227, 0.8); transition: 0.5s ease; transform: scale(1.1); right: 4%; top: 4%;" id="list_features-${id}-img">
                <ul>
                    ${list_features}
                </ul>
            </div>
            <img src=${image_url} alt="img" class="rounded img-fluid" id="product-${id}-img" style="min-height: 100%;object-fit: cover; aspect-ratio : 1 / 1">
        </div>
        <div class="border-bottom border-dark mb-1 mt-2">
            <p class="fb fw-bolder text-center mb-2" id="product-${id}-name">${name}</p>
        </div>
        <span class="fb fw-bolder" id="product-${id}-price">${
    Math.round(price * money[moneyType]).toFixed(2) +
    ' ' +
    postFixMoney[moneyType]
  }</span>
        <div class="px-4 m-0 mt-2 d-flex justify-content-center" style="width: 100%;">
            <button type="button" class="btn btn-primary m-0 me-5 d-sm-none d-lg-block" id="detail-${id}-btn" style="max-height: 40px">Detail</button>
            <button type="button" class="btn btn-primary m-0" id="product-${id}-btn" style="max-height: 40px">Add to cart</button>
        </div>
    </div>
    `;

  // <div class="align-self-end  align-content-end p-0 m-0"><button type="button" class="btn btn-primary m-0 mb-3 align-content-end align-self-end" id="product-${id}-btn">Add to cart</button></div>
  // `
  product_template.innerHTML = product_body;

  return product_template;

  // Append to Products-container
  // var product_container = document.getElementById('Products-Container');
  // product_container.appendChild(product_template);
}

async function Load_Product_List(category_id, sort_id) {
  // Filter product list
  let products = await Get_Product_List(category_id);
  products = Product_List_Sorted(products, sort_id);

  // Get the product container
  let product_container = document.getElementById('Products-Container');
  product_container.innerHTML = '';

  for (let i = 0; i < products.length; i++) {
    let current_item = products[i];
    let id = current_item['id'];
    let name = current_item['name'];
    let image_url = current_item['image_url'];
    let price = current_item['price'];

    let short_description = current_item['short_description'];
    short_description = short_description.split('\n');
    short_description = short_description.filter(
      (feature) => feature.trim() !== ''
    );

    // Generate Product templates
    let product_template = generateItem(
      id,
      name,
      image_url,
      price,
      short_description
    );

    // Append to Products-container
    product_container.classList.add('row');
    product_container.appendChild(product_template);
  }

  return products;
}

// Handle cart
async function Page_load_with_filer(category_id, sort_id) {
  let products = await Load_Product_List(category_id, sort_id);
  let product_results = document.getElementById('product-results');

  if (products.length <= 1) {
    product_results.innerText = `${products.length} result`;
  } else {
    product_results.innerText = `${products.length} results`;
  }

  // If User click on the image, it will jump to product-detail page
  let product_container = document.getElementById('Products-Container');
  const childrens = product_container.children;

  for (let i = 0; i < childrens.length; i++) {
    // Get product html element's infor
    let id = childrens[i].id;
    let img = childrens[i].querySelector(`#product-${id}-img`);
    let detail = childrens[i].querySelector(`#detail-${id}-btn`);
    let list_features = childrens[i].querySelector(`#list_features-${id}-img`);
    let btn = childrens[i].querySelector(`#product-${id}-btn`);
    let qty_label = childrens[i].querySelector(`#quantity-${id}`);
    let qty_container = childrens[i].querySelector(`#quantity-${id}-container`);
    let update_cart = childrens[i].querySelector(`#update-${id}`);

    img.addEventListener('click', () => {
      localStorage.setItem('get_detail', id);
      window.location.href = '/pages/product-details.php';
    });

    if (detail) {
      detail.addEventListener('click', () => {
        localStorage.setItem('get_detail', id);
        window.location.href = '/pages/product-details.php';
      });
      detail.addEventListener('mouseover', () => {
        list_features.classList.remove('d-none');
      });
      detail.addEventListener('mouseout', () => {
        list_features.classList.add('d-none');
      });
    }

    // If add to cart is clicked
    btn.addEventListener('click', async () => {
      // Add to cart button is not displaying!
      if (btn.classList.contains('d-none')) return;

      //Checking logged in
      const myToken = get_token();

      //Access to cart first
      const access_to_cart = await access_current_cart(myToken);
      //--> Failed to access
      if (!access_to_cart.status) {
        alert(access_to_cart.message);
        return;
      }

      // Add to cart
      const add_cart = await add_to_cart(myToken, id, 1); //Can adjust quantity
      //   alert(add_cart.message);
      modalMessage(add_cart.message);
      //--> Failed to add to cart
      //if(!(add_cart.status)) return;

      // Exchange btn
      //   btn.classList.add('d-none');
      //   qty_container.classList.remove('d-none');
    });

    // Update product in cart
    if (update_cart) {
      update_cart.addEventListener('click', async () => {
        // Add to cart button is not clicked
        if (qty_container.classList.contains('d-none')) return;

        let current_qty = parseInt(qty_label.value);

        //Checking logged in
        const myToken = get_token();

        //Access to cart first
        const access_to_cart = await access_current_cart(myToken);
        //--> Failed to access
        if (!access_to_cart.status) {
          alert(access_to_cart.message);
          return;
        }

        //Update user's cart
        const update_cart = await update_current_cart(myToken, id, current_qty);
        alert(update_cart.message);
        //--> Failed to update cart
        //if(!(update_cart.status)) return;

        if (current_qty === 0) {
          // Delete from cart
          const del_cart = await delete_from_cart(myToken, id);
          alert(del_cart.message);

          // Exchange btn
          qty_container.classList.add('d-none');
          btn.classList.remove('d-none');
          qty_label.value = '1';
        }
      });
    }
  }
}

function change_checked_radio(radio_id, sort_id) {
  document.getElementById(radio_id).checked = true;
  document.getElementById(sort_id).checked = true;
}

// Page loaded
document.addEventListener('DOMContentLoaded', async () => {
  let category_id;
  let sort_id;

  if (!localStorage.getItem('filter-products')) {
    category_id = '';
    sort_id = 'default';
  } else {
    category_id = JSON.parse(
      localStorage.getItem('filter-products')
    ).category_id;
    sort_id = JSON.parse(localStorage.getItem('filter-products')).sort_id;

    change_checked_radio(category_id, sort_id);
    category_id = category_id_list[category_id];
  }

  let loading = await Page_load_with_filer(category_id, sort_id);
});

const radioButtons = document.querySelectorAll(
  '#categories-dropdown input[type="radio"]'
);
const sort_by = document.querySelectorAll(
  '#sortby-dropdown input[type="radio"]'
);
document.querySelector('#filter-menu').addEventListener('click', async () => {
  let category_id;
  let sort_id;
  // Add event listeners to each radio button
  radioButtons.forEach((radioButton) => {
    const label = document.querySelector(`label[for="${radioButton.id}"]`);
    if (radioButton.checked) {
      category_id = radioButton.id;
      label.classList.add('active');
      return;
    }
    label.classList.remove('active');
  });

  sort_by.forEach((radioButton) => {
    if (radioButton.checked) {
      sort_id = radioButton.id;
      return;
    }
  });

  localStorage.setItem(
    'filter-products',
    JSON.stringify({ category_id: category_id, sort_id: sort_id })
  );

  category_id = category_id_list[category_id];
  let loading = await Page_load_with_filer(category_id, sort_id);
});

function modalMessage(message) {
  if (document.getElementById('modal')) {
    document.getElementById('modal').remove();
  }

  //   create modal
  var modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'modal';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '1';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
  modal.style.backdropFilter = 'blur(3px)';

  var closeButton = document.createElement('button');
  closeButton.className = 'close';
  closeButton.innerHTML = 'Close';

  if (message.includes('successfully')) {
    closeButton.style =
      'background-color:green; color: white; width: 100px; height: 50px; border-radius: 10px;fontsize: 20px; border: none; cursor: pointer; margin-top: 10px; align-self: center;';
  } else {
    closeButton.style =
      'background-color:red; color: white; width: 100px; height: 50px; border-radius: 10px;fontsize: 20px; border: none; cursor: pointer; margin-top: 10px; align-self: center;';
  }

  var messageBox = document.createElement('div');
  messageBox.innerHTML = message;
  messageBox.style =
    'background-color: white; padding: 20px; border-radius: 10px; font-size: 20px; border: none;';

  var Box = document.createElement('div');
  Box.style =
    'background-color: white; padding: 20px; border-radius: 10px; font-size: 20px; border: none; display: flex; flex-direction: column; justify-content: center; align-items: center;';
  Box.appendChild(messageBox);
  Box.appendChild(closeButton);

  //   document.body.appendChild(modal);
  // add modal with animation
  document.body.appendChild(modal);
  modal.animate(
    [
      // keyframes
      { opacity: '0' },
      { opacity: '1' },
    ],
    {
      // timing options
      duration: 500,
      iterations: 1,
    }
  );
  // Get the modal
  var modal = document.getElementById('modal');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  closeButton.onclick = function () {
    modal.style.display = 'none';
  };
  modal.appendChild(Box);
  //   auto close after 3s
  setTimeout(() => {
    // document.getElementById('modal').style.display = 'none';
    modal.animate(
      [
        // keyframes
        { opacity: '1' },
        { opacity: '0' },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
      }
    );
    setTimeout(() => {
      modal.style.display = 'none';
    }, 400);
  }, 3000);
}
selectElement.addEventListener('change', async (event) => {
  moneyType = event.target.value;
  localStorage.setItem('moneyType', moneyType);

  let category_id;
  let sort_id;

  if (!localStorage.getItem('filter-products')) {
    category_id = '';
    sort_id = 'default';
  } else {
    category_id = JSON.parse(
      localStorage.getItem('filter-products')
    ).category_id;
    sort_id = JSON.parse(localStorage.getItem('filter-products')).sort_id;

    change_checked_radio(category_id, sort_id);
    category_id = category_id_list[category_id];
  }

  let loading = await Page_load_with_filer(category_id, sort_id);
});
