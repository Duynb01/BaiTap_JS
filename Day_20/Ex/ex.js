var content =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, illum.";
content = content.trim();
var keyword = " ";
var position = content.indexOf(keyword);
var count = 0;
setInterval(() => {
  var word = "";
  while (count < content.length && content.charAt(count) !== " ") {
    word += content.charAt(count);
    count++;
  }
  if (content.charAt(count) === " ") {
    count++;
  }
  if (count === content.length) {
    count = 0;
  }
  var wordUpdate = content.replace(word, `<span>${word}</span>`);
  var contentUpdate = wordUpdate;

  document.body.innerHTML = contentUpdate;
}, 1000);
