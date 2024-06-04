import { Position } from "./Position";

export enum BOMB_STATE {
  PLACED,
  EXPLODED,
}

export type Bomb = {
  position: Position;
  state: BOMB_STATE;
};
