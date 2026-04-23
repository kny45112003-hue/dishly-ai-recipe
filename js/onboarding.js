// onboarding.js

// 옵션 선택 함수
function selectOption(element) {
  // 같은 그룹 내의 다른 active 클래스 제거
  const cards = document.querySelectorAll(".option-card");
  cards.forEach((card) => card.classList.remove("is-active"));

  // 클릭한 카드에 active 클래스 추가
  element.classList.add("is-active");
}

// "준비 완료!" 마지막 페이지(onboarding5)에서 메인으로 이동할 때
const startBtn = document.querySelector(".start-service-btn");
if (startBtn) {
  startBtn.addEventListener("click", () => {
    location.href = "home.html";
  });
}

// 온보딩-1
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".goal-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => {
        c.classList.remove("active");

        const img = c.querySelector(".goal-icon");
        img.src = c.dataset.default;
      });

      card.classList.add("active");

      const selectedImg = card.querySelector(".goal-icon");
      selectedImg.src = card.dataset.active;
    });
  });
});
