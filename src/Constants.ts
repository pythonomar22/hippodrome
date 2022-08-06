export const VERTICAL_AXIS = ["1", "2", "3", "4"];
export const HORIZONTAL_AXIS = ["a", "b", "c", "d"];

export const GRID_SIZE = 150;

export function samePosition(p1: Position, p2: Position) {
  return p1.x === p2.x && p1.y === p2.y;
}

export interface Position {
  x: number;
  y: number;
}

export enum PieceType {
  PAWN,
  BISHOP,
  KNIGHT,
  ROOK,
  QUEEN,
  KING,
}

export enum TeamType {
  OPPONENT,
  OUR,
}

export interface Piece {
  image: string;
  position: Position;
  type: PieceType;
  team: TeamType;
  enPassant?: boolean;
}

var random_array = new Array(4).fill(0).map((a, i) => a = i).sort(() => Math.random() - 0.5);
var random_array2 = new Array(4).fill(0).map((a, i) => a = i).sort(() => Math.random() - 0.5);
for (let i = 0; i < random_array2.length; i++){
  if (random_array2[i] === 0){
      random_array2.splice(i, 1)
  }
}




export const initialBoardState: Piece[] = [
  {
    image: `assets/images/rook_b.png`,
    position: {
      x: random_array[0],
      y: random_array2[0],
    },
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/knight_b.png`,
    position: {
      x: 0,
      y: 0,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/bishop_b.png`,
    position: {
      x: random_array[3],
      y: random_array2[1],
    },
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/queen_b.png`,
    position: {
      x: random_array[0],
      y: random_array2[1],
    },
    type: PieceType.QUEEN,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/king_b.png`,
    position: {
      x: random_array[2],
      y: random_array2[1],
    },
    type: PieceType.KING,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/bishop_b.png`,
    position: {
      x: random_array[1],
      y: random_array2[0],
    },
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/knight_b.png`,
    position: {
      x: 2,
      y: 0,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/rook_b.png`,
    position: {
      x: random_array[2],
      y: random_array2[2],
    },
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
  },

  {
    image: `assets/images/rook_w.png`,
    position: {
      x: random_array[1],
      y: random_array2[2],
    },
    type: PieceType.ROOK,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/knight_w.png`,
    position: {
      x: 1,
      y: 0,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/bishop_w.png`,
    position: {
      x: random_array[2],
      y: random_array2[0],
    },
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/queen_w.png`,
    position: {
      x: random_array[1],
      y: random_array2[1],
    },
    type: PieceType.QUEEN,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/king_w.png`,
    position: {
      x: random_array[3],
      y: random_array2[2],
    },
    type: PieceType.KING,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/bishop_w.png`,
    position: {
      x: random_array[0],
      y: random_array2[2],
    },
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/knight_w.png`,
    position: {
      x: 3,
      y: 0,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
];