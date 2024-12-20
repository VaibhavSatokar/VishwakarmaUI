
type IconComponent = React.ReactNode;

export interface ITabs {
  label: string;
  icon: string; // Icon name as string
  value: string;
  tooltip: string; // Tooltip for each tab
}

export interface IVKarmaExplorerSideToolbarProps {
  value: string;
  onTabChange: (event: React.SyntheticEvent, newValue: string) => void;
  TabsData: ITabs[]; // Data for the tabs, including the icon and value
}

export interface IVKarmaContentPanelProps {
  value: string;
  panels: Record<string, React.ReactNode>;
}


export interface IVKarmaPanelProps {
  activePanel: string | null;
  onTabChange: (event: React.SyntheticEvent, newValue: string) => void;
  value: string;
  TabsData: ITabs[];
  panels: Record<string, React.ReactNode>;
}

