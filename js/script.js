// 홈구역
// 현재상태
const calorieData = {
  current: 520,
  goal: 1610,
};

function updateStatusCard(data) {
  const current = data.current;
  const goal = data.goal;
  const remain = Math.max(goal - current, 0);

  const currentPercent = Math.min((current / goal) * 100, 100);
  const remainPercent = Math.min((remain / goal) * 100, 100);

  const currentText = document.getElementById("currentCalorie");
  const remainText = document.getElementById("remainCalorie");
  const currentGraph = document.getElementById("currentGraph");
  const remainGraph = document.getElementById("remainGraph");

  currentText.textContent = `${current}kcal`;
  remainText.textContent = `${remain}kcal`;

  currentGraph.style.setProperty("--progress", currentPercent);
  remainGraph.style.setProperty("--progress", remainPercent);
}

updateStatusCard(calorieData);

// 추천레시피
/* =========================
   추천 레시피 데이터
========================= */
const recipeDB = {
  saladWrap: {
    id: "saladWrap",
    name: "샐러드랩",
    kcal: 350,
    meal: "저녁",
    image: "assets/image/totia.png",
    nutrition: {
      carb: 57,
      protein: 21,
      fat: 22,
      sugar: 10,
      sodium: 8,
      carbGram: "61g",
      proteinGram: "21.9g",
      fatGram: "10.6g",
      sugarGram: "12g",
      sodiumGram: "320mg",
    },
  },
  saladPasta: {
    id: "saladPasta",
    name: "샐러드 파스타",
    kcal: 480,
    meal: "저녁",
    image: "assets/image/pasta2.png",
    nutrition: {
      carb: 52,
      protein: 18,
      fat: 30,
      carbGram: "58g",
      proteinGram: "19g",
      fatGram: "16g",
    },
  },
};

/* =========================
   홈 추천 레시피 리스트
========================= */
const homeRecommendRecipes = ["saladWrap", "saladPasta"];

/* =========================
   상단 추천 버튼 만들기
========================= */
function createRecommendChip(recipe, isActive = false) {
  return `
    <button
      class="recommend-chip ${isActive ? "is-active" : ""}"
      type="button"
      data-recipe-id="${recipe.id}"
    >
      <span class="recipe-name menu">${recipe.name}</span>
      <span class="recipe-kcal caption-1">${recipe.kcal}kcal</span>
    </button>
  `;
}

/* =========================
   빈 상태 카드
========================= */
function createEmptyNutritionPreview() {
  return `
    <div class="empty-preview">
      <p class="caption">레시피를 선택하면 영양정보가 표시됩니다.</p>
    </div>
  `;
}

/* =========================
   영양 카드 만들기
========================= */
function createNutritionPreview(recipe) {
  return `
    <div class="nutrition-preview-image">
      <img src="${recipe.image}" alt="${recipe.name}">
    </div>

    <div class="nutrition-preview-body">
      <div class="nutrition-preview-header">
        <div class="nutrition-preview-meal heading-3">${recipe.meal}</div>
        <div class="nutrition-preview-title caption-1">${recipe.name}</div>
      </div>

      <div class="nutrition-preview-content">
        <div class="nutrition-donut-wrap">
          <div
            class="nutrition-donut"
            style="
              --carb:${recipe.nutrition.carb};
              --protein:${recipe.nutrition.protein};
              --fat:${recipe.nutrition.fat};
            "
          >
            <div class="nutrition-donut-inner">
              ${recipe.kcal}<br>kcal
            </div>
          </div>
        </div>
  
        <div class="nutrition-meta">
  <div class="nutrition-meta-item caption">
    <span class="nutrition-meta-dot carb"></span>
    탄수화물 ${recipe.nutrition.carbGram}
  </div>

  <div class="nutrition-meta-item caption">
    <span class="nutrition-meta-dot protein"></span>
    단백질 ${recipe.nutrition.proteinGram}
  </div>

  <div class="nutrition-meta-item caption">
    <span class="nutrition-meta-dot fat"></span>
    지방 ${recipe.nutrition.fatGram}
  </div>

  <div class="nutrition-meta-item caption">
    <span class="nutrition-meta-dot sugar"></span>
    당분 ${recipe.nutrition.sugarGram}
  </div>

  <div class="nutrition-meta-item caption">
    <span class="nutrition-meta-dot sodium"></span>
    염분 ${recipe.nutrition.sodiumGram}
  </div>
</div>
      </div>
    </div>
  `;
}

/* =========================
   추천 레시피 렌더
========================= */
function renderRecommendRecipeSection() {
  const listTarget = document.getElementById("recommendRecipeList");
  const previewTarget = document.getElementById("nutritionPreviewCard");

  if (!listTarget || !previewTarget) return;

  // 처음에는 아무 버튼도 활성화하지 않음
  listTarget.innerHTML = homeRecommendRecipes
    .map((recipeId) => {
      const recipe = recipeDB[recipeId];
      return createRecommendChip(recipe, false);
    })
    .join("");

  // 처음에는 빈 상태로 표시
  previewTarget.innerHTML = createEmptyNutritionPreview();
}

/* =========================
   추천 레시피 클릭 이벤트
========================= */
document.addEventListener("click", function (e) {
  const chip = e.target.closest(".recommend-chip");
  if (!chip) return;

  const previewTarget = document.getElementById("nutritionPreviewCard");
  if (!previewTarget) return;

  const recipeId = chip.dataset.recipeId;
  const recipe = recipeDB[recipeId];
  if (!recipe) return;

  const isAlreadyActive = chip.classList.contains("is-active");

  // 일단 전부 비활성화
  document.querySelectorAll(".recommend-chip").forEach((btn) => {
    btn.classList.remove("is-active");
  });

  // 이미 열려있는 걸 다시 누르면 닫기
  if (isAlreadyActive) {
    previewTarget.innerHTML = createEmptyNutritionPreview();
    return;
  }

  // 새로 열기
  chip.classList.add("is-active");
  previewTarget.innerHTML = createNutritionPreview(recipe);
});

/* =========================
   초기 실행
========================= */
renderRecommendRecipeSection();

/* =========================
   비슷한 취향 추천 레시피 데이터
========================= */
const similarRecipeDB = [
  {
    id: "cabbageRoll",
    name: "양배추 롤",
    kcal: 300,
    image: "assets/image/roll.png",
    ingredients: ["cabbage", "onion", "pork", "egg"],
  },
  {
    id: "tofuRiceBowl",
    name: "순두부 덮밥",
    kcal: 350,
    image: "assets/image/dububam.png",
    ingredients: ["tofu", "green_onion", "onion", "pepperPowder"],
  },
];

function createReadonlyIngredientBox(ingredientId) {
  const ingredient = ingredientDB[ingredientId];
  if (!ingredient) return "";

  return `
    <div class="ingredient-box is-default" aria-label="${ingredient.name}">
      <img src="${ingredient.image}" alt="${ingredient.name}">
      <span>${ingredient.name}</span>
    </div>
  `;
}
function createSimilarRecipeCard(recipe) {
  return `
    <article class="similar-recipe-card">
      <div class="similar-recipe-top">
        <div class="similar-recipe-thumb">
          <img src="${recipe.image}" alt="${recipe.name}">
        </div>

        <div class="similar-recipe-info">
          <h3 class="similar-recipe-name heading-3">${recipe.name}</h3>
          <p class="similar-recipe-kcal caption-1">${recipe.kcal}kcal</p>
        </div>
      </div>

      <div class="similar-recipe-ingredients">
        ${recipe.ingredients.map(createReadonlyIngredientBox).join("")}
      </div>

      <div class="similar-recipe-action">
        <button class="recipe-add-btn" type="button" data-recipe-id="${recipe.id}">
          + 레시피 추가하기
        </button>
      </div>
    </article>
  `;
}

function renderSimilarRecipeSection() {
  const target = document.getElementById("similarRecipeList");
  if (!target) return;

  target.innerHTML = similarRecipeDB.map(createSimilarRecipeCard).join("");
}

renderSimilarRecipeSection();

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
