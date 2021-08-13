import classNames from 'classnames/bind'

import styles from './Contents.module.scss'
import formatNumber from '../../utils/formatNumber'

import { FOODS } from '../../constants'

const cx = classNames.bind(styles)

function Contents({
  nickname,
  soloDays,
}: {
  nickname: string
  soloDays: number
}) {
  const saveMoney = Math.ceil((soloDays / 7) * 120000)
  const saveMoneryWithComma = formatNumber(saveMoney)

  return (
    <div className={cx('aritcle')}>
      <div className={cx('txt_message')}>
        <div className={cx('txt_emphasis', 'txt_nickname')}>{nickname}</div>
        {`님은 마지막 연애일로부터 ${soloDays} 일을 아주 착실하게 지내왔고 총`}
        <div className={cx('txt_emphasis', 'txt_money')}>
          {saveMoneryWithComma}
        </div>
        {`원을 아끼셨기에 이 상장을 수여합니다.`}
      </div>
      <div className={cx('txt_description')}>
        {`1. 성인 남녀 1회 데이트 평균 비용을 6만원으로 잡고 주 2회를 만난다고 가정하였습니다.\n2. 데이트 비용을 모두 한 쪽에서 부담했다고 가정했습니다.`}
      </div>
      <div className={cx('wrap_item')}>
        <div className={cx('txt_title')}>
          {saveMoneryWithComma}원 으로 할 수 있는 것들
        </div>
        <ul>
          {FOODS.map(({ label, price, unit }, idx) => {
            if (saveMoney < price) {
              return null
            }

            return (
              <li key={idx} className={cx('item')}>
                <div className={cx('txt_label')}>{label}</div>
                <div className={cx('txt_money')}>
                  {formatNumber(Math.floor(saveMoney / price))} {unit} ({price}
                  원 기준)
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
