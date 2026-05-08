export function getAge(dateString, now = new Date()) {
  const birthDate = new Date(dateString);
  let age = now.getFullYear() - birthDate.getFullYear();
  const monthDiff = now.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age;
}

export default function Age({ birthDate = '2003-04-08' }) {
  return <span id="age">{getAge(birthDate)}</span>;
}
