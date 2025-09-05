import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = {
  DRAG_ITEM: "dragItem",
};

function DragItem({ item, isDropped }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.DRAG_ITEM,
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: !isDropped,
  });

  return (
    <div
      ref={drag}
      className={`p-2 m-2 border rounded bg-white shadow cursor-move flex flex-col items-center ${
        isDragging ? "opacity-50" : ""
      } ${isDropped ? "opacity-30" : ""}`}
      style={{ width: 100 }}
    >
      <img src={item.image} alt={item.label} className="w-16 h-16 mb-2" />
      <span className="text-sm">{item.label}</span>
    </div>
  );
}

function DropItem({ item, onDrop, droppedDragItem }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.DRAG_ITEM,
    drop: (dragged) => onDrop(item.id, dragged.id),
    canDrop: () => !droppedDragItem,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`p-2 m-2 border-2 rounded flex flex-col items-center justify-center bg-gray-100 min-h-[100px] min-w-[100px] ${
        isOver && canDrop ? "border-green-500" : "border-gray-300"
      }`}
      style={{ width: 120, height: 120 }}
    >
      <img src={item.image} alt={item.label} className="w-16 h-16 mb-2" />
      <span className="text-sm">{item.label}</span>
      {droppedDragItem && (
        <div className="mt-2 text-green-600 font-bold">{droppedDragItem.label}</div>
      )}
    </div>
  );
}

export default function DragDropQuiz({ dragItems, dropItems, correctMatches }) {
  // correctMatches: { [dropItemId]: dragItemId }
  const [dropped, setDropped] = useState({}); // { [dropItemId]: dragItem }

  const handleDrop = (dropId, dragId) => {
    const dragItem = dragItems.find((d) => d.id === dragId);
    setDropped((prev) => ({ ...prev, [dropId]: dragItem }));
  };

  const isCorrect = (dropId) =>
    dropped[dropId] && correctMatches[dropId] === dropped[dropId].id;

  const allAnswered = Object.keys(correctMatches).every((dropId) => dropped[dropId]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Drag and Drop Quiz</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          {dragItems.map((item) => (
            <DragItem
              key={item.id}
              item={item}
              isDropped={Object.values(dropped).some((d) => d?.id === item.id)}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {dropItems.map((item) => (
            <DropItem
              key={item.id}
              item={item}
              onDrop={handleDrop}
              droppedDragItem={dropped[item.id]}
            />
          ))}
        </div>
        {allAnswered && (
          <div className="mt-6 text-lg font-semibold">
            Score:{" "}
            {
              Object.keys(correctMatches).filter((dropId) => isCorrect(dropId))
                .length
            }{" "}
            / {Object.keys(correctMatches).length}
          </div>
        )}
      </div>
    </DndProvider>
  );
}