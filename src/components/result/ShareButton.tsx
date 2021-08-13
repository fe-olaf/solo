import classNames from 'classnames/bind'
import CopyToClipboard from 'react-copy-to-clipboard'

import IconShareKakao from '../icons/IconShareKakao'
import IconShareLink from '../icons/IconShareLink'
import useLoadKakaoSDK from '../../hooks/useLoadKakaoSDK'

import styles from './ShareButton.module.scss'

const cx = classNames.bind(styles)

function ShareButton({ nickname }: { nickname: string }) {
  useLoadKakaoSDK()

  const handleShareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '솔로 계산기',
          description: '당신도 모르게 저축하고 있던 돈을 계산해드립니다',
          imageUrl: `${window.location.origin}/image/main.png`,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: `${nickname}님의 결과`,
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '나도 계산해보기',
            link: {
              mobileWebUrl: 'http://solo.company-ego.com/',
              webUrl: 'http://solo.company-ego.com/',
            },
          },
        ],
      })
    }
  }

  return (
    <>
      <div className={cx('article')}>
        <div className={cx('txt_title')}>결과 공유하기</div>
        <div className={cx('wrap_button')}>
          <div className={cx('ico_kakao')} onClick={handleShareKakao}>
            <IconShareKakao />
          </div>
          <CopyToClipboard
            text={window.location.href}
            onCopy={() => {
              alert('링크가 복사 되었습니다.')
            }}
          >
            <div>
              <IconShareLink />
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </>
  )
}

export default ShareButton
