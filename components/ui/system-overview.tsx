import { forwardRef, useCallback, useLayoutEffect, useRef, useState } from "react";
import type { CapabilityDetail, SystemOverview as SystemOverviewData } from "../../data/content";
import CapabilityTag from "./capability-tag";

type Props = {
  overview: SystemOverviewData;
  activeDetailKey: string | null;
  onDetailToggle: (id: string | null) => void;
};

export default function SystemOverview({ overview, activeDetailKey, onDetailToggle }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRailRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<HTMLDivElement | null>(null);
  const outputRailRef = useRef<HTMLDivElement | null>(null);
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [canvas, setCanvas] = useState({ width: 0, height: 0 });
  const [paths, setPaths] = useState<string[]>([]);

  const measure = useCallback(() => {
    const root = rootRef.current;
    const inputRail = inputRailRef.current;
    const engine = engineRef.current;
    const outputRail = outputRailRef.current;
    const context = contextRef.current;
    if (!root || !inputRail || !engine || !outputRail || !context) return;

    const rootRect = root.getBoundingClientRect();
    const relativeRect = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return {
        left: rect.left - rootRect.left,
        right: rect.right - rootRect.left,
        top: rect.top - rootRect.top,
        bottom: rect.bottom - rootRect.top,
        centerX: rect.left - rootRect.left + rect.width / 2,
        centerY: rect.top - rootRect.top + rect.height / 2,
      };
    };
    const inputNodes = [...inputRail.querySelectorAll<HTMLElement>("[data-system-node]")].map(relativeRect);
    const outputNodes = [...outputRail.querySelectorAll<HTMLElement>("[data-system-node]")].map(relativeRect);
    const engineRect = relativeRect(engine);
    const contextRect = relativeRect(context);
    if (!inputNodes.length || !outputNodes.length) return;

    const nextPaths: string[] = [];
    const inputSpineX = (inputNodes[0].right + engineRect.left) / 2;
    const outputSpineX = (engineRect.right + outputNodes[0].left) / 2;

    inputNodes.forEach((node) => nextPaths.push(`M ${node.right} ${node.centerY} H ${inputSpineX}`));
    nextPaths.push(
      `M ${inputSpineX} ${inputNodes[0].centerY} V ${inputNodes.at(-1)?.centerY ?? inputNodes[0].centerY}`,
      `M ${inputSpineX} ${engineRect.centerY} H ${engineRect.left}`
    );

    outputNodes.forEach((node) => nextPaths.push(`M ${outputSpineX} ${node.centerY} H ${node.left}`));
    nextPaths.push(
      `M ${outputSpineX} ${outputNodes[0].centerY} V ${outputNodes.at(-1)?.centerY ?? outputNodes[0].centerY}`,
      `M ${engineRect.right} ${engineRect.centerY} H ${outputSpineX}`
    );

    // Connect the lowest horizontal routes to the context pill's vertical center.
    const contextRouteY = contextRect.centerY;
    const inputLast = inputNodes.at(-1) ?? inputNodes[0];
    const outputLast = outputNodes.at(-1) ?? outputNodes[0];
    nextPaths.push(
      `M ${inputLast.centerX} ${inputLast.bottom} V ${contextRouteY} H ${contextRect.left}`,
      `M ${outputLast.centerX} ${outputLast.bottom} V ${contextRouteY} H ${contextRect.right}`
    );

    setCanvas({ width: rootRect.width, height: rootRect.height });
    setPaths(nextPaths);
  }, []);

  useLayoutEffect(() => {
    measure();
    const root = rootRef.current;
    if (!root) return;
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(root);
    return () => resizeObserver.disconnect();
  }, [measure]);

  return (
    <div ref={rootRef} className="system-overview">
      {canvas.width > 0 && (
        <svg
          className="system-overview__connector-layer"
          viewBox={`0 0 ${canvas.width} ${canvas.height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {paths.map((path, index) => (
            <path key={`${path}-${index}`} className="system-overview__connector" d={path} />
          ))}
        </svg>
      )}

      <div className="system-overview__layout">
        <NodeRail
          ref={inputRailRef}
          label="USER INPUT"
          nodes={overview.inputNodes}
          side="left"
          activeDetailKey={activeDetailKey}
          onDetailToggle={onDetailToggle}
        />
        <div ref={engineRef} className="system-overview__engine">
          <span>{overview.engineLabel}</span>
        </div>
        <NodeRail
          ref={outputRailRef}
          label="PRODUCT OUTPUT"
          nodes={overview.outputNodes}
          side="right"
          activeDetailKey={activeDetailKey}
          onDetailToggle={onDetailToggle}
        />
      </div>

      <div ref={contextRef} className="system-overview__context-anchor">
        <span className="system-overview__context-pill">{overview.contextLabel}</span>
      </div>
    </div>
  );
}

type NodeRailProps = {
  label: string;
  nodes: readonly CapabilityDetail[];
  side: "left" | "right";
  activeDetailKey: string | null;
  onDetailToggle: (id: string | null) => void;
};

const NodeRail = forwardRef<HTMLDivElement, NodeRailProps>(function NodeRail(
  { label, nodes, side, activeDetailKey, onDetailToggle },
  ref
) {
  return (
    <div ref={ref} className="system-overview__rail">
      <p className="system-overview__rail-label">{label}</p>
      <div className="system-overview__nodes">
        {nodes.map((node) => {
          const detailKey = `system-${node.id}`;
          return (
            <div key={node.id} data-system-node className="system-overview__node">
              <CapabilityTag
                detail={node}
                detailKey={detailKey}
                placement={side}
                isOpen={activeDetailKey === detailKey}
                onToggle={onDetailToggle}
                className="system-capability-tag w-full"
                buttonClassName="system-overview__node-button focus-ring"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});
