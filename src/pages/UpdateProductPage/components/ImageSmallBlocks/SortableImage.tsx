import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ImageSmallBlocks from "./ImageSmallBlocks";

const SortableImage = ({
  name,
  selectedFiles,
  setSelectedFiles,
  src,
}: {
  name: string;
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  src: string;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: "none",
  };
  return (
    <div ref={setNodeRef} style={style}>
      <ImageSmallBlocks
        name={name}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        src={src}
        dragAttributes={attributes}
        dragListeners={listeners}
      />
    </div>
  );
};

export default SortableImage;
