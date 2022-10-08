import './App.css';
import { Graph } from '@antv/x6';
import { useEffect, useRef } from 'react';

function App() {
  const appRef = useRef(null);
  const data = {
    // 节点
    nodes: [
      {
        id: 'node1', // String，可选，节点的唯一标识
        shape: 'rect',
        x: 40, // Number，必选，节点位置的 x 值
        y: 40, // Number，必选，节点位置的 y 值
        width: 80, // Number，可选，节点大小的 width 值
        height: 40, // Number，可选，节点大小的 height 值
        label: 'hello', // String，节点标签
      },
      {
        id: 'node2', // String，节点的唯一标识
        shape: 'ellipse',
        x: 160, // Number，必选，节点位置的 x 值
        y: 180, // Number，必选，节点位置的 y 值
        width: 80, // Number，可选，节点大小的 width 值
        height: 40, // Number，可选，节点大小的 height 值
        label: 'world', // String，节点标签
      },
    ],
    // 边
    edges: [
      {
        source: 'node1', // String，必须，起始节点 id
        target: 'node2', // String，必须，目标节点 id
      },
    ],
  };

  useEffect(() => {
    const graph = new Graph({
      container: appRef.current,
      panning: {
        enabled: true,
        modifiers: 'shift',
      },
      width: 800,
      height: 600,
      background: {
        color: '#fffbe6', // 设置画布背景颜色
      },
      grid: {
        size: 10, // 网格大小 10px
        visible: true, // 渲染网格背景
      },
    });

    // graph.zoom(-0.5)

    graph.translate(80, 40);
    graph.fromJSON(data);
    graph.centerContent()
  }, []);
  return <div ref={appRef}></div>;
}

export default App;
