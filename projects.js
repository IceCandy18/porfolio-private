const projects = [
  {
    title: 'PDF Query Bot',
    languages: ['Python','html','css'],
    imageUrl: './assets/Chatbot.jpg',
    desc: "LLama based chatbot",
    body: "a chatbot based on the Retrieval Augmented Generation(RAG) framework that allows the user to generate context aware answers using their own data.",
    id: 1,
    seeSourceUrl: 'https://github.com/IceCandy18/querybot',
  },
  {
    title: 'Heathcount',
    languages: ['html', 'css', 'javascript'],
    imageUrl: './assets/Calorie-tracking-app.jpg',
    desc: "Diet and Fitness Management Application",
    body: "easily keep a tab of all the food items you consume on a daily basis. Get a detailed breakdown of the macronutrients that will help you acheive your fitness goals.",
    id: 2,
    seeSourceUrl: 'https://github.com/Dhanesh-Sawant/Healthify',
  },
  {
    title: 'SpaceX Data Analysis',
    languages: ['python', 'sql', 'dash'],
    imageUrl: './assets/spacex.jpeg',
    desc: "part of IBM Data Science Course",
    body: "Under this module of the IBM course, I had to collect data regarding rocket launches performed by spaceX and derive insights from the collected and cleaned data.",
    id: 3,
    seeSourceUrl: 'https://github.com/IceCandy18/21BBS0150_ML',
  },
];

const cardsSection = document.getElementById('cardsSection');

function generateHTML(details) {
  const template = `
    <div class="work-card" title="Project: Professional Art Printing Data">
        <div class="card-content">
            <h4>${details.title}</h4>
            <p>${details.desc}</p>
            <ul>
                <li>${details.languages[0]}</li>
                <li>${details.languages[1]}</li>
                <li>${details.languages[2]}</li>
            </ul>
        </div>
        <button id="${details.id}" type="button" class="modal-open" data-modal="modal-${details.id}">See Project</button>
    </div>

    <div class="modal" id="modal-${details.id}">
        <div class="modal-content">
            <div class="modal-close-btn">
                <i id="modal-close" class="fas fa-times modal-close"></i>
            </div>
            <h4>${details.title}</h4>
            <ul class="modal-tags">
            <li class="tech-used">${details.languages[0]}</li>
            <li class="tech-used">${details.languages[1]}</li>
            <li class="tech-used">${details.languages[2]}</li>
            </ul>
            <div class="modal-img-container">
                <img class="modal-img" src="${details.imageUrl}" alt="${details.title}" />
            </div>
            <div>
                <p>${details.body}</p>
            </div>
            <div class="modal-links">
                
                <a href=${details.seeSourceUrl}><button style="display:flex; align-items: center; width: auto;" type="button">See Source&nbsp;&nbsp;<i id="github-icon-modal" class="fab fa-github-alt"></i></button></a>
            </div>
        </div>
    </div>

    `;
  return template;
}

// eslint-disable-next-line array-callback-return
projects.map((project) => {
  const HTMLElement = document.createElement('div');
  HTMLElement.innerHTML = generateHTML(project);
  cardsSection.appendChild(HTMLElement);
});