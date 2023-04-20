import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  width: 300px;
  padding-top: 10px;
  padding: 20px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.boardColor};
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
    flex-grow: 1;
    background-color: ${(props) => props.isDraggingOver ? "pink" : props.isDraggingFormThis ? "red" : "blue"}
    transition: background-color 0.3s ease-in-out;
`;

interface IAreaProps {
    isDraggingFormThis: boolean;
    isDraggingOver: boolean
}

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(magic, snapshot) => (
                <Area
                    isDraggingOver={snapshot.isDraggingOver}
                    isDraggingFormThis={Boolean(snapshot.draggingFromThisWith)}
                    ref={magic.innerRef} 
                    {...magic.droppableProps}
                >
                    {toDos.map((toDo, index) => (
                    <DraggableCard key={toDo} index={index} toDo={toDo} />
                    ))}
                    {magic.placeholder}
                </Area>
                )}
            </Droppable>
        </Wrapper>
    );
}

export default Board;