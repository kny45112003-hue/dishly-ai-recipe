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
