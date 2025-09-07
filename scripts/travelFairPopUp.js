const termsData = {
  "icon_travel_fair_4_8fb53bf315.png": `
    <h2><b>Cashback hingga Rp9 juta</b></h2>
    <ul>
      <li>Berlaku untuk pembelian tiket & tour package.</li>
      <li>Cashback diberikan dalam bentuk e-voucher.</li>
      <li>Minimal transaksi Rp15 juta.</li>
      <li>Promo berlaku hingga 30 September 2025.</li>
      <li>Berlaku untuk pembelian tiket & tour package.</li>
      <li>Cashback diberikan dalam bentuk e-voucher.</li>
      <li>Minimal transaksi Rp15 juta.</li>
      <li>Promo berlaku hingga 30 September 2025.</li>
      <li>Berlaku untuk pembelian tiket & tour package.</li>
      <li>Cashback diberikan dalam bentuk e-voucher.</li>
      <li>Minimal transaksi Rp15 juta.</li>
      <li>Promo berlaku hingga 30 September 2025.</li>
    </ul>
  `,
  "icon_travel_fair_3_26b7b5d769.png": `
    <h2><b>Panorama JTB</b></h2>
    <ul>
      <li>Diskon Rp5,5 juta untuk tour internasional.</li>
      <li>Berlaku untuk destinasi tertentu.</li>
      <li>Tidak dapat digabungkan dengan promo lain.</li>
    </ul>
  `,
  "logo_garuda_indonesia_c831b2206e.png": `
    <h2><b>Garuda Indonesia</b></h2>
    <ul>
      <li>Voucher diskon 20% GarudaMiles Redemption.</li>
      <li>Hanya berlaku di booth Garuda Indonesia.</li>
      <li>Syarat & ketentuan Garuda berlaku.</li>
    </ul>
  `,
};

const modal = document.getElementById("popupModal");
const modalBody = document.getElementById("popup-body");
const closeBtn = document.querySelector(".popup-close");

document.querySelectorAll(".cc-feature-img").forEach((img) => {
  img.addEventListener("click", () => {
    const src = img.getAttribute("src").split("/").pop();
    modalBody.innerHTML = termsData[src] || "<p>Terms not available.</p>";
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
