import type { Meta, StoryObj } from "@storybook/react";
import { Banners } from "./Banners";

const meta: Meta<typeof Banners> = {
  title: "Components/Banners",
  component: Banners,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Banners>;

export const Default: Story = {
  args: {},
};
