export interface IListItem {
  readonly id: number;
  readonly text: string;
}

export interface IListItemProps {
  readonly item: IListItem;

  deleteTask(id: number): void;
}
