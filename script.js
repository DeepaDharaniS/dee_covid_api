async function Covid(state) {
  const res = await fetch('https://data.covid19india.org/v4/min/timeseries.min.json');
  const data = await res.json();

  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ""; 


  if (data[state]) {
    const entries = data[state].dates;


    for (const date in entries) {
      const stats = entries[date];
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${date}</td>
          <td>${stats.total.confirmed || 0}</td>
          <td>${stats.total.recovered || 0}</td>
          <td>${stats.total.tested || 0}</td>`;
      tableBody.appendChild(row);
    }
  }
}

document.getElementById("TN").addEventListener("click", function () {
  Covid("TN"); // Pass the state code to the function
});
