// Array of tutorials
const tutorials = [
    {
        id: 1,
        title: 'Introduction to Therapeutic Plants',
        description: 'Learn about the basics of therapeutic plants and their benefits.',
        content: '
            <h3>Introduction to Therapeutic Plants</h3>
            <p>            Therapeutic plants have been used for centuries to treat various ailments and improve overall health...</p>
        '
    },
    {
        id: 2,
        title: 'How to Grow Aloe Vera',
        description: 'A step-by-step guide on how to grow and care for Aloe Vera.',
        content: '
            <h3>How to Grow Aloe Vera</h3>
            <p>Aloe Vera is a popular therapeutic plant known for its healing properties...</p>
        '
    },
    {
        id: 3,
        title: 'Benefits of Lavender',
        description: 'Discover the calming and therapeutic benefits of lavender.',
        content: '
            <h3>Benefits of Lavender</h3>
            <p>Lavender is widely recognized for its calming and soothing effects...</p>
        '
    }
];

// Function to load tutorial titles
function loadTutorialTitles() {
    const tutorialList = document.getElementById('tutorial-list');
    tutorials.forEach(tutorial => {
        const tutorialItem = document.createElement('div');
        tutorialItem.classList.add('tutorial-item');
        tutorialItem.innerHTML = '
            <h3 class="tutorial-title" data-id="${tutorial.id}">${tutorial.title}</h3>
            <p>${tutorial.description}</p>
        ';
        tutorialList.appendChild(tutorialItem);
    });

    // Add event listeners to tutorial titles
    const tutorialTitles = document.querySelectorAll('.tutorial-title');
    tutorialTitles.forEach(title => {
        title.addEventListener('click', loadTutorialContent);
    });
}

// Function to load tutorial content
function loadTutorialContent(event) {
    const tutorialId = event.target.getAttribute('data-id');
    const tutorial = tutorials.find(t => t.id == tutorialId);
    const tutorialContent = document.getElementById('tutorial-content');
    tutorialContent.innerHTML = tutorial.content;
}

// Load tutorial titles on page load
document.addEventListener('DOMContentLoaded', loadTutorialTitles);

