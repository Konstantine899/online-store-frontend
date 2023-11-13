type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  const Mods = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className);
  return [cls, ...Mods, ...additional].join(" ");
}
