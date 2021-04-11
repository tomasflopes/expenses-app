export default interface IAlert {
  type: 'success' | 'warning' | 'undo' | 'error' | '' | undefined;
  customMessage?: string;
}
