import classNames from 'classnames/bind'

import styles from './Heading.module.scss'

const cx = classNames.bind(styles)

function generateHeadingTitle(soloDays: number, isMossol?: boolean) {
  if (isMossol) {
    return (
      <>
        <div className={cx('txt_rank')}>🥇</div>
        <h1 className={cx('txt_label')}>최강 모태솔로</h1>
      </>
    )
  }

  if (soloDays <= 100) {
    return (
      <>
        <div className={cx('txt_rank')}>🍼</div>
        <h1 className={cx('txt_label')}>이제 시작이상</h1>
      </>
    )
  }
  if (soloDays <= 365) {
    return (
      <>
        <div className={cx('txt_rank')}>🥉</div>
        <h1 className={cx('txt_label')}>고생하상</h1>
      </>
    )
  }
  if (soloDays <= 1095) {
    return (
      <>
        <div className={cx('txt_rank')}>🥈</div>
        <h1 className={cx('txt_label')}>까마득상</h1>
      </>
    )
  }

  return (
    <>
      <div className={cx('txt_rank')}>🥇</div>
      <h1 className={cx('txt_label')}>준 모태솔로상</h1>
    </>
  )
}

function Heading({
  soloDays,
  isMossol,
}: {
  soloDays: number
  isMossol?: boolean
}) {
  return (
    <div className={cx('article')}>
      {generateHeadingTitle(soloDays, isMossol)}
    </div>
  )
}

export default Heading
