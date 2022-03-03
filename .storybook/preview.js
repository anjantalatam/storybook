import Center from "../src/components/Center/Center";
import { addDecorator } from "@storybook/react";

addDecorator((story) => <Center>{story()}</Center>); // for global i.e wraps every story with Center

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
