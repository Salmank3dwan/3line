// Placeholder JS
function searchMenu() {
    const input = document.getElementById("menuSearch").value.toLowerCase();
    const items = document.querySelectorAll(".menu-item");
    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}

document.querySelectorAll(".lightbox-img").forEach(img => {
    img.addEventListener("click", () => {
        document.getElementById("lightbox-img").src = img.src;
        document.getElementById("lightbox").style.display = "flex";
    });
});

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

let cartItems = [];

function addToCart(itemName) {
    const item = { name: itemName };
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert(itemName + " added to cart!");
}

window.onload = function() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) cartItems = JSON.parse(savedCart);
}

function toggleDetail(id) {
    const section = document.getElementById(id + '-detail');
    section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

function showDetails(id) {
    document.querySelectorAll('.detail-section').forEach(el => el.style.display = 'none');
    document.getElementById(id + '-details').style.display = 'block';
}

function closeDetails(id) {
    document.getElementById(id + '-details').style.display = 'none';
}
