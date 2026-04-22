document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");
  const signupBtn = document.querySelector(".signup-btn");

  // 로그인 → 온보딩
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      location.href = "onboarding.html"; // 👈 여기 변경
    });
  }

  // 회원가입 → 멤버십 페이지
  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      location.href = "membership.html";
    });
  }
});
