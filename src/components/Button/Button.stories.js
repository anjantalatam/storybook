import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button", // this is default and can be overridden by args.children as in line 20
  },
};

export const Primary = () => <Button variant="primary">Primary</Button>;
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
