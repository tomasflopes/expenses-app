export default function getAgeFromDate(date: Date | undefined): number {
  if (!date) return 0;

  const today = new Date();
  let thisYear = 0;

  if (today.getMonth() < date.getMonth()) {
    thisYear = 1;
  } else if (
    today.getMonth() == date.getMonth() &&
    today.getDate() < date.getDate()
  ) {
    thisYear = 1;
  }

  const age = today.getFullYear() - date.getFullYear() - thisYear;

  return age;
}
