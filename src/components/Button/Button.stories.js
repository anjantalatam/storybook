import Button from "./Button";
import Center from "../Center/Center";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button", // this is default and can be overridden by args.children as in line 20
  },
  decorators: [(story) => <Center>{story()}</Center>], // to apply decorator to this entire file.
};

export const Primary = () => (
  <Center>
    <Button variant="primary">Primary</Button>
  </Center>
);
export const Secondary = () => <Button variant="secondary">Primary</Button>;
export const Success = () => <Button variant="success">Primary</Button>;
export const Danger = () => <Button variant="danger">Primary</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  children: "PrimaryA",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  // children: "SecondaryA",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary Args",
};
