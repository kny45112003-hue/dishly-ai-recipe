/* =========================
     1) 재료 원본 데이터베이스
  ========================= */
const ingredientDB = {
  lettuce: {
    id: "lettuce",
    name: "양상추",
    image: "assets/icon/lettuce-icon.png",
    category: "vegetable",
    kcal: 15,
    expireDays: 7,
    type: "저칼로리",
  },
  cabbage: {
    id: "cabbage",
    name: "양배추",
    image: "assets/icon/cabbage-icon.png",
    category: "vegetable",
    kcal: 10,
    expireDays: 7,
    type: "저칼로리",
  },
  onion: {
    id: "onion",
    name: "양파",
    image: "assets/icon/onion-icon.png",
    category: "vegetable",
    kcal: 40,
    expireDays: 10,
    type: "채소",
  },
  green_onion: {
    id: "green_onion",
    name: "파",
    image: "assets/icon/pa-icon.png",
    category: "vegetable",
    kcal: 33,
    expireDays: 14,
    type: "채소",
  },
  pork: {
    id: "pork",
    name: "돼지고기",
    image: "assets/icon/pork-icon.png",
    category: "meat",
    kcal: 242,
    expireDays: 3,
    type: "육류",
  },
  tofu: {
    id: "tofu",
    name: "두부",
    image: "assets/icon/dupu-icon.png",
    category: "protein",
    kcal: 47,
    expireDays: 14,
    type: "단백질",
  },
  egg: {
    id: "egg",
    name: "계란",
    image: "assets/icon/egg-icon.png",
    category: "protein",
    kcal: 155,
    expireDays: 10,
    type: "단백질",
  },
  pepperPowder: {
    id: "pepperPowder",
    name: "고추가루",
    image: "assets/icon/pepper_powder-icon.png",
    category: "seasoning",
    kcal: 282,
    expireDays: 180,
    type: "조미료",
  },
  tomato: {
    id: "tomato",
    name: "토마토",
    image: "assets/icon/tomato-icon.png",
    category: "vegetable",
    kcal: 18,
    expireDays: 5,
    type: "저칼로리",
  },
  chickenBreast: {
    id: "chickenBreast",
    name: "닭가슴살",
    image: "assets/icon/chicken_breast-icon.png",
    category: "meat",
    kcal: 165,
    expireDays: 2,
    type: "고단백",
  },
  tortilla: {
    id: "tortilla",
    name: "또띠아",
    image: "assets/icon/tortilla-icon.png",
    category: "carb",
    kcal: 218,
    expireDays: 20,
    type: "탄수화물",
  },
  paprika: {
    id: "paprika",
    name: "파프리카",
    image: "assets/icon/paprika-icon.png",
    category: "vegetable",
    kcal: 31,
    expireDays: 7,
    type: "채소",
  },
};

/* =========================
     2) 박스 preset 데이터
     - 재료 자체가 아니라
       "어떤 상태로 보여줄지"를 관리
  ========================= */
const fridgeBoxData = [
  { ingredientId: "lettuce", state: "default" },
  { ingredientId: "onion", state: "default" },
  { ingredientId: "pork", state: "default" },
  { ingredientId: "egg", state: "default" },
  { ingredientId: "pepperPowder", state: "default" },
];

const recipeBoxData = [
  { ingredientId: "lettuce", state: "default" },
  { ingredientId: "tomato", state: "default" },
  { ingredientId: "chickenBreast", state: "default" },
  { ingredientId: "tortilla", state: "default" },
  { ingredientId: "paprika", state: "active" },
];

/* =========================
     3) 상태 class 반환
  ========================= */
function getBoxStateClass(state) {
  switch (state) {
    case "selected":
      return "is-selected";
    case "active":
      return "is-active";
    case "disabled":
      return "is-disabled";
    default:
      return "is-default";
  }
}

/* =========================
     4) 재료 박스 하나 생성
  ========================= */
function createIngredientBox(boxData) {
  const ingredient = ingredientDB[boxData.ingredientId];

  if (!ingredient) return "";

  return `
      <button
        class="ingredient-box ${getBoxStateClass(boxData.state)}"
        type="button"
        data-id="${ingredient.id}"
        aria-label="${ingredient.name}"
      >
        <img src="${ingredient.image}" alt="${ingredient.name}">
        <span>${ingredient.name}</span>
      </button>
    `;
}

/* =========================
     5) 재료 박스 리스트 렌더
  ========================= */
function renderIngredientBoxes(targetId, dataList) {
  const target = document.getElementById(targetId);
  if (!target) return;

  target.innerHTML = dataList.map(createIngredientBox).join("");
}

/* =========================
     6) 초기 렌더
  ========================= */
renderIngredientBoxes("fridgeBoxList", fridgeBoxData);
renderIngredientBoxes("recipeBoxList", recipeBoxData);

/* =========================
     7) 클릭 시 선택 상태 토글 예시
     - 필요 없으면 지워도 됨
  ========================= */
document.addEventListener("click", function (e) {
  const box = e.target.closest(".ingredient-box");
  if (!box) return;

  box.classList.toggle("is-selected");
});
// 방어코드
function createReadonlyIngredientBox(ingredientId) {
  const ingredient = ingredientDB[ingredientId];

  if (!ingredient) {
    console.warn("재료 없음:", ingredientId);
    return "";
  }

  return `
    <div class="ingredient-box is-default">
      <img src="${ingredient.image}" alt="${ingredient.name}">
      <span>${ingredient.name}</span>
    </div>
  `;
}
