export default interface IExpense {
  _id: string;
  area: string;
  date: string; // The process of sanitize happens in the backend
  name: string;
  description: string;
  type: 'Expense' | 'Income';
  value: number;
}
