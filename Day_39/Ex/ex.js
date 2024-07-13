var listBlog = document.querySelector(".list-blog");

const urlApi = "https://trj49q-8080.csb.app";

const getLimit = () => {
  var limit = 5;
  const handler = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    if (scrollPercent > 90) {
      limit += 5;
      window.removeEventListener("scroll", handler);
      setTimeout(() => {
        main();
      }, 300);
    }
  };
  window.addEventListener("scroll", handler);
  return limit;
};

const getApi = async (newLimit) => {
  const response = await fetch(`${urlApi}/blogs?_page=1&_limit=${newLimit}`);
  const blog = await response.json();
  blog.forEach((element) => {
    renderBlog(element);
  });
};

const getHashTag = (array) => {
  return array
    .map((hashTag) => {
      return `<button class="hash-tag"># ${hashTag}</button>`;
    })
    .join("");
};

const renderBlog = async (object) => {
  listBlog.innerHTML += `
        <section>
            <article class="inf">
                <div class="head">
                    <span class="avatar">${object.name
                      .trim()
                      .slice(0, 1)
                      .toLowerCase()}</span>
                    <span class="name">${object.name.trim()}</span>
                </div>
                <div class="main">
                    <h3 class="title">${object.title}</h3>
                    <div  class="content">${object.content}</div>
                </div>
                <div class="footer">
                    <div class="tag">
                        ${getHashTag(object.hashtag)}
                    </div>
                    <div class="time">
                         <span>Khoảng ${object.timeRead} giây đọc.</span>
                    </div>
                </div>
            <article>
        </section>
    `;
};

const main = async () => {
  const newLimit = await getLimit();
  getApi(newLimit);
};
main();
