import { Bomb } from "./Bomb";
import { Position } from "./Position";

export type BoardState = {
  playerPosition: Position;
  wallPositions: Array<Position>;
  baloonPositions: Array<Position>;
  bombs: Array<Bomb>;
};
