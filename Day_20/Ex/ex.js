var content =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, illum.";
content = content.trim();
var keyword = " ";
var position = content.indexOf(keyword);
var count = 0;
setInterval(() => {
  var work = "";

  while (count < content.length && content.charAt(count) !== " ") {
    work += content.charAt(count);
    count++;
  }
  if (content.charAt(count) === " ") {
    count++;
  }
  //   var cut = content.replace(work, `<span>${work}</span>`);
  //   var workUpdate = content.slice(count, cut.length - 1);
  var workUpdate = content.replace(work, `<span>${work}</span>`);
  var contentUpdate = workUpdate + content.slice(count + keyword.length);
  document.body.innerHTML = contentUpdate;
  contentUpdate = content;
}, 1000);
