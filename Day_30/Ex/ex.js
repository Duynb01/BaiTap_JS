var btn = document.querySelector(".btn");
var para = document.querySelector(".show");
var paraOffer = document.querySelector(".offer");
var div = document.querySelector("div");

var nameLink = [
  "Google",
  "Facebook",
  "YouTube",
  "Google Drive",
  "Google Maps",
  "Bản đồ",
  "Chỉ đường Vinhomes Smart city Tây Mỗ",
  "Chỉ đường tới Vinhomes Smart city Tây Mỗ",
  "Tới Vinhomes Smart city Tây Mỗ",
  "Đường tới Vinhomes Smart city Tây Mỗ",
  "Bài hát ai chung tình được mãi",
  "Mở bài hát ai chung tình được mãi",
  "Nghe bài hát ai chung tình được mãi",
  "Video ai chung tình được mãi",
  "Mở video ai chung tình được mãi",
  "Xem video ai chung tình được mãi",
];

var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

var grammar =
  "#JSGF V1.0; grammar directions; public <direction> = Chỉ | Tới | tới ;";
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);

var recognitionEng = new SpeechRecognition();
recognitionEng.lang = "en-US";
recognitionEng.interimResults = true;
recognitionEng.maxAlternatives = 1;

var recognitionVn = new SpeechRecognition();
recognitionVn.lang = "vi-VN";
recognitionVn.interimResults = true;
recognitionVn.maxAlternatives = 1;
recognitionVn.grammar = speechRecognitionList;

btn.addEventListener("click", function () {
  paraOffer.classList.remove("green");
  div.classList.remove("show");
  paraOffer.textContent = "Hãy nói nội dung bạn muốn";
  recognitionEng.addEventListener("result", handler);
  recognitionVn.addEventListener("result", handler);
  recognitionEng.start();
  recognitionVn.start();
});

var handler = function (e) {
  var resultIndex = e.resultIndex;
  var transcript = e.results[resultIndex][0].transcript;
  var transcriptResult = transcript[0].toUpperCase() + transcript.slice(1);
  para.textContent = `Kết quả: '${transcriptResult}'`;
  recognitionEng.stop();
  div.classList.add("show");
  paraOffer.classList.add("green");
  paraOffer.textContent = "Đã nói xong. Hy vọng kết quả như ý bạn";
  setTimeout(function () {
    openLink(transcriptResult);
  }, 3000);
};

function openLink(transcriptResult) {
  if (nameLink.includes(transcriptResult)) {
    if (transcriptResult === "Google") {
      window.open("https://www.google.com", "_blank");
    } else if (transcriptResult === "Facebook") {
      window.open("https://www.facebook.com", "_blank");
    } else if (transcriptResult === "YouTube") {
      window.open("https://www.youtube.com", "_blank");
    } else if (transcriptResult === "Google Drive") {
      window.open("https://drive.google.com", "_blank");
    } else if (
      transcriptResult === "Google Maps" ||
      transcriptResult === "Bản đồ"
    ) {
      window.open("https://www.google.com/maps", "_blank");
    } else if (
      transcriptResult === "Chỉ đường Vinhomes Smart city Tây Mỗ" ||
      transcriptResult === "Chỉ đường tới Vinhomes Smart city Tây Mỗ" ||
      transcriptResult === "Tới Vinhomes Smart city Tây Mỗ" ||
      transcriptResult === "Đường tới Vinhomes Smart city Tây Mỗ"
    ) {
      window.open(
        "https://www.google.com/maps/search/vinhomes+smart+city+t%C3%A2y+m%E1%BB%97/@21.0065843,105.7402732,17z/data=!3m1!4b1?entry=ttu",
        "_blank"
      );
    } else if (
      transcriptResult === "Bài hát ai chung tình được mãi" ||
      transcriptResult === "Mở bài hát ai chung tình được mãi" ||
      transcriptResult === "Nghe bài hát ai chung tình được mãi"
    ) {
      window.open(
        "https://zingmp3.vn/album/Ai-Chung-Tinh-Duoc-Mai-Cover-Single-Trung-Quan-Idol/6BWADUOO.html",
        "_blank"
      );
    } else if (
      transcriptResult === "Video ai chung tình được mãi" ||
      transcriptResult === "Mở video ai chung tình được mãi" ||
      transcriptResult === "Xem video ai chung tình được mãi"
    ) {
      window.open("https://www.youtube.com/watch?v=Wi9E6q2KkM0", "_blank");
    }
    setTimeout(function () {
      para.textContent = `Đã thực hiện yêu cầu`;
    }, 1500);
  } else {
    setTimeout(function () {
      para.textContent = `Không thực hiện được yêu cầu`;
    }, 3000);
  }
}
