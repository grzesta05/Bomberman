import BoardRenderer from "./BoardRenderer";
import { BoardState } from "./Types/BoardState";
import { Bomb } from "./Types/Bomb";
import { Position } from "./Types/Position";

export default class Board {
  public size = [390, 930];
  public blockSize = [13, 31];

  public bombs: Array<Bomb>;
  public walls: Array<Position>;
  public balloons: Array<Position>;
  public player: Position;

  private boardRenderer: BoardRenderer;

  public setBoardRenderer(boardRenderer: BoardRenderer) {
    this.boardRenderer = boardRenderer;
  }

  public updateBoard(board: BoardState) {
    this.bombs = board.bombs;
    this.balloons = board.baloonPositions;
    this.player = board.playerPosition;
    this.walls = board.wallPositions;

    this.boardRenderer.render();
  }
}
