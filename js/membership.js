document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector(".login-form");
  const loginBtn = document.querySelector(".login-btn"); // '완료' 버튼

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // 입력값 가져오기
      const nickname = signupForm
        .querySelector('input[name="nickname"]')
        .value.trim();
      const email = signupForm
        .querySelector('input[name="email"]')
        .value.trim();
      const password = signupForm.querySelector('input[name="password"]').value;
      const passwordConfirm = signupForm.querySelector(
        'input[name="password-confirm"]',
      ).value;

      // 1. 빈칸 검사
      if (!nickname || !email || !password || !passwordConfirm) {
        alert("모든 항목을 입력해주세요.");
        return;
      }

      // 2. 비밀번호 일치 확인
      if (password !== passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
        // 비밀번호 확인 칸 초기화 및 포커스
        signupForm.querySelector('input[name="password-confirm"]').value = "";
        signupForm.querySelector('input[name="password-confirm"]').focus();
        return;
      }

      // 3. 가입 성공 시뮬레이션
      alert(`${nickname}님, 환영합니다! 가입이 완료되었습니다.`);

      // 가입 완료 후 로그인 페이지나 온보딩 시작 페이지로 이동
      location.href = "onboarding.html";
    });
  }
});
