import type { Meta, StoryObj } from "@storybook/react";
import { Template } from "./Template";

const meta: Meta<typeof Template> = {
  title: "Components/Template",
  component: Template,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Template>;

export const Default: Story = {
  args: {},
};
