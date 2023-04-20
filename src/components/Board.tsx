import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  padding-top: 30px;
  padding: 20px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.boardColor};
  min-height: 200px;
`;

interface IBoardProps {
    toDos: string[];
    boardId: string;
  }

function Board({ toDos, boardId }: IBoardProps) {
    return (
        <Droppable droppableId={boardId}>
            {(magic, snapshot) => (
              <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <DraggableCard key={toDo} index={index} toDo={toDo} />
                ))}
                {magic.placeholder}
              </Wrapper>
            )}
          </Droppable>
    );
}

export default Board;