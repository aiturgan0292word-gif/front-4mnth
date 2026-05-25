const gmailInput = document.getElementById('gmail_input');
const gmailButton = document.getElementById('gmail_button');
const gmailResult = document.getElementById('gmail_result');
const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');


const gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
function checkGmail() {
     
    const email = gmailInput.value.trim();

    if (gmailRegex.test(email)) {
        gmailResult.textContent = '✓ Valid Gmail';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.textContent = '✗ Invalid Gmail';
        gmailResult.style.color = 'red';
    }
}


if (gmailButton) {
    gmailButton.addEventListener('click', checkGmail);
}

if (gmailInput) {
    gmailInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            checkGmail();
        }
    });
}





// дз2



let positionX = 0;
let positionY = 0;

const toRight = parentBlock.clientWidth - childBlock.clientWidth;
const toButton = parentBlock.clientHeight - childBlock.clientHeight;



function moveBlock() {
    if (positionX < toRight && positionY === 0) {
        positionX ++;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX >= toRight && positionY < toButton) {
        positionY ++;
        childBlock.style.top = `${positionY}px`;
    } else if (positionY >= toButton && positionX > 0) {
        positionX --;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY --;
        childBlock.style.top = `${positionY}px`;
    }
    requestAnimationFrame(moveBlock)
}
moveBlock(); 

const time = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let seconds = 0;
let interval = null;

startBtn.addEventListener('click', () => {
    if (interval === null) {
        interval = setInterval(() => {
            seconds++;
            time.textContent = seconds;
        }, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    time.textContent = seconds;
});


const request = new XMLHttpRequest();

request.open("GET", "../data/characters.json");

request.onload = () => {
    const characters = JSON.parse(request.response);

    const container = document.querySelector(".characters-list");

    characters.forEach((character) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img 
                src="${character.person_photo || './images/default.png'}" 
                alt="${character.name}"
            >
            <h3>${character.name}</h3>
            <p>Возраст: ${character.age}</p>
            <p>${character.description}</p>
        `;

        container.append(card);
    });
};

request.send();


const bioRequest = new XMLHttpRequest();

bioRequest.open("GET", "../data/bio.json");

bioRequest.onload = () => {
    const bio = JSON.parse(bioRequest.response);
    console.log(bio);
};

bioRequest.send();

