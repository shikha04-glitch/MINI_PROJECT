let requests = JSON.parse(localStorage.getItem("requests")) || [];

/* CHANGE DROPDOWN COLOR */
function setUrgencyColor() {
  const select = document.getElementById("urgency");
  const value = select.value;

  if (value === "High") {
    select.style.backgroundColor = "red";
    select.style.color = "white";
  } else if (value === "Medium") {
    select.style.backgroundColor = "orange";
    select.style.color = "black";
  } else {
    select.style.backgroundColor = "green";
    select.style.color = "white";
  }
}

/* SUBMIT REQUEST */
function submitRequest() {
  const area = document.getElementById("areaName").value;
  const people = document.getElementById("peopleCount").value;
  const urgency = document.getElementById("urgency").value;
  const resource = document.getElementById("neededResource").value;

  if (!area || !people || !resource) {
    alert("Please fill all fields");
    return;
  }

  requests.push({ area, people, urgency, resource });
  localStorage.setItem("requests", JSON.stringify(requests));

  renderTable();

  document.getElementById("areaName").value = "";
  document.getElementById("peopleCount").value = "";
  document.getElementById("neededResource").value = "";
}

/* RENDER TABLE */
function renderTable() {
  const tbody = document.querySelector("#volunteerTable tbody");
  tbody.innerHTML = "";

  requests.forEach(req => {
    let urgencyClass =
      req.urgency === "High" ? "urgency-high" :
      req.urgency === "Medium" ? "urgency-medium" :
      "urgency-low";

    tbody.innerHTML += `
      <tr>
        <td>${req.area}</td>
        <td>${req.people}</td>
        <td class="${urgencyClass}">${req.urgency}</td>
        <td>${req.resource}</td>
      </tr>
    `;
  });
}

/* LOAD DATA ON PAGE LOAD */
renderTable();