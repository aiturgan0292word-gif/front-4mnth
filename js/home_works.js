
const gmailInput = document.getElementById('gmail_input');
const gmailButton = document.getElementById('gmail_button');
const gmailResult = document.getElementById('gmail_result');

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



const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let currentPosition = 0;

function moveBlock() {
    if (!childBlock || !parentBlock) return;

   
    const maxPosition = parentBlock.clientWidth - childBlock.clientWidth;

    if (currentPosition < maxPosition) {
        currentPosition += 2; 
        childBlock.style.left = `${currentPosition}px`;

        
        setTimeout(moveBlock, 10); 
    }
}


window.addEventListener('load', moveBlock);

