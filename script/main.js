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
})

