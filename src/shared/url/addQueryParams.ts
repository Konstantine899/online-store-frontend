function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search); // получаю объект search строки запроса
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
}

export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState('', '', getQueryParams(params));
}
