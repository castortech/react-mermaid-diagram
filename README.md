# react-mermaid-diagram

Simple React component to embed Mermaid diagrams.

## Getting started

```
npm install mermaid react
npm install @lightenna/react-mermaid-diagram
```

Then use the component in your React app:

```jsx
import {MermaidDiagram} from "@lightenna/react-mermaid-diagram";

const diagram_text="graph TD\nA-->B;\nB-->C;\n";
return <MermaidDiagram>
  {diagram_text}
</MermaidDiagram>;
```

If using with Next.js, Mermaid is a client-side library, so you'll need your containing component to identify that it's running on the client side:

```jsx
'use client';
import { MermaidDiagram } from '@lightenna/react-mermaid-diagram';

export default function Diagram() {
  return <MermaidDiagram>{`graph TD;\nA-->B;\nB-->C;`}</MermaidDiagram>;
}
```

## Reporting issues

When reporting issues please include a link to a [CodeSandbox](https://codesandbox.io/) or [StackBlitz](https://stackblitz.com/) that reproduces the issue. This will help us to quickly identify and fix the problem.

If you're struggling to create a reproduction, this [StackBlitz Next.js example](https://stackblitz.com/edit/stackblitz-starters-xzmlstlh) that uses the `MermaidDiagram` component may help you.
