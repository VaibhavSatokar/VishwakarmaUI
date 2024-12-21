# VKarmaButton

The `VKarmaButton` component is a customizable button component built using Material-UI's `Button` component. It supports different button types and custom click handlers.

## Props

- `identity` (string): The id of the button.
- `onClickHandler` (function): Custom click handler function.
- `children` (ReactNode): The content of the button.
- `type` (string): The type of the button. Default is "button".
- `...props` (object): Additional props to be passed to the Material-UI `Button` component.

## Usage

### Basic Example

```tsx
import React from "react";
import VKarmaButton from "vishwakarma.dev.ui";

const MyComponent = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <form>
      <VKarmaButton
        identity="myButton"
        onClickHandler={handleClick}
        type="submit"
      >
        Submit
      </VKarmaButton>
    </form>
  );
};

export default MyComponent;
```

### Example with Additional Props

```tsx
import React from "react";
import VKarmaButton from "vishwakarma.dev.ui";
import { Tooltip } from "@mui/material";

const MyComponent = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <form>
      <Tooltip title="Click to submit">
        <VKarmaButton
          identity="myButton"
          onClickHandler={handleClick}
          type="submit"
          color="primary"
          variant="contained"
        >
          Submit
        </VKarmaButton>
      </Tooltip>
    </form>
  );
};

export default MyComponent;
```

### Example with Reset Button

```tsx
import React from "react";
import VKarmaButton from "vishwakarma.dev.ui";

const MyComponent = () => {
  const handleReset = () => {
    console.log("Form reset!");
  };

  return (
    <form>
      <VKarmaButton
        identity="resetButton"
        onClickHandler={handleReset}
        type="reset"
        color="secondary"
        variant="outlined"
      >
        Reset
      </VKarmaButton>
    </form>
  );
};

export default MyComponent;
```
