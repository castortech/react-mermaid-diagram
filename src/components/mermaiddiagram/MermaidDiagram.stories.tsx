import { StoryFn, Meta } from "@storybook/react";
import { MermaidDiagram } from "../../../dist/esm";
import React from "react";

export default {
    title: "ReactComponentLibrary/MermaidDiagram",
    component: MermaidDiagram,
} as Meta<typeof MermaidDiagram>;

const diagram_text = "graph TD\n  A-->B;\nB-->C;\n";
const Template: StoryFn<typeof MermaidDiagram> = (args) => {
    return <div>
        <h1>{args.id}</h1>
        <MermaidDiagram {...args}>{diagram_text}</MermaidDiagram>
    </div>;
}

export const MermaidTest = Template.bind({});
MermaidTest.args = {
    id: 'simple-id',
};

export const MermaidTestDisabled = Template.bind({});
MermaidTestDisabled.args = {
    id: 'simple-id-disabled',
    disableJs: true,
};
