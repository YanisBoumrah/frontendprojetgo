import { useEffect, useRef } from "react";
import WGo from "wgo";

const GoBoard = ({ sgfData, onMove }: { sgfData: string; onMove: (x: number, y: number) => void }) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const player = useRef<WGo.Player | null>(null);

  useEffect(() => {
    if (!boardRef.current) return;

    const board = new WGo.Board(boardRef.current, {
      width: 400,
      section: {
        top: -0.5,
        left: -0.5,
        right: -0.5,
        bottom: -0.5,
      },
    });

    player.current = new WGo.Player(board, {
      sgf: sgfData,
      update: true,
    });

    const handleClick = (x: number, y: number) => {
      if (player.current?.kifuReader.game.turn === WGo.B) {
        onMove(x, y);
      }
    };

    board.addEventListener("click", handleClick);

    return () => {
      player.current?.kifuReader.stop();
      board.removeEventListener("click", handleClick);
    };
  }, [sgfData, onMove]);

  return <div ref={boardRef} />;
};

export default GoBoard;
