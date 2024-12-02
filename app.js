const imageInput = document.getElementById('imageInput');
const imageContainer = document.getElementById('imageContainer');
const themeToggle = document.getElementById('themeToggle');

// Handle image uploads
imageInput.addEventListener('change', (event) => {
    const files = event.target.files; // Get the list of files
    imageContainer.innerHTML = ''; // Clear previous images
    for (let i = 0; i < files.length; i++) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(files[i]); // Create a URL for each file
        img.classList.add('uploaded-image'); // Add class for styling
        imageContainer.appendChild(img); // Append the image to the container
    }
});

// Toggle theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark'); // Toggle the dark class on the body
});
