import { createSlice } from "@reduxjs/toolkit";
import success from "../../assets/sound/success.mp3";
import errorSound from "../../assets/sound/error.mp3";

const initialState = {
  dataGame: null,
  itemSelected: { item1: "", item2: "" },
  hits: 0,
  errors: 0,
  error: false,
  itemsSuccefull: [],
};

export const MemoryGameSlice = createSlice({
  name: "memoryGame",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.dataGame = action.payload;
    },
    getItems: (state, action) => {
      const errorMove = new Audio(errorSound);
      errorMove.volume = 0.1;
      const successMove = new Audio(success);
      successMove.volume = 0.1;
      state.error = false;
      state.accurate = false;
      const item = action.payload;
      const { item1, item2 } = state.itemSelected;

      if (!item1) {
        state.itemSelected.item1 = item;
      } else if (!item2) {
        if (item1 === item) {
          state.hits++;
          successMove.play();
          state.itemsSuccefull.push(item);
        } else {
          state.errors++;
          state.error = true;
          errorMove.play();
        }
        state.itemSelected.item1 = "";
        state.itemSelected.item2 = "";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { getItems, getData } = MemoryGameSlice.actions;

export const fetchData = () => (dispatch) => {
  let todo;
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20",
    requestOptions
  )
    .then((response) => response.json())
    .then(
      (result) => (
        (todo = [...result.entries, ...result.entries]),
        dispatch(
          getData(
            todo.sort(() => {
              return Math.random() - 0.5;
            })
          )
        )
      )
    )
    .catch((error) => console.log("error", error));
};

export default MemoryGameSlice.reducer;
