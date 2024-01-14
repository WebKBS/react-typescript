export async function get(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText || 'Failed to fetch data');
  }

  const data = (await response.json()) as unknown; // unknown은 any와 비슷하지만 좀 더 엄격한 타입 fetch를 사용할때는 any보다 unknown을 사용하는 것이 좋다.

  return data;
}
