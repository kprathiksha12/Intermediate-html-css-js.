// Switch between sections
function showSection(section) {
  document.getElementById("contact").style.display = "none";
  document.getElementById("todo").style.display = "none";
  document.getElementById("gallerySection").style.display = "none";
  document.getElementById(section).style.display = "block";
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "") {
    alert("All fields are required!");
    return;
  }
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email!");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});

// To-Do List
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskValue;

  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

// Image Gallery Upload & Delete
function addImage() {
  let input = document.getElementById("imageInput");
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function(e) {
      let gallery = document.getElementById("gallery");

      let div = document.createElement("div");
      div.classList.add("gallery-item");

      let img = document.createElement("img");
      img.src = e.target.result;

      let delBtn = document.createElement("button");
      delBtn.textContent = "X";
      delBtn.classList.add("delete-btn");
      delBtn.onclick = function() {
        div.remove();
      };

      div.appendChild(img);
      div.appendChild(delBtn);
      gallery.appendChild(div);
    }
    reader.readAsDataURL(input.files[0]);
    input.value = ""; // reset file input
  } else {
    alert("Please select an image to upload!");
  }
}