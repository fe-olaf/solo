function generateHeadingTitle(soloDays: number) {
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

function Heading({ soloDays }: { soloDays: number }) {
  return (
    <div>
      <div>{generateHeadingTitle(soloDays)}</div>
    </div>
  )
}

export default Heading
