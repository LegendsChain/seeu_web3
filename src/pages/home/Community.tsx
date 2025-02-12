import { useEffect, useRef } from 'react'

export function TwitterList() {
  const xc = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (xc.current) {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      xc.current.appendChild(script)
    }
  }, [])

  return (
    <div className="flex-1">
      <h1 className="mb-[20px] flex items-center justify-between text-[24px] font-[500] leading-[30px]">
        Twitter
      </h1>
      <div className="frc-center border-gray-100 bg-[#1d1e1f]">
        <div ref={xc} className="w-full max-w-[1280px]">
          <a
            className="twitter-timeline"
            data-lang="zh-cn"
            data-height="1000"
            data-theme="dark"
            href="https://twitter.com/MakkaPakkaDLand?ref_src=twsrc%5Etfw"
          >
            Loading Tweets...
          </a>
        </div>
      </div>
    </div>
  )
}

export function TelegramList() {
  const tc = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tc.current) {
      const script = document.createElement('script')
      script.src = 'https://telegram.org/js/telegram-widget.js?22'
      script.setAttribute('data-telegram-discussion', 'seeubtc')
      script.setAttribute('data-comments-limit', '20')
      script.setAttribute('data-dark', '1')
      script.setAttribute('data-height', '1000')
      tc.current.appendChild(script)
    }
  }, [])

  return (
    <div>
      <h1 className="my-[20px] flex items-center justify-between text-[24px] font-[500] leading-[30px]">
        Telegram
      </h1>
      <div ref={tc} className="">
        <a href="https://t.me/GN_MakkaPakka"></a>
      </div>
    </div>
  )
}
