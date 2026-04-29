document.addEventListener("DOMContentLoaded", function () {
  // 모바일과 데스크탑 메뉴를 한꺼번에 처리하는 안전한 함수
  function setupMenu(itemsSelector, iconSelector) {
    const items = document.querySelectorAll(itemsSelector);

    items.forEach((item) => {
      const img = item.querySelector(iconSelector);
      if (!img) return; // 이미지가 없으면 무시

      // dataset 값을 가져올 때 값이 없으면 기존 src를 유지하도록 보호
      const defaultSrc = item.dataset.default || img.src;
      const hoverSrc = item.dataset.hover || defaultSrc;
      const activeSrc = item.dataset.active || defaultSrc;

      // hover
      item.addEventListener("mouseenter", () => {
        if (!item.classList.contains("is-active") && hoverSrc !== "undefined") {
          img.src = hoverSrc;
        }
      });

      // hover 해제
      item.addEventListener("mouseleave", () => {
        if (!item.classList.contains("is-active")) {
          img.src = defaultSrc;
        }
      });

      // 클릭 (페이지 이동이 있는 경우 클릭 이벤트는 신중해야 합니다)
      item.addEventListener("click", () => {
        // 현재 페이지가 이동되는 구조라면 아래 classList 조작이 의미 없을 수 있음
        // 만약 SPA가 아니라면 이 클릭 이벤트는 지우는게 더 안전할 수 있습니다.
      });
    });
  }

  // 실행
  setupMenu(".bottom-nav-item", ".bottom-nav-icon");
  setupMenu(".desktop-menu-item", ".desktop-menu-icon");
});

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("calendarGrid");

  // 2026년 4월 기준 예시 데이터 (실제로는 날짜 계산 로직 사용)
  const totalDays = 30; // 4월은 30일까지
  const startDay = 3; // 2026년 4월 1일은 수요일(0:일, 3:수)

  let html = "";

  // 1. 이전 달 빈칸 채우기
  for (let i = 0; i < startDay; i++) {
    html += `<div class="calendar-date prev-month"></div>`;
  }

  // 2. 이번 달 날짜 채우기
  for (let day = 1; day <= totalDays; day++) {
    let activeClass = day === 29 ? "is-active" : ""; // 시안처럼 29일 강조
    let recordClass = day === 15 || day === 20 ? "has-record" : ""; // 기록 점 예시

    html += `
            <div class="calendar-date ${activeClass} ${recordClass}">
                <span>${day}</span>
            </div>
        `;
  }

  grid.innerHTML = html;
});

const recordCalorieData = {
  current: 770,
  goal: 2000,
};

function updateSingleRecordStatus(data) {
  const current = data.current;
  const goal = data.goal;

  // 퍼센트 계산 (0~100 사이로 제한)
  let percent = (current / goal) * 100;
  if (percent > 100) percent = 100;
  if (percent < 0) percent = 0;

  // 1. 숫자 텍스트 업데이트
  const calorieElement = document.getElementById("recordCurrentCalorie");
  if (calorieElement) calorieElement.textContent = current.toLocaleString(); // 천단위 콤마 추가

  // 2. 통합 도넛 그래프 업데이트 (단위 없이 숫자만 전달)
  const totalGraph = document.getElementById("recordTotalGraph");
  if (totalGraph) {
    // --progress 변수에 숫자 값을 직접 주입
    totalGraph.style.setProperty("--progress", percent.toFixed(1));
  }

  // 3. 목표 바 업데이트
  const goalBar = document.getElementById("recordGoalBar");
  if (goalBar) {
    goalBar.style.width = `${percent}%`;
  }
}

// 페이지 로드 시 실행
window.onload = function () {
  updateSingleRecordStatus(recordCalorieData);
};
