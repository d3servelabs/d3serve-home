import type { Meta, StoryObj } from "@storybook/react";
import { InteractionObserver } from "./InteractionObserver";

const meta: Meta<typeof InteractionObserver> = {
  title: "Components/InteractionObserver",
  component: InteractionObserver,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof InteractionObserver>;

export const Default: Story = {
  args: {},
};
