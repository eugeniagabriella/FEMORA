let chart;
let surveyData = {
  hambatan: {},
  keamanan: {},
  akses: {}
};

// Utility untuk hitung frekuensi
function addCount(obj, key) {
  if (!obj[key]) obj[key] = 0;
  obj[key]++;
}

document.getElementById("surveyForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const hambatan = document.getElementById("hambatan").value;
  const keamanan = document.getElementById("keamanan").value;
  const akses = document.getElementById("akses").value;

  // Simpan data
  addCount(surveyData.hambatan, hambatan);
  addCount(surveyData.keamanan, keamanan);
  addCount(surveyData.akses, akses);

  // Tampilkan thank you dan chart
  document.getElementById("thankYouBox").classList.remove("hidden");
  document.getElementById("chartSection").classList.remove("hidden");

  renderChart();
});

// =========================
// CHART RENDER
// =========================

function renderChart() {
  const ctx = document.getElementById("resultChart");

  const categories = ["hambatan", "keamanan", "akses"];
  const labels = [];
  const values = [];

  categories.forEach(cat => {
    const obj = surveyData[cat];
    Object.keys(obj).forEach(k => {
      labels.push(k);
      values.push(obj[k]);
    });
  });

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Jumlah Respons",
        data: values,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}