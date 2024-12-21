# VishwakarmaUI

VishwakarmaUI is a library of reusable UI components built using Material-UI.

## Installation

To install the library, you can use npm or yarn:

```bash
npm install vishwakarma.dev.ui
```

or

```bash
yarn add vishwakarma.dev.ui
```

## Usage

### Example

```tsx
import React from "react";
import { VKarmaButton, VKarmaPanel } from "vishwakarma.dev.ui";

const tabsData = [
  { value: "tab1", tooltip: "Tab 1", icon: "ViewComfyIcon", label: "Tab 1" },
  { value: "tab2", tooltip: "Tab 2", icon: "FolderOpenIcon", label: "Tab 2" },
  { value: "tab3", tooltip: "Tab 3", icon: "SettingsIcon", label: "Tab 3" },
];

const panels = {
  tab1: <div>Content for Tab 1</div>,
  tab2: <div>Content for Tab 2</div>,
  tab3: <div>Content for Tab 3</div>,
};

const MyComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <VKarmaButton
        identity="myButton"
        onClickHandler={handleClick}
        type="submit"
      >
        Submit
      </VKarmaButton>
      <VKarmaPanel
        activePanel={true}
        onTabChange={handleTabChange}
        value={activeTab}
        TabsData={tabsData}
        panels={panels}
      />
    </div>
  );
};

export default MyComponent;
