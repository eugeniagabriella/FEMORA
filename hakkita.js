// DATA TOPIK EDUKASI
const topics = [
  {
    title: "Hak atas Pendidikan",
    desc: `
      Setiap perempuan berhak mendapatkan pendidikan yang layak.
      Pemerintah menyediakan sekolah negeri, beasiswa, dan bantuan agar semua anak bisa belajar.

      Jika kamu mengalami kesulitan sekolah, kamu bisa mencari bantuan ke sekolah, pemerintah desa,
      atau layanan pendidikan terdekat.
    `,
    link: "https://kemdikbud.go.id"
  },
  {
    title: "Hak atas Kesehatan",
    desc: `
      Perempuan berhak mendapatkan layanan kesehatan yang aman dan mudah diakses,
      seperti pemeriksaan umum, imunisasi, dan layanan ibu & anak.

      Pemerintah menyediakan fasilitas seperti Puskesmas, Posyandu, dan BPJS Kesehatan.
    `,
    link: "https://bpjs-kesehatan.go.id"
  },
  {
    title: "Hak atas Keamanan",
    desc: `
      Semua warga berhak merasa aman di lingkungannya.
      Pemerintah menyediakan layanan keamanan seperti kantor polisi, pos kamling, dan bantuan darurat.

      Jika ada situasi tidak aman, hubungi pihak berwenang atau perangkat desa.
    `,
    link: "https://polri.go.id"
  },
  {
    title: "Hak atas Bantuan Sosial",
    desc: `
      Perempuan dapat memperoleh berbagai program bantuan seperti bantuan pendidikan,
      bantuan keluarga kurang mampu, serta program pemberdayaan ekonomi.

      Program ini disediakan melalui pemerintah desa dan kementerian sosial.
    `,
    link: "https://kemensos.go.id"
  }
];

// RENDERING
function renderTopics() {
  const list = document.getElementById("topicList");
  list.innerHTML = "";

  topics.forEach((t, i) => {
    const card = document.createElement("div");
    card.className = "topic-card";
    card.innerHTML = `
      <div class="topic-title">${t.title}</div>
      <div class="topic-desc" id="desc-${i}">
        ${t.desc}
        <br>
        <button class="learn-btn" onclick="window.open('${t.link}', '_blank')">
          Pelajari lebih lanjut
        </button>
      </div>
    `;

    card.addEventListener("click", () => {
      const box = document.getElementById(`desc-${i}`);
      box.style.display = box.style.display === "block" ? "none" : "block";
    });

    list.appendChild(card);
  });
}

renderTopics();