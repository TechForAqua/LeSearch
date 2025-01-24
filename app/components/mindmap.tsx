"use client";

import { useCallback } from "react";
import ReactFlow, {
  type Node,
  type Edge,
  type Connection,
  useNodesState,
  useEdgesState,
  Controls,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    data: { label: "Welcome guide" },
    position: { x: 200, y: 50 },
    type: "default",
  },
  {
    id: "2",
    data: { label: "Keyboard shortcuts" },
    position: { x: 250, y: 180 },
    type: "default",
  },
  {
    id: "3",
    data: { label: "The Mechanisms of Nuclear Fission" },
    position: { x: 600, y: 50 },
    type: "default",
  },
  {
    id: "4",
    data: { label: "Prompts to get you started" },
    position: { x: 600, y: 180 },
    type: "default",
  },
];

const initialEdges: Edge[] = [];

export default function MindMap() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  return (
    <div className="max-w-full h-[600px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        proOptions={{ hideAttribution: true }}
        defaultEdgeOptions={{
          style: { stroke: "transparent" },
        }}
        className="border-none"
      >
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}

// Custom node component that matches the design
function CustomNode({ data }: { data: { label: string } }) {
  return (
    <div className="flex flex-col items-center gap-4 cursor-pointer">
      <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
      <div className="text-gray-600 group-hover:text-gray-900 transition-colors">
        {data.label}
      </div>
    </div>
  );
}

const nodeTypes = {
  default: CustomNode,
};
