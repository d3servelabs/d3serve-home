import type { Meta, StoryObj } from "@storybook/react";
import { Preloader } from "./Preloader";

const meta: Meta<typeof Preloader> = {
  title: "Components/Preloader",
  component: Preloader,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Preloader>;

export const Default: Story = {
  args: {},
};
