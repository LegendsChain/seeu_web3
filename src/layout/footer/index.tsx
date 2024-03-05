const Footer = () => {
  return (
    <div className="mt-[40px] flex h-[140px] flex-wrap  items-center gap-[10px] border-t-[1px] border-[#383838] p-[10px]">
      <div className="pr-[60px] text-[26px]  font-[700]">$GUAD</div>
      <div className="flex flex-1 gap-[18px] text-[18px] lg:gap-[60px]">
        <span
          onClick={() => {
            window.open('https://twitter.com/MakkaPakkaDLand', '_blank')
          }}
          className="cursor-pointer"
        >
          Twitter
        </span>
        <span
          onClick={() => {
            window.open('https://t.me/GN_MakkaPakka', '_blank')
          }}
          className="cursor-pointer"
        >
          Telegram
        </span>
        <span
          onClick={() => {
            window.open('https://github.com/makkapakkaLanuch', '_blank')
          }}
          className="cursor-pointer"
        >
          GitHub
        </span>
      </div>
      <div>© Makka Pakka Land 2024</div>
    </div>
  )
}

export default Footer
