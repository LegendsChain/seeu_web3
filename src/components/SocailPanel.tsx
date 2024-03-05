import { ShareAltOutlined } from '@ant-design/icons'
import { TelegramIcon, TwitterIcon } from 'components/icon'
import { onShareX } from 'utils/social'

export function SoialPanel() {
  const handleShare = async () => {
    const shortUrl = `$GUAD community official website: %0A https://land.makkapakka.top %0A👆👆👆%0A mint %23brc20 %23GUAD  use %23LSGS %0A https://app.lessgas.xyz/detail/GUAD %0A The First %23MEME %23INSCRIPTION build with %23GameFi `
    onShareX(shortUrl)
  }
  return (
    <div className="flex flex-row items-center gap-4 ">
      <div
        className="!flex cursor-pointer items-center justify-center rounded-full border p-[8px] hover:bg-[#63e3ff]"
        onClick={() => {
          handleShare()
        }}
      >
        <ShareAltOutlined
          style={{
            fontSize: '24px',
            background: 'transparent'
          }}
          className="!flex cursor-pointer items-center justify-center "
        />
      </div>
      <div
        className="!flex cursor-pointer items-center justify-center rounded-full border p-[8px] hover:bg-[#63e3ff]"
        onClick={() => {
          window.open('https://twitter.com/MakkaPakkaDLand')
        }}
      >
        <TwitterIcon
          style={{
            fontSize: '24px',
            background: 'transparent'
          }}
          className="!flex cursor-pointer items-center justify-center "
        />
      </div>
      <div
        className="!flex cursor-pointer items-center justify-center rounded-full border p-[8px] hover:bg-[#63e3ff]"
        onClick={() => {
          window.open('https://t.me/GN_MakkaPakka')
        }}
      >
        <TelegramIcon
          style={{
            fontSize: '24px',
            background: 'transparent'
          }}
          width="24px"
          height="24px"
        />
      </div>
    </div>
  )
}
