import React from "react";
import { Box, Divider } from "@mui/material";
import VKarmaContentPanel from "./VKarmaContentPanel";
import VKarmaExplorerSideToolbar from "./VKarmaExplorerSideToolbar";
import { ITabs, IVKarmaPanelProps } from "./VKarmaStudio.types";



const VKarmaPanel: React.FC<IVKarmaPanelProps> = ({ activePanel, onTabChange, value, TabsData, panels }) => {
  return (
    <Box
      sx={{
        flexDirection: "column",
        width: "20%",
        p: 1,
        display: { xs: "none", md: activePanel !== null ? "block" : "none" },
        backgroundColor: "#f0f0f0",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          padding: 1,
          height: "100%",
        }}
      >
        <VKarmaExplorerSideToolbar value={value} onTabChange={onTabChange} TabsData={TabsData} />
        <Divider sx={{ my: 1 }} />
        <VKarmaContentPanel value={value} panels={panels} />
      </Box>
    </Box>
  );
};

export default VKarmaPanel;
