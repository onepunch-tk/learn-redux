import { legacy_createStore } from "redux";

/*store 란? data(state)를 넣는 곳.*/
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

/*legacy redux*/
const INCREASE = "increase";
const DECREASE = "decrease";
const countReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE:
      return ++state;
    case DECREASE:
      return --state;
    default:
      return state;
  }
}; //state 를 업데이트하는 함수
const countStore = legacy_createStore(countReducer); //store <-- state 저장소
countStore.subscribe(() => {
  number.innerText = countStore.getState();
}); //state 가 update 되면 호출되는 subscribe(state 를 주시하고 있다.)
add.addEventListener("click", () => countStore.dispatch({ type: INCREASE }));
minus.addEventListener("click", () => countStore.dispatch({ type: DECREASE }));

/*origin*/
// let count = 0;
// const updateText = () => {
//   number.innerText = count;
// };
// updateText();
// const handleAdd = () => {
//   count++;
//   updateText();
// };
// const handleMinus = () => {
//   count--;
//   updateText();
// };
// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
