const urlApi = "http://localhost:3000";
const unfinish = document.querySelector(".unfinished");
const finish = document.querySelector(".finish");
const getData = async () => {
  const response = await fetch(urlApi + "/todo-list");
  const data = await response.json();
  renderList(data);
};
getData();

const renderList = async (object) => {
  object.map(({ id, name, status }) => {
    if (status === "finish") {
      finish.innerHTML += `
            <div class="name-work">
                <span class="content">${name
                  .replaceAll("<", "&lt;")
                  .replaceAll(">", "&gt;")}</span>
                <div class="item-option">
                    <button class="btn btn-delete delete">
                    <i class="fa-regular fa-trash-can"></i>
                    </button>
                    <button class="btn btn-edit icon">
                    <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="btn btn-check check access">
                    <i class="fa-solid fa-check-to-slot"></i>
                    </button>
                </div>
            </div>
            `;
    } else {
      unfinish.innerHTML += `
         <div class="name-work">
                <span class="content">${name
                  .replaceAll("<", "&lt;")
                  .replaceAll(">", "&gt;")}</span>
                <div class="item-option">
                    <button class="btn btn-delete delete">
                    <i class="fa-regular fa-trash-can"></i>
                    </button>
                    <button class="btn btn-edit icon">
                    <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="btn btn-check check">
                    <i class="fa-solid fa-check-to-slot"></i>
                    </button>
                </div>
            </div>`;
    }
  });
  //   unfinish.innerHTML = `${object
  //     .map(
  //       ({ id, name, status }) =>
  //         `
  //             <div class="name-work">
  //                 <span class="content">${name
  //                   .replaceAll("<", "&lt;")
  //                   .replaceAll(">", "&gt;")}</span>
  //                 <div class="item-option">
  //                     <button class="btn btn-delete delete">
  //                     <i class="fa-regular fa-trash-can"></i>
  //                     </button>
  //                     <button class="btn btn-edit icon">
  //                     <i class="fa-regular fa-pen-to-square"></i>
  //                     </button>
  //                     <button class="btn btn-check check ${
  //                       status === "finish" ? "access" : ""
  //                     }">
  //                     <i class="fa-solid fa-check-to-slot"></i>
  //                     </button>
  //                 </div>
  //             </div>
  //             `
  //     )
  //     .join("")}`;
};
console.log(finish.children);
console.log(finish.children.length);
var quantity = finish.children;
export { quantity };
