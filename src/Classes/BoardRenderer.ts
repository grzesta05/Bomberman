import Board from "./Board";

export default class BoardRenderer {
  private canvasContext: CanvasRenderingContext2D;
  private board: Board;

  constructor(board: Board, context: CanvasRenderingContext2D) {
    this.board = board;
    this.canvasContext = context;
  }

  public render() {
    // Render Initial Board
  }
}
