document.getElementById("completedBtn").addEventListener('click', function () {
  alert("Board updated successfully");

  document.getElementById("completedBtn").style.opacity = "0.2";
  document.getElementById("completedBtn").style.backgroundColor = "gray";

  const taskSix = getInnerTextByID("taskSix");
  const sub = taskSix - 1;
  document.getElementById("taskSix").innerText = sub;

  const taskSum = getInnerTextByID("taskSub");
  const sum = taskSum + 1;
  document.getElementById("taskSub").innerText = sum;

  const d = new Date();
  let currentTime = d.toLocaleTimeString();

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("bg-primaryColor", "m-4", "p-2", "rounded-lg", "max-w-72", "opacity-70");
  messageDiv.innerHTML = `<p>You have completed the task Fix Mobile Button Issue at ${currentTime}</p>`;

  document.getElementById("message-container").appendChild(messageDiv);

  function taskAlert() {
    const six = document.getElementById("taskSix").innerText;
    if (six == 0) {
      alert("congrats!!! You have completed all the current tasks")
    }
  }
  taskAlert()
})

document.getElementById("completedBtn2").addEventListener('click', function () {
  alert("Board updated successfully");

  document.getElementById("completedBtn2").style.opacity = "0.2";
  document.getElementById("completedBtn2").style.backgroundColor = "gray";

  const taskSix = getInnerTextByID("taskSix");
  const sub = taskSix - 1;
  document.getElementById("taskSix").innerText = sub;

  const taskSum = getInnerTextByID("taskSub");
  const sum = taskSum + 1;
  document.getElementById("taskSub").innerText = sum;

  const d = new Date();
  let currentTime = d.toLocaleTimeString();

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("bg-primaryColor", "m-4", "p-2", "rounded-lg", "max-w-72", "opacity-70");
  messageDiv.innerHTML = `<p>You have completed the task Add Dark Mode at ${currentTime}</p>`;

  document.getElementById("message-container").appendChild(messageDiv);

  function taskAlert() {
    const six = document.getElementById("taskSix").innerText;
    if (six == 0) {
      alert("congrats!!! You have completed all the current tasks")
    }
  }
  taskAlert()
})

document.getElementById("completedBtn3").addEventListener('click', function () {
  alert("Board updated successfully");

  document.getElementById("completedBtn3").style.opacity = "0.2";
  document.getElementById("completedBtn3").style.backgroundColor = "gray";

  const taskSix = getInnerTextByID("taskSix");
  const sub = taskSix - 1;
  document.getElementById("taskSix").innerText = sub;

  const taskSum = getInnerTextByID("taskSub");
  const sum = taskSum + 1;
  document.getElementById("taskSub").innerText = sum;

  const d = new Date();
  let currentTime = d.toLocaleTimeString();

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("bg-primaryColor", "m-4", "p-2", "rounded-lg", "max-w-72", "opacity-70");
  messageDiv.innerHTML = `<p>You have completed the task Optimize  Home page at ${currentTime}</p>`;

  document.getElementById("message-container").appendChild(messageDiv);

  function taskAlert() {
    const six = document.getElementById("taskSix").innerText;
    if (six == 0) {
      alert("congrats!!! You have completed all the current tasks")
    }
  }
  taskAlert()
})

document.getElementById("completedBtn4").addEventListener('click', function () {
  alert("Board updated successfully");

  document.getElementById("completedBtn4").style.opacity = "0.2";
  document.getElementById("completedBtn4").style.backgroundColor = "gray";

  const taskSix = getInnerTextByID("taskSix");
  const sub = taskSix - 1;
  document.getElementById("taskSix").innerText = sub;

  const taskSum = getInnerTextByID("taskSub");
  const sum = taskSum + 1;
  document.getElementById("taskSub").innerText = sum;

  const d = new Date();
  let currentTime = d.toLocaleTimeString();

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("bg-primaryColor", "m-4", "p-2", "rounded-lg", "max-w-72", "opacity-70");
  messageDiv.innerHTML = `<p>You have completed the task Add new emoji 🤲 at ${currentTime}</p>`;

  document.getElementById("message-container").appendChild(messageDiv);

  function taskAlert() {
    const six = document.getElementById("taskSix").innerText;
    if (six == 0) {
      alert("congrats!!! You have completed all the current tasks")
    }
  }
  taskAlert()
})

document.getElementById("completedBtn5").addEventListener('click', function () {
  alert("Board updated successfully");

  document.getElementById("completedBtn5").style.opacity = "0.2";
  document.getElementById("completedBtn5").style.backgroundColor = "gray";

  const taskSix = getInnerTextByID("taskSix");
  const sub = taskSix - 1;
  document.getElementById("taskSix").innerText = sub;

  const taskSum = getInnerTextByID("taskSub");
  const sum = taskSum + 1;
  document.getElementById("taskSub").innerText = sum;

  const d = new Date();
  let currentTime = d.toLocaleTimeString();

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("bg-primaryColor", "m-4", "p-2", "rounded-lg", "max-w-72", "opacity-70");
  messageDiv.innerHTML = `<p>You have completed the task Integrate OpenAI API at ${currentTime}</p>`;

  document.getElementById("message-container").appendChild(messageDiv);

  function taskAlert() {
    const six = document.getElementById("taskSix").innerText;
    if (six == 0) {
      alert("congrats!!! You have completed all the current tasks")
    }
  }
  taskAlert()
})

document.getElementById("completedBtn6").addEventListener('click', function () {
  alert("Board updated successfully");

  document.getElementById("completedBtn6").style.opacity = "0.2";
  document.getElementById("completedBtn6").style.backgroundColor = "gray";

  const taskSix = getInnerTextByID("taskSix");
  const sub = taskSix - 1;
  document.getElementById("taskSix").innerText = sub;

  const taskSum = getInnerTextByID("taskSub");
  const sum = taskSum + 1;
  document.getElementById("taskSub").innerText = sum;

  const d = new Date();
  let currentTime = d.toLocaleTimeString();

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("bg-primaryColor", "m-4", "p-2", "rounded-lg", "max-w-72", "opacity-70");
  messageDiv.innerHTML = `<p>You have completed the task Improve Job searching at ${currentTime}</p>`;

  document.getElementById("message-container").appendChild(messageDiv);

  function taskAlert() {
    const six = document.getElementById("taskSix").innerText;
    if (six == 0) {
      alert("congrats!!! You have completed all the current tasks")
    }
  }
  taskAlert()
})



document.getElementById("clear-btn").addEventListener('click', function () {
  document.getElementById('message-container').style.display = "none"
})


const today = new Date();
const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options).replace(',', '');
document.getElementById("cDate").innerText = formattedDate;

const colors = ["BlueViolet", "LightCoral", "MediumSeaGreen", "Lavender", "Gold"];
  let i = 0;
document.getElementById("theme-img").addEventListener('click', function () {
  
  document.body.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
})
