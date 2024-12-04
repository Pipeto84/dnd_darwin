export type Status = "form" | "";

export interface DataCard {
  id: string;
  content: string;
  group: string;
  status: Status;
}

export interface OptionsForm {
  value: string;
  label: string;
}
