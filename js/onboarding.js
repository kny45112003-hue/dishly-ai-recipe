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
    location.href = "index.html";
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

// 온보딘-2
document.addEventListener("DOMContentLoaded", function () {
  // 모든 chip 버튼을 가져옵니다.
  const chips = document.querySelectorAll(".chip");

  chips.forEach((chip) => {
    chip.addEventListener("click", function () {
      // 클릭할 때마다 active 클래스를 넣었다 뺐다 합니다. (다중 선택 가능)
      this.classList.toggle("active");

      /* 만약 카테고리당 '하나만' 선택되게 하고 싶다면?
         아래 주석을 풀고 사용하세요.
      */
      /*
      const siblings = this.parentElement.querySelectorAll('.chip');
      siblings.forEach(s => s.classList.remove('active'));
      this.classList.add('active');
      */
    });
  });
});

// 온보딩-3
document.addEventListener("DOMContentLoaded", function () {
  const scanBtn = document.getElementById("scanBtn");
  const cameraIcon = document.getElementById("cameraIcon");

  // 이미지 경로 설정 (실제 경로에 맞게 수정하세요)
  const defaultIcon = "assets/icon/camra-icon.png";
  const whiteIcon = "assets/icon/camra-icon-chose.png";

  if (scanBtn && cameraIcon) {
    // 1. 마우스를 누를 때 (Down) -> 파란 배경 + 흰색 아이콘
    scanBtn.addEventListener("mousedown", function () {
      this.classList.add("active");
      cameraIcon.src = whiteIcon;
    });

    // 2. 마우스를 뗄 때 (Up) -> 다시 원래대로
    scanBtn.addEventListener("mouseup", function () {
      this.classList.remove("active");
      cameraIcon.src = defaultIcon;
    });

    // 3. 마우스가 버튼 밖으로 나갈 때 대비
    scanBtn.addEventListener("mouseleave", function () {
      this.classList.remove("active");
      cameraIcon.src = defaultIcon;
    });
  }
});
