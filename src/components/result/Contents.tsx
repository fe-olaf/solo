import { FOODS } from '../../constants'

function Contents({
  nickname,
  soloDays,
}: {
  nickname: string
  soloDays: number
}) {
  const saveMoney = (soloDays / 7) * 120000

  return (
    <div>
      <div>{`${nickname} 님은 마지막 연애일로부터 ${soloDays} 일을 지내셨습니다.\n 
        성인 남녀 1회 데이트 평균 비용을 6만원으로 잡고 주 2회를 만난다고 가정하였습니다.\n
        데이트 비용을 모두 한 쪽에서 부담했다고 가정했을 때 ${nickname}님은 총 ${saveMoney} 원을 아끼셨습니다.\n
      `}</div>
      <div>
        <div>{saveMoney} 로 사먹을 수 있는 음식</div>
        <ul>
          {FOODS.map(({ label, price, unit }, idx) => {
            return (
              <li key={idx}>
                <div>{label}</div>
                <div>
                  {price}원 기준 {saveMoney / price} {unit}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Contents
