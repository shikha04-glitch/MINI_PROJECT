let resources = JSON.parse(localStorage.getItem("resources")) || [];

function saveResources() {
  localStorage.setItem("resources", JSON.stringify(resources));
}

function addNgoResource() {
  const type = document.getElementById("ngoResourceType").value;
  const qty = document.getElementById("ngoResourceQty").value;
  const location = document.getElementById("ngoResourceLocation").value;

  if (!type || !qty || !location) {
    alert("Please fill all fields!");
    return;
  }

  resources.push({ type, qty, location, status: "Available" });
  saveResources();
  renderNgoResources();
}

function renderNgoResources() {
  const tbody = document.querySelector("#ngoResourceTable tbody");
  tbody.innerHTML = "";

  resources.forEach(res => {
    const row = `<tr>
      <td>${res.type}</td>
      <td>${res.qty}</td>
      <td>${res.location}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}