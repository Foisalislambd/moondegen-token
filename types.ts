export interface TokenStat {
  label: string;
  value: string;
  trend?: number; // Positive is up, negative is down
}

export interface RoadmapItem {
  phase: string;
  title: string;
  items: string[];
  done: boolean;
}