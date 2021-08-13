export default function formatNumber(value: number) {
  return `${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}
