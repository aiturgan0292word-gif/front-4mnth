// дз6
const card = document.querySelector(".card");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentId = 1;

async function getCard(id) {
    try {
        const response =
            await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );

        const data =
            await response.json();

        card.innerHTML = `
        <img
        src="https://picsum.photos/300/250">

        <h2>${data.title}</h2>

        <p>${data.body}</p>
        `;

    } catch (error) {
        console.log(error);
    }
}

getCard(currentId);

next.onclick = () => {

    currentId++;

    if (currentId > 200) {
        currentId = 1;
    }

    getCard(currentId);
};

prev.onclick = () => {

    currentId--;

    if (currentId < 1) {
        currentId = 200;
    }

    getCard(currentId);
};

async function getPosts() {
    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

    const posts =
        await response.json();

    console.log(posts);
}

getPosts();





// дз7

// const container = document.querySelector(".cards");

// async function getPosts() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );

//         if (!response.ok) {
//             throw new Error("Ошибка загрузки");
//         }

//         const posts = await response.json();

//         posts.forEach((post) => {
//             const card = document.createElement("div");

//             card.classList.add("card");

//             card.innerHTML = `
//                 <img
//                     src="https://picsum.photos/400/250"
//                     alt="${post.title}"
//                 >

//                 <h3>${post.title}</h3>

//                 <p>${post.body}</p>
//             `;

//             container.append(card);
//         });

//     } catch (error) {
//         container.innerHTML =
//             `<h2>Не удалось загрузить данные</h2>`;

//         console.log(error);
//     }
// }

// getPosts();