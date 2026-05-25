





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