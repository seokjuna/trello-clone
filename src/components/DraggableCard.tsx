import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) => props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  box-shadow: ${(props) => props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDraggableCardProps {
    toDo: string;
    index: number;
}

function DraggableCard({ toDo, index }: IDraggableCardProps) {
    console.log(toDo, "has been rendered");

    return (
        <Draggable draggableId={toDo} index={index} key={toDo}>
            {(magic, snapshot) => (
                <Card 
                    isDragging={snapshot.isDragging}
                    ref={magic.innerRef} 
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                >
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DraggableCard);