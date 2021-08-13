function generateHeadingTitle(soloDays: number, totalDays: number) {
  if (soloDays === totalDays) {
    return (
      <div>
        <div>🥇</div>
        <div>채고채고 모태솔로상</div>
      </div>
    )
  }

  if (soloDays <= 100) {
    return (
      <div>
        <div>🍼</div>
        <h1>갓난애기상</h1>
      </div>
    )
  }
  if (soloDays <= 365) {
    return (
      <div>
        <div>🥉</div>
        <div>동메달</div>
      </div>
    )
  }
  if (soloDays <= 1095) {
    return (
      <div>
        <div>🥈</div>
        <div>은메달</div>
      </div>
    )
  }

  return (
    <div>
      <div>🥇</div>
      <div>준 모태솔로상</div>
    </div>
  )
}

function Heading({
  totalDays,
  soloDays,
}: {
  totalDays: number
  soloDays: number
}) {
  return (
    <div>
      <div>{generateHeadingTitle(soloDays, totalDays)}</div>
    </div>
  )
}

export default Heading
