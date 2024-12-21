
type IconComponent = React.ReactNode;

export interface ITabs {
  label: string;
  icon: string; // Icon name as string
  value: string;
  tooltip: string; // Tooltip for each tab
}

export interface IVKarmaExplorerSideToolbarProps {
  value: string;
  orientation?: "horizontal" | "vertical";
  onTabChange: (event: React.SyntheticEvent, newValue: string) => void;
  TabsData: ITabs[]; // Data for the tabs, including the icon and value
}

export interface IVKarmaContentPanelProps {
  value: string;
  panels: Record<string, React.ReactNode>;
}


export interface IVKarmaPanelProps extends IVKarmaExplorerSideToolbarProps, IVKarmaContentPanelProps {
  activePanel: string | null;
  panelWidth?: string;
  minPanelWidth?: string;
}

