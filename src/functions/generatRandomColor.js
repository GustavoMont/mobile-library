export default function generateRandomColor(colorsObject) {
  const colors = Object.keys(colorsObject);
  const randomIndex = Math.floor(
    Math.random() * (colors.length - 1 - 0 + 1) + 0
  );

  if (colors[randomIndex].toLocaleLowerCase().includes("white")) {
    return "primary";
  }
  return colors[randomIndex];
}
