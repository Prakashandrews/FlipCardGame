import { CARD_PAIRS_VALUE } from "../constant";

export const CardList = () => {
  const arr = [];
  while (arr.length < CARD_PAIRS_VALUE) {
    const r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr.concat(arr);
};

export const ShuffleArray = array => {
  let arrayIndex = array.length,
    storeVal,
    indexVal;
  while (0 !== arrayIndex) {
    indexVal = Math.floor(Math.random() * arrayIndex);
    arrayIndex -= 1;
    storeVal = array[arrayIndex];
    array[arrayIndex] = array[indexVal];
    array[indexVal] = storeVal;
  }
  return array;
};
