export const VIBRANT_GRADIENTS = [
  "from-rose-500 via-orange-400 to-amber-500",
  "from-sky-500 via-blue-500 to-indigo-500",
  "from-emerald-500 via-teal-500 to-cyan-500",
  "from-fuchsia-500 via-rose-500 to-red-500",
  "from-violet-500 via-purple-500 to-indigo-600",
  "from-amber-500 via-lime-500 to-emerald-500",
  "from-cyan-500 via-blue-500 to-violet-500",
  "from-pink-500 via-orange-500 to-yellow-500",
];

export function gradientByIndex(index = 0) {
  if (!VIBRANT_GRADIENTS.length) return "from-slate-900 to-slate-700";
  const safeIndex = Math.abs(Math.floor(index)) % VIBRANT_GRADIENTS.length;
  return VIBRANT_GRADIENTS[safeIndex];
}

export function gradientByKey(key = "") {
  if (!key) return gradientByIndex(0);
  const hash = Array.from(key).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return gradientByIndex(hash);
}
