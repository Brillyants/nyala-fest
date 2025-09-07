document.querySelectorAll(".box, .single-person").forEach((card) => {
  card.addEventListener("click", function () {
    const name = this.getAttribute("data-name");
    const speciality = this.getAttribute("data-speciality") || "";
    const bio =
      this.getAttribute("data-bio") ||
      "Tidak ada informasi tambahan yang tersedia.";
    const img = this.getAttribute("data-img");

    document.getElementById("speakerName").textContent = name;
    document.getElementById("speakerSpeciality").textContent = speciality;
    document.getElementById("speakerBio").innerHTML = bio;
    document.getElementById("speakerImage").src = img;

    new bootstrap.Modal(document.getElementById("speakerModal")).show();
  });
});
