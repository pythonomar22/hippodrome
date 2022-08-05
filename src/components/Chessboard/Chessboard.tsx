import { useRef, useState } from "react"
import Tile from "../Tile/Tile";
import './Chessboard.css'
import Referee from "../../referee/Referee"

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"]
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]

interface Piece{
    image: string;
    x: number;
    y: number;
    type: PieceType;
}

export enum PieceType{
    PAWN,
    BISHOP,
    KNIGHT,
    ROOK,
    QUEEN,
    KING
}

const initialBoardState: Piece[] = [];



for (let i = 0; i < 8; i++){
    initialBoardState.push({image: "assets/images/bp.png", x: i, y: 6, type: PieceType.PAWN})
}

for (let i = 0; i < 8; i++){
    initialBoardState.push({image: "assets/images/wp.png", x: i, y: 1, type: PieceType.PAWN})
}

initialBoardState.push({image: "assets/images/bB.png", x: 2, y: 7, type: PieceType.BISHOP})
initialBoardState.push({image: "assets/images/bK.png", x: 4, y: 7, type:PieceType.KING})
initialBoardState.push({image: "assets/images/bN.png", x: 1, y: 7, type:PieceType.KNIGHT})
initialBoardState.push({image: "assets/images/bQ.png", x: 3, y: 7, type:PieceType.QUEEN})
initialBoardState.push({image: "assets/images/bR.png", x: 0, y: 7, type:PieceType.ROOK})

initialBoardState.push({image: "assets/images/bB.png", x: 5, y: 7, type: PieceType.BISHOP})
initialBoardState.push({image: "assets/images/bN.png", x: 6, y: 7, type:PieceType.KNIGHT})
initialBoardState.push({image: "assets/images/bR.png", x: 7, y: 7, type:PieceType.ROOK})

initialBoardState.push({image: "assets/images/wK.png", x: 4, y: 0, type:PieceType.KING})
initialBoardState.push({image: "assets/images/wB.png", x: 2, y: 0, type: PieceType.BISHOP})
initialBoardState.push({image: "assets/images/wQ.png", x: 3, y: 0, type:PieceType.QUEEN})
initialBoardState.push({image: "assets/images/wN.png", x: 1, y: 0, type:PieceType.KNIGHT})
initialBoardState.push({image: "assets/images/wR.png", x: 0, y: 0, type:PieceType.ROOK})

initialBoardState.push({image: "assets/images/wB.png", x: 5, y: 0, type: PieceType.BISHOP})
initialBoardState.push({image: "assets/images/wN.png", x: 6, y: 0, type:PieceType.KNIGHT})
initialBoardState.push({image: "assets/images/wR.png", x: 7, y: 0, type:PieceType.ROOK})



export default function Chessboard() {
    const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
    const [gridX, setGridX] = useState(0);
    const [gridY, setGridY] = useState(0);
    const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
    const chessboardRef = useRef<HTMLDivElement>(null);
    const referee = new Referee();
  
    function grabPiece(e: React.MouseEvent) {
      const element = e.target as HTMLElement;
      const chessboard = chessboardRef.current;
      if (element.classList.contains("chess-piece") && chessboard) {
        setGridX(Math.floor((e.clientX - chessboard.offsetLeft) / 100));
        setGridY(Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100)));
  
        const x = e.clientX - 50;
        const y = e.clientY - 50;
        element.style.position = "absolute";
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
  
        setActivePiece(element);
      }
    }
    function movePiece(e: React.MouseEvent){
        const chessboard = chessboardRef.current;
        if (activePiece && chessboard){
            const minX = chessboard.offsetLeft-25;
            const minY = chessboard.offsetTop-25;
            const maxX = chessboard.offsetLeft + chessboard.clientWidth -75;
            const maxY = chessboard.offsetTop + chessboard.clientHeight -75;
            const x = e.clientX - 50;
            const y = e.clientY - 50;
            activePiece.style.position = "absolute";
            //activePiece.style.left = `${x}px`;
            //activePiece.style.top = `${y}px`;

            if (x < minX){
                activePiece.style.left = `${minX}px`;
            }
            else if(x > maxX){
                activePiece.style.left = `${maxX}px`;
            }
            else{
                activePiece.style.left = `${x}px`;
            }

            
            if (y < minY){
                activePiece.style.top = `${minY}px`;
            }
            else if(y>maxY){
                activePiece.style.top = `${maxY}px`;
            }
            else{
                activePiece.style.top = `${y}px`;
            }
        }
    }

    function dropPiece(e: React.MouseEvent){
        const chessboard = chessboardRef.current;
        if(activePiece && chessboard){
            const x = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
            const y = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop-800) / 100));

            setPieces((value) => {
                const pieces = value.map(p => {
                    if (p.x === gridX && p.y === gridY){
                        referee.isValidMove(gridX, gridY, x, y, p.type);
                        p.x = x;
                        p.y = y;  
                    }
                    return p;
                })
                return pieces;
            })
            setActivePiece(null);
        }
    }

    let board = [];

    for (let j = verticalAxis.length-1; j >= 0; j--){
        for (let i = 0; i < horizontalAxis.length; i++){
            const number = j + i + 2;
            let image = undefined;
            pieces.forEach(p => {
                if (p.x === i && p.y === j){
                    image = p.image;
                }
            })
            
            board.push(<Tile key={`${j},${i}`}image={image} number = {number}/>) 
        }
    }
    return (
        <div 
            onMouseMove={e => movePiece(e)}
            onMouseDown = {e => grabPiece(e)} 
            onMouseUp = {e => dropPiece(e)}
            id = "chessboard"
            ref={chessboardRef}
            >
                {board}
        </div>
    );
}