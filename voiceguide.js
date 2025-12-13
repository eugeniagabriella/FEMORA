// --- Speech Recognition Setup ---
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "id-ID";
recognition.interimResults = false;

const micBtn = document.getElementById("micBtn");
const statusText = document.getElementById("statusText");
const userSpeechEl = document.getElementById("userSpeech");
const speechResult = document.getElementById("speechResult");
const analysisBox = document.getElementById("analysisBox");
const analysisText = document.getElementById("analysisText");

micBtn.onclick = () => {
  recognition.start();
  statusText.textContent = "Mendengarkan...";
  micBtn.disabled = true;
};

recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;
  
  userSpeechEl.textContent = text;
  speechResult.classList.remove("hidden");

  analyzeText(text);

  statusText.textContent = "Selesai mendengar ✓";
  micBtn.disabled = false;
};

recognition.onerror = () => {
  statusText.textContent = "Gagal menangkap suara, coba ulangi.";
  micBtn.disabled = false;
};

// --- TEXT ANALYSIS ENGINE ---
function analyzeText(text) {
  const t = text.toLowerCase();
  let response = "";

  if (match(t, ["sekolah", "belajar", "guru", "biaya", "pendidikan"])) {
    response =
      "Sepertinya kamu menghadapi kendala terkait *pendidikan*. " +
      "Coba mulai dengan mencari bantuan belajar online gratis, belajar kelompok, atau bertanya ke guru." +
      "<br><br>Jika kamu butuh tempat belajar atau akses pendidikan di desa, kamu bisa cek layanan seperti SD Negeri atau Pusat Kegiatan Belajar Masyarakat (PKBM).";

  } else if (match(t, ["puskesmas", "sakit", "kesehatan", "nyeri", "demam", "menstruasi"])) {
    response =
      "Kamu sedang mengalami masalah *kesehatan*. Sebisa mungkin istirahat, minum cukup air, dan catat gejala kamu." +
      "<br><br>Kalau perlu bantuan lebih lanjut, kamu bisa mengunjungi Puskesmas atau Posyandu terdekat.";

  } else if (match(t, ["takut", "tidak aman", "gangguan", "kekerasan", "keamanan"])) {
    response =
      "Kamu sedang menghadapi masalah terkait *keamanan*. Penting untuk tetap berada di tempat yang aman dan dekat orang yang kamu percaya." +
      "<br><br>Jika situasinya mendesak, layanan seperti Polsek atau perangkat desa bisa membantu.";

  } else if (match(t, ["internet", "sinyal", "hp", "wifi", "teknologi"])) {
    response =
      "Sepertinya ini masalah *akses teknologi*. Coba cari lokasi dengan sinyal paling kuat, atau tanya ke balai desa apakah ada hotspot WiFi publik.";

  } else if (match(t, ["uang", "bantuan", "ekonomi", "kerja"])) {
    response =
      "Kamu menghadapi kendala *ekonomi*. Coba mulai dengan membuat daftar kebutuhan penting dan yang bisa ditunda." +
      "<br><br>Jika perlu, kamu bisa cek informasi tentang bantuan sosial di Kantor Desa.";

  } else {
    response =
      "Aku menangkap ceritamu, dan sepertinya masalahmu cukup umum. Kamu bisa coba menjelaskan sedikit lebih spesifik supaya aku bisa bantu lebih akurat.";
  }

  analysisText.innerHTML = response;
  analysisBox.classList.remove("hidden");
}

function match(text, keywords) {
  return keywords.some(k => text.includes(k));
}
recognition.onerror = (event) => {
  console.log("ERROR:", event.error);
  statusText.textContent = "Error: " + event.error;
};
