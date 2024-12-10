
function show_emoji() {
    var emojiPicker = document.querySelector('.emoji');
    emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
}

function emoji(id) {
    var emoji = document.getElementById(id).innerText;
    var inputField = document.getElementById('input-field');
    inputField.value += emoji;
    show_emoji(); // Hide the emoji picker after selecting
}

// Optional: Hide emoji picker when clicking outside
document.addEventListener('click', function(event) {
    var emojiPicker = document.querySelector('.emoji');
    var searchBar = document.querySelector('.search-bar');
    
    if (!searchBar.contains(event.target)) {
        emojiPicker.style.display = 'none';
    }
});

