import type { Meta, StoryObj } from "@storybook/react";
import { IntersectionObserver } from "./IntersectionObserver";

const meta: Meta<typeof IntersectionObserver> = {
  title: "Components/IntersectionObserver",
  component: IntersectionObserver,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof IntersectionObserver>;

export const Default: Story = {
  args: {},
};
