const emailText = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const threePoints = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const menuMyOrder = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

emailText.addEventListener('click', toggleDesktopMenu);
threePoints.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', togglemenyMyOrder);


function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  menuMyOrder.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  menuMyOrder.classList.add('inactive');
}

function togglemenyMyOrder() {
  menuMyOrder.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  imgSrc: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
  name: 'Car',
  price: 5000,
  imgSrc: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
  name: 'Plane',
  price: 300,
  imgSrc: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});


function renderProducts(list) {
  for (product of list) {
    const divProductCard = document.createElement('div');
    divProductCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.imgSrc);

    const divProductInfo = document.createElement('div');
    divProductInfo.classList.add('product-info');

    const soloDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    const productName = document.createElement('p');

    productPrice.innerText = '$' + product.price;
    productName.innerText = product.name;

    const productFigure = document.createElement('figure');
    const imgAddToCar = document.createElement('img');
    imgAddToCar.setAttribute('src', './icons/bt_add_to_cart.svg');
    imgAddToCar.setAttribute('alt', '');

    /*Usando append */

    productFigure.append(imgAddToCar);
    soloDiv.append(productPrice, productName);
    divProductInfo.append(soloDiv, productFigure);
    divProductCard.append(img, divProductInfo);
    cardsContainer.append(divProductCard);
  }
}

renderProducts(productList);
