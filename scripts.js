document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        
        // Get the image URLs and description texts as arrays
        const imageUrls = JSON.parse(this.getAttribute('data-images'));
        const descriptionTexts = JSON.parse(this.getAttribute('data-descriptions'));
        
        const projectImageContainer = document.getElementById('projectImageContainer'); // A container for multiple images
        const projectDescriptionContainer = document.getElementById('projectDescriptionContainer'); // A container for multiple descriptions
        
        // Clear previous content
        projectImageContainer.innerHTML = '';
        projectDescriptionContainer.innerHTML = '';

        // Loop through images and descriptions to create elements
        imageUrls.forEach((imageUrl, index) => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.style.display = 'block'; // Make the image visible
            projectImageContainer.appendChild(img); // Append to the container
            
            const description = document.createElement('p');
            description.textContent = descriptionTexts[index];
            projectDescriptionContainer.appendChild(description); // Append to the container
        });

        // Make the containers visible
        projectImageContainer.style.display = 'block'; 
        projectDescriptionContainer.style.display = 'block'; 
    });
});

