import React from "react";
import { Box } from "@mui/material";
import { IVKarmaContentPanelProps } from "./VKarmaPanel.types";


const VKarmaContentPanel: React.FC<IVKarmaContentPanelProps> = ({ value, panels }) => {
  return (
    <Box mt={1} sx={{ padding: 1, height: "92%" }}>
      {panels[value] || <div>No content available</div>}
    </Box>
  );
};

export default VKarmaContentPanel;
