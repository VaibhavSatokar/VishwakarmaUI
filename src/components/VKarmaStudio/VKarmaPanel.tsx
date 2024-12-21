import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { IVKarmaPanelProps } from "./VKarmaStudio.types";
import VKarmaExplorerSideToolbar from "./VKarmaExplorerSideToolbar";
import VKarmaContentPanel from "./VKarmaContentPanel";

/** VKarmaPanel component for embedding a resizable, pin/unpin panel with a toolbar and content area */
const VKarmaPanel: React.FC<IVKarmaPanelProps> = ({
  value,
  activePanel,
  onTabChange,
  panels,
  TabsData,
  panelWidth = "20%", // Default width when pinned
  minPanelWidth = "5%", // Default width when unpinned
}) => {
  const [isPinned, setIsPinned] = useState(true); // Pinning state

  // Toggle the pin state
  const handlePinToggle = () => {
    setIsPinned((prev) => !prev);
  };

  return (
    <Box
      sx={{
        padding: 1,
        display: "flex",
        flexDirection: "column",
        width: isPinned ? panelWidth : minPanelWidth, // Dynamically adjust width based on pin state
        height: "100%",
        backgroundColor: "#f0f0f0",
        overflowY: isPinned ? "auto" : "hidden", // Hide overflow when unpinned
        position: "relative",
        transition: "width 0.2s ease", // Smooth transition for width change
      }}
    >
      {/* Toolbar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isPinned ? "row" : "column", // Adjust orientation for pin state
          height: isPinned ? "auto" : "100%", // Full height when unpinned
          borderBottom: isPinned ? "1px solid #ccc" : "none",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          padding: "8px",
        }}
      >
        {/* Explorer Toolbar */}
        <VKarmaExplorerSideToolbar
          orientation={isPinned ? "horizontal" : "vertical"} // Adjust orientation dynamically
          value={value}
          onTabChange={onTabChange}
          TabsData={TabsData}
        />

        {/* Pin/Unpin Icon */}
        <IconButton onClick={handlePinToggle}>
          {isPinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}
        </IconButton>
      </Box>

      {/* Content Panel */}
      {isPinned && (
        <Box
          sx={{
            padding: 1,
            backgroundColor: "#fff",
            height: "100%",
          }}
        >
          <VKarmaContentPanel value={value} panels={panels} />
        </Box>
      )}
    </Box>
  );
};

export default VKarmaPanel;
