export function initializeModalLogic() {
  const form = document.getElementById("member-form");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const reservationInfo = document.getElementById("reservation-info");
  const closeModal = document.getElementById("close-modal");

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const member = document.querySelector('input[name="member"]:checked')?.value || "未選擇";
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    const time = document.querySelector('input[name="time"]:checked')?.value || "未選擇";
    const location = document.getElementById("location").value;
    const program = document.getElementById("program").value;

    reservationInfo.innerHTML = `
      <strong>姓名:</strong> ${username}<br>
      <strong>性別:</strong> ${member}<br>
      <strong>電話:</strong> ${tel}<br>
      <strong>信箱:</strong> ${email}<br>
      <strong>時段:</strong> ${time}<br>
      <strong>據點:</strong> ${location}<br>
      <strong>方案:</strong> ${program}
    `;

    modal.style.display = "block";
    overlay.style.display = "block";
  };

  const closeModalHandler = () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  };

  form.addEventListener("submit", handleSubmit);
  closeModal.addEventListener("click", closeModalHandler);
  overlay.addEventListener("click", closeModalHandler);
}
