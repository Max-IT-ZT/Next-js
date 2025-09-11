let movieLogs: string[] = [];

function sendToConsole(message: string) {
  console.log(`🎬 MOVIE LOG: ${message}`);
}

export function logMovieAction(
  action: string,
  movieTitle: string,
  userId?: string
): string {
  const timestamp = new Date().toISOString();
  const userInfo = userId ? ` by user ${userId}` : "";
  const logMessage = `[${timestamp}] ${action}: "${movieTitle}"${userInfo}`;

  movieLogs.push(logMessage);
  sendToConsole(logMessage);

  return logMessage;
}

export function getAllMovieLogs(): string[] {
  return [...movieLogs];
}

export function clearMovieLogs(): void {
  movieLogs = [];
  console.log("📝 Movie logs cleared");
}

export function saveFavoriteMovie(movieTitle: string, userId: string): string {
  const saved = saveToStorage(`favorite_${userId}`, movieTitle);

  if (saved) {
    logMovieAction("FAVORITED", movieTitle, userId);
    return `"${movieTitle}" saved to favorites`;
  } else {
    logMovieAction("FAVORITE_ERROR", movieTitle, userId);
    return `Failed to save "${movieTitle}"`;
  }
}

function saveToStorage(key: string, value: string): boolean {
  try {

    console.log(`Saving ${key}: ${value}`);
    return Math.random() > 0.1; // 90% успішності
  } catch (error) {
    return false;
  }
}

// Функція для форматування дати фільму
export function formatMovieDate(releaseDate: string): string {
  const movieDate = new Date(releaseDate);
  const now = new Date();

  const diffTime = now.getTime() - movieDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return `Coming in ${Math.abs(diffDays)} days`;
  } else if (diffDays === 0) {
    return "Released today!";
  } else if (diffDays < 30) {
    return `Released ${diffDays} days ago`;
  } else {
    return movieDate.toLocaleDateString();
  }
}
