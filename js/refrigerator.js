// 메뉴바
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".bottom-nav-item");

  navItems.forEach((item) => {
    const img = item.querySelector(".bottom-nav-icon");

    const defaultSrc = item.dataset.default;
    const hoverSrc = item.dataset.hover;
    const activeSrc = item.dataset.active;

    // hover
    item.addEventListener("mouseenter", () => {
      if (!item.classList.contains("is-active")) {
        img.src = hoverSrc;
      }
    });

    // hover 해제
    item.addEventListener("mouseleave", () => {
      if (!item.classList.contains("is-active")) {
        img.src = defaultSrc;
      }
    });

    // 클릭 시 선택
    item.addEventListener("click", () => {
      navItems.forEach((nav) => {
        nav.classList.remove("is-active");

        const navImg = nav.querySelector(".bottom-nav-icon");
        navImg.src = nav.dataset.default;
      });

      item.classList.add("is-active");
      img.src = activeSrc;
    });
  });
});

// 데스크탑 메뉴바
document.addEventListener("DOMContentLoaded", function () {
  const desktopMenuItems = document.querySelectorAll(".desktop-menu-item");

  desktopMenuItems.forEach((item) => {
    const img = item.querySelector(".desktop-menu-icon");
    if (!img) return;

    const defaultSrc = item.dataset.default;
    const hoverSrc = item.dataset.hover;
    const activeSrc = item.dataset.active;

    item.addEventListener("mouseenter", () => {
      if (!item.classList.contains("is-active")) {
        img.src = hoverSrc;
      }
    });

    item.addEventListener("mouseleave", () => {
      if (!item.classList.contains("is-active")) {
        img.src = defaultSrc;
      }
    });

    item.addEventListener("click", () => {
      desktopMenuItems.forEach((menu) => {
        menu.classList.remove("is-active");
        const menuImg = menu.querySelector(".desktop-menu-icon");
        if (menuImg) {
          menuImg.src = menu.dataset.default;
        }
      });

      item.classList.add("is-active");
      img.src = activeSrc;
    });
  });
});
