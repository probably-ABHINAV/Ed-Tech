import { type ClassValue, clsx } from "clsx";
// Note: Since we are not using Tailwind, we don't need tailwind-merge strictly, but keeping the pattern
// allows for easy extension if we ever did. For now, clsx is enough.

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
