export function add(x: number, y: number) {
  return x + y
}

export function sample<T>(arr: T[]): T {
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

export const a = 3

export function times(x: number, y: number) {
  return x * y
}
