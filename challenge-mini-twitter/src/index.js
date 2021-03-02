let tweetText = document.querySelector(".tweet-text");
let submitBtn = document.querySelector(".tweet-btn");
let tweets = document.querySelector(".tweets");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let p = document.createElement("p");
  p.appendChild(document.createTextNode(tweetText.value));
  console.log("p", p);
  p.appendChild(document.createElement("br")); // breaks a line so the time and date can appear on the next line
  p.appendChild(document.createTextNode(getCurrentDate()));
  tweets.appendChild(p);

  //This clears the textarea input to be empty.
  tweetText.value = "";
});

function getCurrentDate() {
  //Researched to find how to get current date and time using javascript
  let currentdate = new Date();
  let datetime =
    +currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  return datetime;
}
