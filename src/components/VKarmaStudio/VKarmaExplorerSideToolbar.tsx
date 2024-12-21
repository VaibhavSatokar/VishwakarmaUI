import React from "react";
import { Paper, Tooltip, ToggleButton, ToggleButtonGroup, toggleButtonGroupClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import { IVKarmaExplorerSideToolbarProps } from "./VKarmaStudio.types";


// Icon Mapping: Map string names to actual icon components
const iconMapping: Record<string, React.ReactNode> = {
  ViewComfyIcon: <ViewComfyIcon />,
  FolderOpenIcon: <FolderOpenIcon />,
  SettingsIcon: <SettingsIcon />,
  InfoIcon: <InfoIcon />,
};


/** Styled Component for ToggleButtonGroup */
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]: {
    marginLeft: -1,
    borderLeft: "1px solid transparent",
  },
}));

const VKarmaExplorerSideToolbar: React.FC<IVKarmaExplorerSideToolbarProps> = ({ value, onTabChange, orientation, TabsData }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <StyledToggleButtonGroup
        size="small"
        orientation={orientation}
        value={value}
        exclusive
        onChange={onTabChange}
        aria-label="toggle buttons"
      >
        {TabsData.map((tab) => (
          <Tooltip key={tab.value} title={tab.tooltip}>
            <ToggleButton
              value={tab.value}
              aria-label={tab.tooltip}
              sx={{
                backgroundColor: value === tab.value ? "#e0e0e0" : "transparent",
                color: value === tab.value ? "#9c27b0" : "inherit",
              }}
            >
              {/* Dynamically render icon based on the icon name string */}
              {iconMapping[tab.icon] || <div>{tab.label}</div>} {/* Fallback if icon is not found */}
            </ToggleButton>
          </Tooltip>
        ))}
      </StyledToggleButtonGroup>
    </Paper>
  );
};

export default VKarmaExplorerSideToolbar;
