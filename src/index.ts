import Board from "./Classes/Board";
import BoardRenderer from "./Classes/BoardRenderer";

// 13x31
const boardDOM: HTMLCanvasElement = document.getElementById(
  "board"
) as HTMLCanvasElement;

const board = new Board();
const boardRenderer = new BoardRenderer(board, boardDOM.getContext("2d"));

board.setBoardRenderer(boardRenderer);
