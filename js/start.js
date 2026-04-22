document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".start-btn-primary");
  const guestBtn = document.querySelector(".start-btn-secondary");

  // 로그인 / 회원가입 버튼
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      location.href = "login.html";
    });
  }

  // 게스트 버튼
  if (guestBtn) {
    guestBtn.addEventListener("click", () => {
      location.href = "home.html";
    });
  }
});
