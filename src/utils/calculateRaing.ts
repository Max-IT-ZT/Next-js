// Ці функції потрібно протестувати
export function calculateRating(votes: number[], average: number): string {
  if (votes.length === 0) return "No rating";
  if (average >= 8) return "Excellent";
  if (average >= 6) return "Good";
  if (average >= 4) return "Average";
  return "Poor";
}

export function formatRuntime(minutes: number = 0): string {
  if (minutes < 60) return `${minutes}min`;

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return remainingMinutes > 0
    ? `${hours}h ${remainingMinutes}min`
    : `${hours}h`;
}
