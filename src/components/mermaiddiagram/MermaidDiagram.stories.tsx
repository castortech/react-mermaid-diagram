import { StoryFn, Meta } from "@storybook/react";
import { MermaidDiagram } from "../../../dist/esm";
import React from "react";

export default {
    title: "ReactComponentLibrary/MermaidDiagram",
    component: MermaidDiagram,
} as Meta<typeof MermaidDiagram>;

const Template: StoryFn<typeof MermaidDiagram> = (args) => {
    const argsWithoutText = {
        ...args,
        "diagramText": undefined,
    };
    return <div>
        <h1>{args.id}</h1>
        <MermaidDiagram {...argsWithoutText}>{args.diagramText}</MermaidDiagram>
    </div>;
}

export const SimpleTest = Template.bind({});
SimpleTest.args = {
    id: 'simple-id',
    diagramText: 'graph TD;\nA-->B;\nA-->C;\nB-->D;\nC-->D;',
};

export const DisabledTest = Template.bind({});
DisabledTest.args = {
    id: 'disabled-id',
    diagramText: 'does not matter',
    disableJs: true,
};

export const LinkTestStrict = Template.bind({});
LinkTestStrict.args = {
    id: 'link-id',
    diagramText: 'graph BT\nunclickableButtonText["NON-CLICKABLE"]\nclick unclickableButtonText console.error "rolloverUnclickable"',
};

export const LinkTestLoose = Template.bind({});
LinkTestLoose.args = {
    id: 'link-id',
    securityLevel: 'loose',
    diagramText: 'graph BT\nclickableButtonText["CLICKABLE"]\nclick clickableButtonText alert "rolloverClickable"',
};
