document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('magicalForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Your magical details have been sent to the wizarding council!');
        });
    }
});