export default function formatNumber(value: number) {
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
