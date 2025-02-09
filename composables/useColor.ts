export const useColor = () => {
  const colors = [
    '#c084fc',
    '#f472b6',
    '#fb7185',
    '#e879f9',
    '#a78bfa',
    '#818cf8',
    '#60a5fa',
    '#38bdf8',
    '#22d3ee',
    '#2dd4bf',
    '#34d399',
    '#4ade80',
    '#a3e635',
    '#facc15',
    '#fb923c',
    '#f87171',
  ]

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return {
    randomColor,
  }
}
