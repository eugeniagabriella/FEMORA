// DATA LAYANAN PEMERINTAH
const services = [
  {
    name: "Puskesmas",
    category: "kesehatan",
    desc: "Layanan kesehatan dasar untuk masyarakat desa.",
    link: "https://maps.google.com/?q=puskesmas"
  },
  {
    name: "Posyandu",
    category: "kesehatan",
    desc: "Imunisasi, pemeriksaan ibu & anak balita.",
    link: "https://maps.google.com/?q=posyandu"
  },
  {
    name: "Kantor Desa",
    category: "sosial",
    desc: "Administrasi warga, surat menyurat, bantuan sosial.",
    link: "https://maps.google.com/?q=kantor+desa"
  },
  {
    name: "Sekolah",
    category: "pendidikan",
    desc: "Sekolah untuk anak-anak desa.",
    link: "https://maps.google.com/?q=sd+negeri"
  },
  {
    name: "Polsek Sektor Desa",
    category: "keamanan",
    desc: "Layanan keamanan dan perlindungan warga.",
    link: "https://maps.google.com/?q=polsek"
  }
];

// RENDER SERVICES
function renderServices(filter = "all") {
  const list = document.getElementById("serviceList");
  list.innerHTML = "";

  services
    .filter(s => filter === "all" || s.category === filter)
    .forEach(service => {
      const card = document.createElement("div");
      card.className = "service-card";

      card.innerHTML = `
        <div class="service-title">${service.name}</div>
        <div class="service-category">Kategori: ${service.category}</div>
        <div class="service-desc">${service.desc}</div>
        <button class="map-btn" onclick="window.open('${service.link}', '_blank')">
          Lihat di Google Maps
        </button>
      `;

      list.appendChild(card);
    });
}

// FILTER EVENT
document.getElementById("categoryFilter").addEventListener("change", function() {
  renderServices(this.value);
});

// LOAD AWAL
renderServices();