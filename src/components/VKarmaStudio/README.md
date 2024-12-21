# VKarmaPanel

The `VKarmaPanel` component is a flexible panel component that can be used to display various types of content in a structured layout. It includes a side toolbar for navigation and a content panel for displaying the selected content.

## Props

- `activePanel` (boolean): Determines if the panel is active and should be displayed.
- `onTabChange` (function): Handler function for tab changes.
- `value` (string): The current active tab value.
- `TabsData` (array): Array of tab data objects containing `value`, `tooltip`, `icon`, and `label`.
- `panels` (object): Object mapping tab values to their respective content components.

## Usage

### Basic Example

```tsx
import React, { useState } from "react";
import VKarmaPanel from "vishwakarma.dev.ui";

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

  return (
    <VKarmaPanel
      activePanel={true}
      onTabChange={handleTabChange}
      value={activeTab}
      TabsData={tabsData}
      panels={panels}
    />
  );
};

export default MyComponent;
```

### Example with Conditional Rendering

```tsx
import React, { useState } from "react";
import VKarmaPanel from "vishwakarma.dev.ui";

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
  const [isPanelActive, setIsPanelActive] = useState(true);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <button onClick={() => setIsPanelActive(!isPanelActive)}>
        Toggle Panel
      </button>
      {isPanelActive && (
        <VKarmaPanel
          activePanel={isPanelActive}
          onTabChange={handleTabChange}
          value={activeTab}
          TabsData={tabsData}
          panels={panels}
        />
      )}
    </>
  );
};

export default MyComponent;
