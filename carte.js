// Données des produits
const products = [
    {
        id: 1,
        title: "Porte-clés Bluetooth",
        image: "img/Bluetooth_Porte-clé.png",
        price: "3000 DA",
        description: "Ce porte-clés Bluetooth vous permet de localiser vos objets perdus via une application mobile. Portée de 50m, batterie longue durée.",
        advantages: [
            "Portée de 50 mètres",
            "Batterie rechargeable longue durée",
            "Compatibilité iOS et Android",
            "Design compact et léger"
        ]
    },
    {
        id: 2,
        title: "Tracker GPS Pour Voiture",
        image:"img/GPS_voiture-removebg-preview.png",
        price: "23 000 DA",
        description: "Tracker GPS haute précision avec suivi en temps réel via application dédiée. Idéal pour véhicules et objets de valeur.",
        advantages: [
            "Suivi en temps réel",
            "Geofonctionnalités",
            "Batterie longue durée (7 jours)",
            "Résistant à l'eau"
        ]
    },
    {
        id: 3,
        title: "Étiquettes RFID",
        image: "img/RFID_Etiquette-removebg-preview.png",
        price: "1500 DA",
        description: "Petite étiquette autocollante haute fréquence (HF) à fixer sur des objets comme les clés, bijoux ou sacs.",
        advantages: [
            "Très discrète",
            "Résistante",
            "Ne nécessite aucune batterie",
            "Facile à coller"
        ]
    },
    {
        id: 4,
        title: "Étiquette Label (avec QR code)",
        image: "img/RFID_Label-removebg-preview.png",
        price: "1000 DA",
        description: "Étiquette simple et économique à coller sur des objets du quotidien (gourdes, clés, stylos, etc.).",
        advantages: [
            "Alternative ultra-abordable",
            "Durable",
            "Sans alimentation nécessaire",
            "Personnalisable"
        ]
    },
    {
        id: 5,
        title: "Carte RFID",
        image: "img/RFID_carte-removebg-preview.png",
        price: "2000 DA",
        description: "Carte fine à glisser dans un portefeuille, sac ou badge professionnel.",
        advantages: [
            "Élégante et discrète",
            "Pratique pour un usage quotidien",
            "Format carte de crédit",
            "Compatibilité universelle"
        ]
    },
    {
        id: 6,
        title: "Bracelet RFID",
        image: "img/RFID_Bracelet-removebg-preview.png",
        price: "3500 DA",
        description: "Bracelet connecté destiné aux enfants, festivals, hôtels ou événements avec contrôle d'accès.",
        advantages: [
            "Confortable à porter",
            "Étanche",
            "Idéal pour environnements dynamiques",
            "Design personnalisable"
        ]
    },
    {
        id: 7,
        title: "Tracker GPS animaux",
        image: "img/GPS_animaux-removebg-preview.png",
        price: "19 000 DA",
        description: "Collier GPS léger conçu pour chiens ou chats, confortable et sécurisé. ",
        advantages: [
            "Confortable à porter ",
            "Étanche",
            " léger",
            " parfait pour les animaux domestiques ou en liberté."
        ]
    },
    {
        id: 8,
        title: "Tracker GPS Pour Valise",
        image: "img/GPS_valise-removebg-preview.png",
        price: "18 500 DA",
        description: " Dispositif discret et compact, conçu pour être inséré dans une valise ou un sac.  ",
        advantages: [
            "Couverture mondiale ",
            " léger",
            " autonomie prolongée (jusqu’à 6 mois)."
        ]
    },
    {
        id: 9,
        title: "Bracelet Bluetooth",
        image: "img/Bluetooth_Bracelet-removebg-preview.png",
        price: "9 500 DA",
        description: "Bracelet connecté pour les enfants ou les animaux domestiques.  ",
        advantages: [
            "Confortable à porter ",
            "Étanche",
            "léger",
            "résistant à l’eau."
        ]
    }
];
// Données des packs avec les IDs des produits inclus
const packs = [
    {
        id: 101,
        title: "Pack Starter",
        image: "img/Pack_Starter-removebg-preview.png",
        price: "6500 DA",
        description: "Le pack idéal pour commencer à protéger vos objets essentiels avec une combinaison d'étiquettes Bluetooth et RFID.",
        content: [
            "1 porte-clés Bluetooth (localisation de clés, sac, etc.)",
            "2 étiquettes RFID (petits objets comme stylos, chargeurs…)",
            "2 étiquettes avec QR code (objets personnels, gourdes, trousses…)",
            "Assurance ObjetSûr incluse",
            "✅ Solution simple, économique et pratique pour ne plus rien perdre."
        ],
        products: [1, 4, 3] // IDs des produits inclus
    },
    {
        id: 102,
        title: "Pack Mobilité",
        image: "img/Pack_Mobilité-removebg-preview.png",
        price: "26 000 DA",
        description: "déal pour voyageurs, familles avec animaux ou travailleurs mobiles ",
        content: [
            "1 tracker GPS pour valise ou sac",
            "1 tracker GPS pour animal (chien ou chat)",
            "Abonnement Standard 1 mois offert",
            "Abonnement Standard 1 mois offert",
            "Assurance ObjetSûr incluse",
            "✅ Sécurité, confort et localisation en temps réel, partout dans le monde."
        ],
        products: [2, 4] // IDs des produits inclus
    },
    {
        id: 103,
        title: "Pack Pro",
        image: "img/Pack_Pro-removebg-preview.png",
        price: "38 000 DA",
        description: "La solution ultime pour une protection totale de tous vos objets importants avec assurance incluse.",
        content: [
            "10 cartes RFID (gestion des accès ou pointage du personnel",
            "5 bracelets RFID (accès visiteurs, clients ou staff temporaire)",
            " 20 étiquettes RFID autocollantes ",
            "Abonnement Premium 3 mois offert",
            "Assurance ObjetSûr incluse"
        ],
        products: [2, 4, 3, 5] // IDs des produits inclus
    }
];
// Fonction de recherche
function performSearch(query) {
    query = query.toLowerCase().trim();
    
    if (query === '') {
        return []; // Retourne un tableau vide si la recherche est vide
    }
    
    // Recherche dans les produits
    const productResults = products.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );
    
    // Recherche dans les packs
    const packResults = packs.filter(pack => 
        pack.title.toLowerCase().includes(query) || 
        pack.description.toLowerCase().includes(query)
    );
    
    return {
        products: productResults,
        packs: packResults
    };
}

// Fonction pour afficher les résultats
function displaySearchResults(results) {
    // Créez une div pour afficher les résultats
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'searchResults';
    resultsContainer.style.position = 'absolute';
    resultsContainer.style.backgroundColor = 'white';
    resultsContainer.style.width = '100%';
    resultsContainer.style.maxHeight = '400px';
    resultsContainer.style.overflowY = 'auto';
    resultsContainer.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    resultsContainer.style.zIndex = '1000';
    
    // Ajoutez les résultats des produits
    if (results.products.length > 0) {
        const productsHeader = document.createElement('h4');
        productsHeader.textContent = 'Produits';
        productsHeader.style.padding = '10px';
        productsHeader.style.margin = '0';
        productsHeader.style.borderBottom = '1px solid #eee';
        resultsContainer.appendChild(productsHeader);
        
        results.products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.style.padding = '10px';
            productElement.style.borderBottom = '1px solid #eee';
            productElement.style.cursor = 'pointer';
            productElement.style.display = 'flex';
            productElement.style.alignItems = 'center';
            
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}" style="width:50px;height:50px;object-fit:contain;margin-right:10px;">
                <div>
                    <h5 style="margin:0;">${product.title}</h5>
                    <p style="margin:0;color:#666;">${product.price}</p>
                </div>
            `;
            
            productElement.addEventListener('click', () => {
                window.location.href = `produit.html#produit-${product.id}`;
            });
            
            resultsContainer.appendChild(productElement);
        });
    }
    
    // Ajoutez les résultats des packs
    if (results.packs.length > 0) {
        const packsHeader = document.createElement('h4');
        packsHeader.textContent = 'Packs';
        packsHeader.style.padding = '10px';
        packsHeader.style.margin = '0';
        packsHeader.style.borderBottom = '1px solid #eee';
        resultsContainer.appendChild(packsHeader);
        
        results.packs.forEach(pack => {
            const packElement = document.createElement('div');
            packElement.style.padding = '10px';
            packElement.style.borderBottom = '1px solid #eee';
            packElement.style.cursor = 'pointer';
            packElement.style.display = 'flex';
            packElement.style.alignItems = 'center';
            
            packElement.innerHTML = `
                <img src="${pack.image}" alt="${pack.title}" style="width:50px;height:50px;object-fit:contain;margin-right:10px;">
                <div>
                    <h5 style="margin:0;">${pack.title}</h5>
                    <p style="margin:0;color:#666;">${pack.price}</p>
                </div>
            `;
            
            packElement.addEventListener('click', () => {
                // Afficher le modal du pack
                document.getElementById('modalPackImage').src = pack.image;
                document.getElementById('modalPackTitle').textContent = pack.title;
                document.getElementById('modalPackPrice').textContent = pack.price;
                document.getElementById('modalPackDescription').textContent = pack.description;
                
                const contentList = document.getElementById('modalPackContent');
                contentList.innerHTML = '';
                pack.content.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    contentList.appendChild(li);
                });
                
                document.getElementById('packModal').style.display = 'block';
                
                // Supprimez les résultats de recherche
                const existingResults = document.getElementById('searchResults');
                if (existingResults) {
                    existingResults.remove();
                }
                
                // Réinitialisez la recherche
                document.getElementById('searchInput').value = '';
            });
            
            resultsContainer.appendChild(packElement);
        });
    }
    
    // Si aucun résultat
    if (results.products.length === 0 && results.packs.length === 0) {
        const noResults = document.createElement('div');
        noResults.style.padding = '10px';
        noResults.textContent = 'Aucun résultat trouvé';
        resultsContainer.appendChild(noResults);
    }
    
    return resultsContainer;
}

// Gestionnaire d'événements pour la recherche
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchZone = document.querySelector('.searchZone');
    
    if (searchForm && searchInput && searchZone) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value;
            if (query.trim() !== '') {
                const results = performSearch(query);
                const resultsContainer = displaySearchResults(results);
                
                // Supprimez les anciens résultats s'ils existent
                const existingResults = document.getElementById('searchResults');
                if (existingResults) {
                    existingResults.remove();
                }
                
                // Ajoutez les nouveaux résultats
                searchZone.appendChild(resultsContainer);
            }
        });
        
        searchInput.addEventListener('input', function() {
            const query = this.value;
            if (query.trim() === '') {
                const existingResults = document.getElementById('searchResults');
                if (existingResults) {
                    existingResults.remove();
                }
                return;
            }
            
            const results = performSearch(query);
            const resultsContainer = displaySearchResults(results);
            
            // Supprimez les anciens résultats s'ils existent
            const existingResults = document.getElementById('searchResults');
            if (existingResults) {
                existingResults.remove();
            }
            
            // Ajoutez les nouveaux résultats
            searchZone.appendChild(resultsContainer);
        });
        
        // Fermez les résultats quand on clique ailleurs
        document.addEventListener('click', function(e) {
            if (!searchZone.contains(e.target)) {
                const existingResults = document.getElementById('searchResults');
                if (existingResults) {
                    existingResults.remove();
                }
            }
        });
    }
});

// Panier
let cart = [];

// Initialisation du panier
function initCart() {
    loadCartFromStorage();
    setupCartEventListeners();
}

// Sauvegarder le panier dans le localStorage
function saveCartToStorage() {
    localStorage.setItem('findme_cart', JSON.stringify(cart));
}

// Charger le panier depuis le localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('findme_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Mettre à jour l'affichage du panier
function updateCartUI() {
    const cartContent = document.querySelector('.cart-content');
    const cartTotal = document.querySelector('.cart-total');
    
    if (!cartContent || !cartTotal) return;
    
    cartContent.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        const price = parseInt(item.price.replace(/\D/g, ''));
        total += price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>${item.price} x ${item.quantity}</p>
            </div>
            <button class="remove-item" data-id="${item.id}">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        
        cartContent.appendChild(cartItem);
    });
    
    cartTotal.textContent = `${total} DA`;
    
    // Ajouter les écouteurs d'événements pour les boutons de suppression
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

// Ajouter un produit au panier
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartUI();
}

// Supprimer un produit du panier
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCartToStorage();
    updateCartUI();
}

// Configurer les écouteurs d'événements du panier
function setupCartEventListeners() {
    // Ouvrir/fermer le panier
    document.querySelector('.shopping_btn')?.addEventListener('click', () => {
        document.querySelector('.cart-overlay').classList.add('show');
        document.querySelector('.cart').classList.add('show');
    });
    
    document.querySelector('.close-cart')?.addEventListener('click', () => {
        document.querySelector('.cart-overlay').classList.remove('show');
        document.querySelector('.cart').classList.remove('show');
    });
    
    // Vider le panier
    document.querySelector('.clear-cart')?.addEventListener('click', () => {
        cart = [];
        saveCartToStorage();
        updateCartUI();
    });
    
    // Commander
    document.querySelector('.checkout')?.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Votre panier est vide!');
        } else {
            alert('Commande passée avec succès!');
            cart = [];
            saveCartToStorage();
            updateCartUI();
            document.querySelector('.cart-overlay').classList.remove('show');
            document.querySelector('.cart').classList.remove('show');
        }
    });
}

// Initialiser le panier au chargement
document.addEventListener('DOMContentLoaded', initCart);