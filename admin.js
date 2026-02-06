// ===== STEP 1: Create Disaster Event =====
const createEventBtn = document.getElementById('createEventBtn');
const eventTableBody = document.querySelector('#eventTable tbody');

createEventBtn.addEventListener('click', () => {
  const type = document.getElementById('disasterType').value.trim();
  const location = document.getElementById('disasterLocation').value.trim();
  const severity = document.getElementById('disasterSeverity').value;

  if (!type || !location) return alert('Please fill all fields');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${type}</td>
    <td>${location}</td>
    <td>${severity}</td>
    <td><button class="deleteBtn">Delete</button></td>
  `;
  eventTableBody.appendChild(row);

  document.getElementById('disasterType').value = '';
  document.getElementById('disasterLocation').value = '';
});

// ===== STEP 2: Add Resources =====
const addResourceBtn = document.getElementById('addResourceBtn');
const resourceTableBody = document.querySelector('#resourceTable tbody');

addResourceBtn.addEventListener('click', () => {
  const type = document.getElementById('resourceType').value.trim();
  const qty = document.getElementById('resourceQuantity').value;
  const location = document.getElementById('resourceLocation').value.trim();
  const unit = document.getElementById('resourceUnit').value.trim();
  const status = document.getElementById('resourceStatus').value;

  if (!type || !qty || !location || !unit) return alert('Please fill all fields');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${type}</td>
    <td>${qty} ${unit}</td>
    <td>${location}</td>
    <td>${status}</td>
    <td><button class="deleteBtn">Delete</button></td>
  `;
  resourceTableBody.appendChild(row);

  document.getElementById('resourceType').value = '';
  document.getElementById('resourceQuantity').value = '';
  document.getElementById('resourceLocation').value = '';
  document.getElementById('resourceUnit').value = '';
});

// ===== STEP 3: Allocation Requests =====
const addRequestBtn = document.getElementById('addRequestBtn');
const requestTableBody = document.querySelector('#requestTable tbody');

addRequestBtn.addEventListener('click', () => {
  const resource = document.getElementById('requestResource').value.trim();
  const qty = document.getElementById('requestQuantity').value;
  const area = document.getElementById('requestArea').value.trim();

  if (!resource || !qty || !area) return alert('Please fill all fields');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${resource}</td>
    <td>${qty}</td>
    <td>${area}</td>
    <td><button class="deleteBtn">Delete</button></td>
  `;
  requestTableBody.appendChild(row);

  document.getElementById('requestResource').value = '';
  document.getElementById('requestQuantity').value = '';
  document.getElementById('requestArea').value = '';
});


// ===== STEP 4: Monitoring & Tracking =====
const addTrackingBtn = document.getElementById('addTrackingBtn');
const trackingTableBody = document.querySelector('#trackingTable tbody');

addTrackingBtn.addEventListener('click', () => {
  const resource = document.getElementById('trackResource').value.trim();
  const sentTo = document.getElementById('trackSentTo').value.trim();
  const status = document.getElementById('trackStatus').value;

  if (!resource || !sentTo) return alert('Please fill all fields');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${resource}</td>
    <td>${sentTo}</td>
    <td>${status}</td>
    <td><button class="deleteBtn">Delete</button></td>
  `;
  trackingTableBody.appendChild(row);

  document.getElementById('trackResource').value = '';
  document.getElementById('trackSentTo').value = '';
});

// ===== Delete row for all tables =====
document.addEventListener('click', function(e){
  if(e.target.classList.contains('deleteBtn')){
    e.target.parentElement.parentElement.remove();
  }
});