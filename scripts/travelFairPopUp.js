const termsData = {
  "icon_cuan7_8877c6e56b.png": `
  <ul>
    <li>Periode pemesanan: 12 - 14 September 2025</li>
    <li>Hemat hingga Rp800 ribu untuk pengurusan visa di negara tertentu</li>
    <li>Tambahan hemat Rp100 ribu untuk minimal transaksi Rp3 Juta</li>
    <li>Berlaku untuk semua Kartu Kredit OCBC</li>
    <li>Berlaku untuk 10 transaksi pertama selama periode promo</li>
    <li>Berlaku untuk transaksi di Booth SPUN pada acara NyalaFest Travel Fair</li>
  </ul>
`,
  "logo_samsonite_a154ad0943.png": `
  <h4><b>Hemat hingga 40% + Trade in Koper</b></h4>
  <br>
  <ul>
    <li>Periode: 12 - 14 September 2025</li>
    <li>Hemat 40% untuk produk pilihan</li>
    <li>Berlaku untuk Kartu Kredit dan Debit OCBC</li>
    <li>Berlaku selama kuota masih tersedia</li>
    <li>Berlaku untuk transaksi di Booth Samsonite pada acara NyalaFest Travel Fair</li>
  </ul>
`,
  "logo_ascott_d7709a1b99.png": `
  <p>Periode pemesanan: 12 - 14 September 2025</p>
  <p>Periode menginap: hingga 30 Juni 2026</p>
  <br>
  <h4><b>Terms & Conditions:</b></h4>
  <ul>
    <li>Berlaku untuk pemesanan Room Only.</li>
    <li>Berlaku di seluruh properti Ascott Indonesia yang berpartisipasi dalam program ASR.</li>
    <li>Pemesanan dilakukan melalui situs web: <a href="https://www.discoverasr.com" target="_blank">www.discoverasr.com</a></li>
    <li>Menggunakan Promo Code.</li>
    <li>Pembayaran dilakukan langsung di hotel menggunakan Kartu Kredit OCBC.</li>
    <li>Wajib mendaftar sebagai anggota ASR melalui tautan referral berikut: 
      <a href="https://www.discoverasr.com/en/sign-up?referralCode=IDOCBC" target="_blank">
        https://www.discoverasr.com/en/sign-up?referralCode=IDOCBC
      </a>
    </li>
    <li>Tidak dapat dikembalikan (non-refundable). No-show dikenakan biaya 100%.</li>
    <li>Tergantung pada ketersediaan kamar.</li>
    <li>Tidak dapat digabungkan dengan promosi atau diskon lainnya.</li>
    <li>Melakukan transaksi langsung selama acara Nyala Fest di booth ASR akan mendapatkan nilai tambah berupa:
      <ul>
        <li>Free Late Check-Out* (*based on room availability at property), atau</li>
        <li>Free Upgrade* (*based on room availability at ASR property), atau</li>
        <li>Free ASR Merchandise.</li>
      </ul>
    </li>
  </ul>
`,
  "the_langham_logo_7c4a73c1d0.png": `
  <h4><b>Program Stay</b></h4>
  <ul>
    <li>One-night stay in Deluxe Room including breakfast for 2 people, at IDR 3 mio net. Booking date 12 – 14 September, stay date until 31 December 2025.</li>
    <li>One-night stay in Deluxe Room with Langham Club Access for 2 people, at IDR 4 mio net. Booking date 12 – 14 September, stay date until 31 December 2025.</li>
  </ul>
  <br>
  <h4><b>Program F&amp;B</b></h4>
  <ul>
    <li>20% Off Sunday Brunch for 2 pax at IDR 1,335,000 net.</li>
    <li>Buy 2 Get 3 Sunday Brunch at IDR 1,665,000 net.</li>
    <li>IDR 500,000 dining voucher for only 400,000, redeemable at all restaurants and bars.</li>
    <li>IDR 1,000,000 dining voucher for only IDR 800,000, redeemable at all restaurants and bars.</li>
  </ul>
  <br>
  <h4><b>Program Spa</b></h4>
  <ul>
    <li>Spa Voucher IDR 1,000,000 for only IDR 750,000.</li>
  </ul>
`,
  "icon_cuan4_63de1c142d.png": `
  <p>Dapatkan kesempatan main Wheel of Fortune selama periode event, dengan <b>Syarat & Ketentuan:</b></p>
  <br>
  <h4><b>Terms & Conditions</b></h4>
  <ul>
    <li>Transaksi min. Rp5 Juta di Senayan City untuk 1X spin the wheel.</li>
    <li>Khusus transaksi dengan Kartu Kredit OCBC.</li>
    <li>Maksimal split 3 struk.</li>
    <li>Hanya berlaku 1 kali penukaran per nasabah per hari.</li>
    <li>Hanya untuk penukaran struk di hari yang sama dengan transaksi.</li>
    <li>Hanya berlaku di Nyala Festival 2025.</li>
    <li>Maksimal untuk 170 orang pertama setiap hari.</li>
  </ul>
  <br>
  <a href="https://ocbc.id/90n" target="_blank"><button class="btn-custom-red" style="border: none;">Apply Kartu Kredit OCBC</button></a>
`,
};

const modal = document.getElementById("popupModal");
const modalBody = document.getElementById("popup-body");
const closeBtn = document.querySelector(".popup-close");

document.querySelectorAll(".popup-cuan").forEach((btn) => {
  btn.addEventListener("click", () => {
    const src = btn
      .closest(".col")
      .querySelector("img")
      .getAttribute("src")
      .split("/")
      .pop();
    modalBody.innerHTML = termsData[src] || "<p>Terms not available.</p>";
    modal.style.display = "flex";

    document.body.classList.add("modal-open");
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});
