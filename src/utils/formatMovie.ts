export function formatMovieTitle(title: string): string {
  return title.trim().toLowerCase().replace(/\s+/g, "-");
}

export function getMovieYear(releaseDate: string): number {
  return new Date(releaseDate).getFullYear();
}
