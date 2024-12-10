let iconcart = document.querySelector('.icon-cart');
let closecart = document.querySelector('.close');
let body = document.querySelector('body');
let listproduct = document.querySelector('#listproduct');
let listcart = document.querySelector('.listcart');

let cart = [];

let products = [
                                        // DEALS
    { id: '1' , name: 'DEAL 1 ', price:  450, image: 'images/deals/deal 1.webp', category: 'DEALS' ,description:'A FEAST TO SHARE!CLASSIC CHICKEN BURGER & CLUB SANDWICH WITH EER SPECIAL SAUCE.'},
    { id: 2, name: 'DEAL 2 ', price:  200, image: 'images/deals/deal 2.webp', category: 'DEALS',description:'CHICKEN SCHEZWAN AND CHICKEN CHOWMEIN WITH FRIED RICE.' ,  },
    { id: 3, name: 'DEAL 3 ', price:  500, image: 'images/deals/deal 3.webp', category: 'DEALS',description:'CRISPY CHICKEN BURGER , FRIES , SAUCE , COLESLAW , SAUCES & DRINK.' },
    { id: 4, name: 'DEAL 4 ', price: 400 , image: 'images/deals/deal 4.webp', category: 'DEALS', description:'CHICKEN SHASHLIK , CRISPY CHICKEN BURGER , FRIED RICE AND COLESLAW.' },
    { id: 5, name: 'DEAL 5 ', price: 600 , image: 'images/deals/deal 5.webp', category: 'DEALS',description:'CHICKEN SHASHLIK , FRIED RICE , CHICKEN CHOWMEIN , CLASSIC CHICKEN BURGER AND 1.5 LTR COLD DRINK.' ,  },
                                         // STARTERS
    { id: 6, name: 'CHICKEN CORN SOUP', price: 550 , image: 'images/starters/chick corn soup.jpeg', category: 'STARTERS' ,description:'Pure chicken stock with chicken chunks and bits of corn ,eggs and some vegetables.'},
    { id: 7, name: 'CHICKEN BALLS ', price: 480  , image: 'images/starters/chicken balls ginsoy.webp', category: 'STARTERS' ,description:'small chunks of fried chicken breast meat covered in a crispy batter coating served with sweet and sour sauce 😊 .'},
{ id: 8, name: 'CHICKEN CORN SOUP', price: 600, image: 'images/starters/chicken corn soup.webp', category: 'STARTERS',description:'Pure chicken stock with chicken chunks and bits of corn ,eggs and some vegetables 😷.' },
{ id: 9, name: 'HOT AND SOUR SOUP', price: 450, image: 'images/starters/hot & sour soup.webp', category: 'STARTERS',description:'Made with chicken broth, chunks of chicken and variety vegetable along with tangy taste.' },
{ id: 10, name: 'HOT AND SOUR SOUP', price:200 , image: 'images/starters/hot and sour soup.jpeg', category: 'STARTERS',description:'Made with chicken broth, chunks of chicken and variety vegetable along with tangy taste 😷.' },
{ id: 11, name: 'DYNAMITE CHICKEN', price: 500 , image: 'images/starters/dynamite chicken.jpeg', category: 'STARTERS',description:'small chunks of fried chicken breast meat covered in a crispy batter coating served with sweet and sour sauce .' },
{ id: 12, name: 'MASALA FRIES ', price:400 , image: 'images/starters/masala fries.webp', category: 'STARTERS',description:'Crisp to teeth our in house made french fries topped with chaat masala served with Ketchup.' },
{ id: 13, name: 'SAUCY WINGS', price: 600  , image: 'images/starters/saucy wings.webp', category: 'STARTERS',description:'6 Pcs of mouth watering fried wings topped with EER special mayo based dressing.' },
{ id: 14, name: 'SPICY JUICY WINGS', price: 550 , image: 'images/starters/spicy chicken wings.webp', category: 'STARTERS',description:'6 Pcs of mouth watering fried wings tossed in sweet and tangy FOODS INN sauce.' },
{ id: 15, name: 'UMBERELLA CHICKEN', price: 300 , image: 'images/starters/umbrella chicken  ginsoy.webp', category: 'STARTERS',description:'Marinated umbrella chicken cooked on chargrill served with chef’s special sauce 4 pieces.' },
                                      // BURGERS
{ id: 16, name: 'BEEF CHEESE BURGER', price:  450, image: 'images/burgers/beef cheese.webp', category: 'BURGERS',description:'Garlic Mayonnaise Sauce/ Chilli Sauce/ Ice-Berg/ Cheese Slice and ketchup.' },
{ id: 17, name: 'CLASSIC CHICKEN BURGER', price:  200, image: 'images/burgers/classic chicken burger.webp', category: 'BURGERS',description:'Grilled chicken patty/ onions/ tomatoes/ icebery lettuce and cheese served with tomato ketchup and mayonnaise.' },
{ id: 18, name: 'CRISPY CHICKEN BURGER', price:  500, image: 'images/burgers/cripsy chick.webp', category: 'BURGERS',description:'Crispy chicken thigh/ cheddar cheese/ pickles/ garlic herb mayo and lettuce.' },
{ id: 19, name: 'CRUNCHY CHICK BURGER  ', price:  400, image: 'images/burgers/crunchy chik.webp', category: 'BURGERS',description:'crunch fillet, spicy mayo/ lettuce/ sandwiched between a sesame seed bun.' },
{ id: 20, name: 'DOUBLE CHEESE BURGER', price:  600, image: 'images/burgers/double cheese.webp', category: 'BURGERS',description:'the EER Special Sauce/ Cheese Sauce/ 2 Layer Patt with extra cheese and sauce.' },
{ id: 21, name: 'BEEF MUSHROOM BURGER', price: 480, image: 'images/burgers/mushroom burger.webp', category: 'BURGERS',description:'Grilled beef petty topped with foods inn special sauce/ sauteed onions/ sauteed mushrooms and cheese. Served with fries & coleslaw 😢. ' },
{ id: 22, name: 'CHICKEN ROYAL BURGER', price:  650, image: 'images/burgers/royal burger.webp', category: 'BURGERS',description:'Crunchy chicken boneless fillet with home made sauce and cheddar cheese and onions. Served with fries & coleslaw.' },
{ id: 23, name: 'CHICKEN CROISSANT SANDWICH', price:  400, image: 'images/sandwiches/CHICKEN CROISSANT SANDWICH WITH HONEY MUSTARD.png', category: 'SANDWICHES',description:'flaky croissand with grilled chicken chedder bell poppers chpped iceberg.' },
{ id: 24, name: 'CLUB SANDWICH', price:  600, image: 'images/sandwiches/club sandwich.webp', category: 'SANDWICHES' ,description:'Breast Fillet Chicken sandwiched between bread along with cheese slice, egg and vegetables'},
{ id: 25, name: 'HUNTER BEEF SANDWICH', price:  550, image: 'images/sandwiches/fast food 3.jfif', category: 'SANDWICHES' ,description:'cheddar & mozzeralla cheese/ butter/ sauerkarut pan seared beef/ caramelized onion/ pickle/ sriracha tomato served with gravy and french fries.'},
{ id: 26, name: 'ALFREDO PASTA', price:  450, image: 'images/pasta/alfredo pasta.jpeg', category: 'PASTA',description:'Fettuccine pasta topped in creamy Alfredo sauce topped with grilled chicken breast fillet.' },
{ id: 27, name: 'PARMESAN CHICKEN PASTA', price:  200, image: 'images/pasta/parmesan chicken pasta.webp', category: 'PASTA',description:'Golden fried chicken breast in penne pasta tossed with mushroom creamy sauce & topped with parmesan cheese.' },
{ id: 28, name: 'CHICKEN PENNE PASTA', price: 500, image: 'images/pasta/penne pasta.jpeg', category: 'PASTA',description:'A perfect blend of Egg fried rice, noodles and chicken manchrian, topped with green chilli and creamy mayo 😊.' },
{ id: 29, name: 'SINGAPOREAN RICE', price: 400, image: 'images/chinese/singaporean rice.webp', category: 'CHINESE' ,description:'A perfect blend of Egg fried rice, noodles and chicken manchrian, topped with green chilli and creamy mayo.'},
{ id: 30, name: 'BEEF CHILLI DRY', price:  600, image: 'images/chinese/beef chilli dry.jpeg', category: 'CHINESE',description:'julienne cut beef along with green chilies, served dry along with stir fried vegetable rice .' },
{ id: 31, name: 'CHICKEN CHOWMEIN', price:  550, image: 'images/chinese/c.chowmein.webp', category: 'CHINESE',description:'Our hand made stir fried noodles with chunks of chicken and vegetables seasoned with soya sauce and other flavorful sauces 😊.' },
{ id: 32, name: 'CHILLI CHICKEN GRAVY', price:  250, image: 'images/chinese/chilli chicken garvy.webp', category: 'CHINESE',description:'Julienne cut chicken, onion, capsicum, green chilli tossed in a balance flavored gravy, served with stir fried rice.' },
{ id: 33, name: 'CHICKEN SCHEZWAN', price:  450, image: 'images/chinese/chicken schezwan.webp', category: 'CHINESE',description:'julienne cut chicken and vegetables tossed in a balance flavored gravy, served with stir fried rice.' },
{ id: 34, name: 'CHICKEN SHASHLIK', price:  200, image: 'images/chinese/chicken shashlik.webp', category: 'CHINESE',description:'julienne cut chicken and vegetables tossed in a balance flavored gravy, served with stir fried rice.Cubes of chicken, onion, capsicum, tomatoes topped with shashlik sauce, served dry along with stir fried rice.' },
{ id: 35, name: 'SPEGATTI', price:  500, image: 'images/chinese/chines.jfif', category: 'CHINESE',description:'Our hand made stir fried noodles with variety of vegetables seasoned with soya sauce and other flavorful sauces 😠.' },
{ id: 36, name: 'CHEESE SLICE', price:  300, image: 'images/extras/cheese slice.jpeg', category: 'EXTRAS',description:'An individually wrapped slice of American processed cheese.' },
{ id: 37, name: 'COLESLAW', price: 100, image: 'images/extras/coleslaw.jpeg', category: 'EXTRAS',description:'A mix of fresh shredded cabbage and carrot with mayonnaise.' },
{ id: 38, name: 'MAYO GARLIC SAUCE', price:  100, image: 'images/extras/garlic sauce.jpeg', category: 'EXTRAS',description:'crushed or minced garlic to strained yogurt, mayonnaise or sour cream. Lemon juice, salt, pepper and herbs.' },
{ id: 39, name: 'RAITA', price: 200, image: 'images/extras/raita.webp', category: 'EXTRAS',description:'Fresh curd with hint of spices with some salt along with mint .' },
{ id: 40, name: 'VEGETABLE SALAD', price: 250, image: 'images/extras/salad.jpg', category: 'EXTRAS',description:'Sliced Fresh Vegetables along with some salt and lemon on it .' },
{ id: 41, name: 'PEANUT BUTTER SHAKE', price:  550, image: 'images/shakes/chocolate peanut butter shake.jpg', category: 'SHAKES',description:'Mixture of ice cream and milkshake.Its creamy, its delicious, its healthy and its the perfect way to shake up your summer! 😢.' },
{ id: 42, name: 'COOKIES AND CREAM SHAKE', price:  350, image: 'images/shakes/cookies and cream shake.webp', category: 'SHAKES',description:'The blended mix of milk, ice cream, and chunks of cookies is a delicious frozen treat.' },
{ id: 43, name: 'OREO SHAKE', price:  500, image: 'images/shakes/oreo shake.jpeg', category: 'SHAKES',description:'A perfect blend milkshake made with vanilla ice cream, milk, and Oreo cookies! This sweet treat is a hit with the whole family on a hot day! 😊.' },
{ id: 44, name: 'STRAWBERRY SHAKE', price:  450, image: 'images/shakes/starwaberry shake.jpeg', category: 'SHAKES',description:'strawberries, milk, ice cream and flavoring ingredients like strawberry syrup topped with whipped cream, strawberry syrup 😢.' },
{ id: 45, name: 'CAN DRINK', price: 200, image: 'images/soft frinks/250ml tin.webp', category: 'DRINKS',description:'Pepsi , marinda , 7up , pakola , fanta , sprite and many more drinks available.' },
{ id: 46, name: 'MINERAL WATER (SMALL & LARGE)', price:  200, image: 'images/soft frinks/1500ml mineral.jpeg', category: 'DRINKS',description:'500ML & 1500ML Mineral water bottle (small & large) available.' },
{ id: 47, name: '1.5 LITR DRINK', price:  300, image: 'images/soft frinks/drink.jpeg', category: 'DRINKS',description:'Pepsi , marinda , 7up , pakola , fanta , sprite and many more drinks available.' },
{ id: 48, name: 'ABC JUICE', price:400, image: 'images/juices/ABC juice.png', category: 'JUICES',description:'Mixture of Apple , Beetroot and carrot.Rich in phytonutrients , minerals and powerful antrioxidants.' },
{ id: 49, name: 'APPLE CARROT JUICE', price:  700, image: 'images/juices/apple carrot juice.jpg', category: 'JUICES',description:'A mixture of some Apple , carrot , celery and a piece of fresh ginger.' },
{ id: 50, name: 'APPLE JUICE', price:  600, image: 'images/juices/apple juice.png', category: 'JUICES', description:' Delectably fruity with a perfect balance of sweet and tart flavors.'},
{ id: 51, name: 'ORANGE JUICE', price:  300, image: 'images/juices/orange juice.jpeg', category: 'JUICES',description:'orange juice is packed with healthy vitamins, and is wonderful alone or as a part of juice blend!' },
{ id: 52, name: 'LEMON ICED TEA', price:  650, image: 'images/cocktails/lemon iced tea.png', category: 'COCKTAILS',description:'Refreshing and fruity iced tea is the perfect drink for summer.' },
{ id: 53, name: 'MINT LEAMONADE', price:  300, image: 'images/cocktails/mint lemonade.webp', category: 'COCKTAILS',description:'A perfect delight of refreshing mint leaves , lemon and sugar.' },
{ id: 54, name: 'PEACH ICED TEA', price:  650, image: 'images/cocktails/peach iced tea.png', category: 'COCKTAILS',description:'Refreshing and fruity iced tea is the perfect drink for summer.' },
{ id: 55, name: 'PINACOLADA', price:  600, image: 'images/cocktails/pina colada.png', category: 'COCKTAILS' ,description:'A tropical blend of rich coconut cream, white rum and tangy pineapple.'},
{ id: 56, name: 'BROWNIE', price: 250, image: 'images/cake and brownie/brownie slice.jpeg', category: 'CAKES & BROWNIES',description:'Mixture of Sugar, Enriched Flour , Cocoa Processed with Alkali, Palm Oil, Corn Syrup.' },
{ id: 57, name: 'CHEESE CAKE SLICE', price:  500, image: 'images/cake and brownie/cheese cake.jpeg', category: 'CAKES & BROWNIES',description:'cheesecake is creamy, rich, and smooth made with a soft fresh cheese , eggs, and sugar 🎂.'},
{ id: 58, name: 'CHOCOLATE CAKE', price:  300, image: 'images/cake and brownie/chocolate cake.jpeg', category: 'CAKES & BROWNIES',description:'Mixture of flour, sugar, eggs, a liquid, such as baking soda or baking powder 😊 🎂.'},
{ id: 59, name: 'CHOCOLATE MOUSSE', price: 550, image: 'images/cake and brownie/chocolate mouse.jpg', category: 'CAKES & BROWNIES',description:'Chocolate Mousse is one of the most rich and decadent dessert folded into a mixture of melted chocolate , egg yolks and sugar 😊.' },
{ id: 60, name: 'RED VELVET CAKE SLICE', price:  480, image: 'images/cake and brownie/red velvet cake.jpeg', category: 'CAKES & BROWNIES' ,description:'Red Velvet Cake topped with cream cheese frosting and some sprinkles on it 🎂.'},
{ id: 61, name: 'FUDGE BROWNIE WITH ICE CREAM', price:  600, image: 'images/cake and brownie/sizzling.webp', category: 'CAKES & BROWNIES',description:'Gooey chocolate brownies with flavor of nutella in it topped with vanilla Ice Cream 😠.' },
{ id: 62, name: 'THREE MILK CAKE SLICE', price:  550, image: 'images/cake and brownie/three milk cake.jpeg', category: 'CAKES & BROWNIES',description:'Three Milk Cake Slice topped with sauce topped with whipped cream frosting 😠 🎂.' },
{ id: 63, name: 'CHOCOLATE ICE CREAM', price:  400, image: 'images/ice cream/chcolate ice cream.jpg', category: 'ICE CREAM' ,description:'Refreshing for summer mixture of dark chocolate , eggs and cream .'},
{ id: 64, name: 'FALOODA', price: 600, image: 'images/ice cream/falooda.jpeg', category: 'ICE CREAM',description:'The Famous crunch and chocolatey fslavor of Oreo cookies with the rich and creamy sweetness of vanilla ice cream bae. This Oreo cookie ice cream will undoubtedly satisfy your sweet tooth 😢.' },
{ id: 65, name: 'MANGO ICE CREAM', price:  400, image: 'images/ice cream/mango ice cream.jpg', category: 'ICE CREAM' ,description:'It is a custard based ice cream which is churned to get an airy and light texture.'},
{ id: 67, name: 'OREO ICE CREAM', price:  480, image: 'images/ice cream/oreo ice cream.jpg', category: 'ICE CREAM' ,description:'The Famous crunch and chocolatey flavor of Oreo cookies with the rich and creamy sweetness of vanilla ice cream base. This Oreo cookie ice cream will undoubtedly satisfy your sweet tooth 😠.'},
{ id: 68, name: 'STRAWBERRY ICE CREAM', price:  200, image: 'images/ice cream/strawberry ice cream.jpg', category: 'ICE CREAM',description:'strawberry Ice Cream is the best for summer treat! Its rich, creamy, and has a delicious strawberry flavor 😊.' },
{ id: 69, name: 'SUNDAE', price:  600, image: 'images/ice cream/sundae.jpg', category: 'ICE CREAM',description:'A frozen dessert that typically consists of one or more scoops of ice cream topped with sauce or syrup 😊.' },

   
    // Add more products as needed
];

// Function to initialize the app
// Initialize the app
function initApp() {
    const listproduct = document.getElementById('listproduct');
    let currentCategory = '';

    products.forEach(product => {
        if (product.category !== currentCategory) {
            currentCategory = product.category;

            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('category-container');

            const categoryHeading = document.createElement('h2');
            categoryHeading.classList.add('category-heading');
            categoryHeading.textContent = currentCategory;
            categoryContainer.appendChild(categoryHeading);

            const productList = document.createElement('div');
            productList.classList.add('product-list');

            products
                .filter(p => p.category === currentCategory)
                .forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');
                    productDiv.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" />
                        <div class="title">${product.name}</div>
                        <div class="price">Rs ${product.price.toLocaleString()}</div>
                        <p class="description">${product.description}</p>
                        <button onclick="addToCart(${product.id})">+</button>
                    `;
                    productList.appendChild(productDiv);
                });

            categoryContainer.appendChild(productList);
            listproduct.appendChild(categoryContainer);
        }
    });
}

// Add product to cart
function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    if (!product) {
        console.error(`Product with ID ${productId} not found`);
        return;
    }
    
    let cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartIcon();
    renderCartItems();
}

// Update cart total price
function updatetotal() {
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    document.querySelector('.total-price').textContent = 'Rs ' + total.toLocaleString();
}

// Update cart icon
function updateCartIcon() {
    let cartIcon = document.querySelector('.icon-cart span');
    cartIcon.textContent = cart.length;
}

// Render cart items
function renderCartItems() {
    listcart.innerHTML = '';

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('item');
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="title">${item.name}</div>
            <div class="quantity">
                <span onclick="changeQuantity(${item.id}, -1)">&#8722;</span>
                <span>${item.quantity}</span>
                <span onclick="changeQuantity(${item.id}, 1)">&#43;</span>
            </div>
            <div class="price">RS ${(item.price * item.quantity).toLocaleString()}</div>
        `;
        listcart.appendChild(cartItemDiv);
    });

    updatetotal(); // Ensure total is updated after rendering cart items
}

// Change quantity of cart item
function changeQuantity(productId, change) {
    let cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCartIcon();
        renderCartItems();
        updatetotal(); // Update total whenever quantity changes
    }
}

// Toggle cart visibility
iconcart.addEventListener('click', () => {
    body.classList.toggle('showcart');
});

// Close cart visibility
closecart.addEventListener('click', () => {
    body.classList.toggle('showcart');
});

// Initialize the app
initApp();

// Show emoji suggestions
function showEmojiSuggestions() {
    document.getElementById('emoji-suggestions').style.display = 'block';
}

// Hide emoji suggestions
function hideEmojiSuggestions() {
    setTimeout(() => {
        document.getElementById('emoji-suggestions').style.display = 'none';
    }, 200);
}

// Add emoji to search bar
function addEmoji(emoji) {
    let searchBar = document.getElementById('search-bar');
    searchBar.value += emoji;
    searchBar.focus();
    search(); // Trigger search after adding emoji
}
// Debounce function to limit how often the search function is called
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Perform search and update the product list
function search() {
    let filter = document.getElementById('search-bar').value.toUpperCase();
    let categories = Array.from(document.querySelectorAll('#listproduct .category-container'));
    let listproduct = document.getElementById('listproduct');
    listproduct.innerHTML = ''; // Clear the existing product list
    let foundAny = false;

    // Hide emoji suggestions when searching
    hideEmojiSuggestions();

    categories.forEach(category => {
        let productList = category.querySelector('.product-list');
        let categoryHeading = category.querySelector('.category-heading');
        let matchingItems = [];

        if (!productList || !categoryHeading) {
            console.warn('Category missing product list or heading.');
            return;
        }

        Array.from(productList.children).forEach(item => {
            let titleElement = item.querySelector( '.title' );
            let titleElement1 = item.querySelector(  '.description');
            let value = titleElement ? (titleElement.innerHTML || titleElement.innerText || titleElement.textContent) : '';
            let  value1 = titleElement1 ? (titleElement1.innerHTML || titleElement1.innerText || titleElement1.textContent) : '';

            if (value.toUpperCase().indexOf(filter) > -1) {
                matchingItems.push(item);
                foundAny = true;
            }

            if (value1.toUpperCase().indexOf(filter) > -1) {
                matchingItems.push(item);
                foundAny = true;
            }
        });

        if (matchingItems.length > 0) {
            let newCategoryContainer = document.createElement('div');
            newCategoryContainer.classList.add('category-container');

            let newCategoryHeading = document.createElement('h2');
            newCategoryHeading.classList.add('category-heading');
            newCategoryHeading.textContent = categoryHeading.textContent;
            newCategoryContainer.appendChild(newCategoryHeading);

            let newProductList = document.createElement('div');
            newProductList.classList.add('product-list');

            matchingItems.forEach(item => {
                newProductList.appendChild(item);
            });

            newCategoryContainer.appendChild(newProductList);
            listproduct.appendChild(newCategoryContainer);
        }
    });

    if (!foundAny && filter.length > 0) {
        listproduct.innerHTML = '<p>No results found</p>';
    }
}
// Attach debounced search function to input event
const debouncedSearch = debounce(search, 300); // Adjust delay as needed
document.getElementById('search-bar').addEventListener('input', debouncedSearch);







        //  AUDIO JAVASCRIPT

        // main.js
class VoiceRecorder {
    constructor() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log("getUserMedia supported");
      } else {
        console.log("getUserMedia not supported");
      }
  
      this.mediaRecorder = null;
      this.stream = null;
      this.chunks = [];
      this.isRecording = false;
      this.recorderRef = document.querySelector("#recorder");
      this.playerRef = document.querySelector("#player");
      this.startRef = document.querySelector("#start");
      this.stopRef = document.querySelector("#stop");
  
      this.startRef.onclick = this.startRecording.bind(this);
      this.stopRef.onclick = this.stopRecording.bind(this);
  
      this.constraints = {
        audio: true,
        video: false,
      };
    }
  
    // Handle success
    handleSuccess(stream) {
      this.stream = stream;
      this.recorderRef.srcObject = this.stream;
      this.mediaRecorder = new MediaRecorder(this.stream);
  
      this.mediaRecorder.ondataavailable = this.onMediaRecorderDataAvailable.bind(this);
      this.mediaRecorder.onstop = this.onMediaRecorderStop.bind(this);
  
      this.recorderRef.play();
      this.mediaRecorder.start();
    }
  
    onMediaRecorderDataAvailable(e) {
      this.chunks.push(e.data);
    }
  
    onMediaRecorderStop() {
      const blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
      const audioURL = window.URL.createObjectURL(blob);
      this.playerRef.src = audioURL;
      this.chunks = [];
      this.stream = null;
    }
  
    // Start recording
    startRecording() {
      if (this.isRecording) return;
  
      this.isRecording = true;
      this.startRef.innerHTML = "Recording...";
      this.playerRef.src = '';
  
      navigator.mediaDevices.getUserMedia(this.constraints)
        .then(this.handleSuccess.bind(this))
        .catch(this.handleError.bind(this));
    }
  
    // Stop recording
    stopRecording() {
      if (!this.isRecording) return;
  
      this.isRecording = false;
      this.startRef.innerHTML = "Record";
      this.recorderRef.pause();
      this.mediaRecorder.stop();
    }
  
    // Handle errors
    handleError(error) {
      console.error('Error accessing media devices.', error);
    }
  }
  
  window.VoiceRecorder = new VoiceRecorder();




 