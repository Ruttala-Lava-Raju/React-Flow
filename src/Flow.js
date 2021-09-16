import React from "react";
import ReactFlow from "react-flow-renderer";
import { getElements } from "./Elements";

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView();
  console.log(reactFlowInstance.getElements());
};

const elements = getElements();

const EdgeTypesFlow = () => {

  return (
    <ReactFlow elements={elements} onLoad={onLoad} minZoom={0.2}></ReactFlow>
  );
};

export default EdgeTypesFlow;
