export function removeColors(colors, toRemove) {
  return Object.keys(colors).filter(
    (color) => !color.toLowerCase().includes(toRemove)
  );
}

export default function generateColorSequence(colors, colorsKeys, index) {
  const colorIndex = index % colorsKeys.length;
  const colorKey = colorsKeys[colorIndex];
  return colors[colorKey];
}
