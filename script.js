function showElement(elementNumber) {
    const elementContainer = document.getElementById('elementContainer');
    const elements = elementContainer.getElementsByClassName('toggle-element');

    // randomize elements
    const shuffledElements = Array.from(elements).sort(() => Math.random() - 0.5);

    // hiding all elements
    for (let i = 0; i < shuffledElements.length; i++) {
        shuffledElements[i].style.display = 'none';
    }

    // show selected element
    const elementToShow = shuffledElements[elementNumber - 1];
    elementToShow.style.display = 'block';

    // hide all images
    const images = document.querySelectorAll('.image-buttons img');
    images.forEach(image => image.style.display = 'none');

    // show try again button
    const refreshButton = document.getElementById('refreshButton');
    refreshButton.style.display = 'block';
}

// try again button
function refreshPage() {
    location.reload();
}
