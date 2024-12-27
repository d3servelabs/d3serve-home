import type { Meta, StoryObj } from "@storybook/react";
import { Subscriber } from "./Subscriber";

const meta: Meta<typeof Subscriber> = {
  title: "Components/Subscriber",
  component: Subscriber,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Subscriber>;

export const Default: Story = {
  args: {},
};
