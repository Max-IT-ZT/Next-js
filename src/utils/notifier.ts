export function processData(
  data: string[],
  onSuccess: (count: number) => void
) {
  const validData = data.filter((item) => item.trim() !== "");

  onSuccess(validData.length);

  return validData;
}
