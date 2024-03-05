import Button from 'antd/es/button'
import logo from 'assets/images/logo.png'
import { SeeButton } from 'layout'
import demoImage from 'assets/images/logo.png'
import Image from 'antd/es/image'
import { useEffect, useState } from 'react'
import api, { SeeUDetail } from 'api'
import { BitcoinIcon } from 'pages/Mint/Dashboard'
import Progress from 'antd/es/progress'
import { ToolItem } from 'pages/Tools/ToolItem'
import { toolsData } from 'pages/Tools'
import { useNavigate } from 'react-router-dom'
import { TwitterList } from './Community'
import Roadmap from 'pages/Roadmap'

function DashbooardItem(props: {
  value: string | React.ReactNode
  label: string
}) {
  return (
    <div className="min-w-[120px] rounded-xl py-4">
      <div className="flex items-center text-[32px] font-extrabold">
        {props.value}
      </div>
      <div className="text-[16px] text-[#e4e4e4]">{props.label}</div>
    </div>
  )
}

export function CreationItem() {
  return (
    <div className="flex h-[300px] w-[220px] flex-col overflow-hidden rounded-lg bg-[#1d1e1f] shadow-[0_4px_6px_-1px_rgba(0,0,0,1)]">
      <Image
        src={demoImage}
        rootClassName="flex-1"
        alt="demoImage"
        width="100%"
        height="100%"
        className="flex-1 object-cover"
      />
      <div className="px-[16px] py-[26px]">
        <div>康师傅</div>
      </div>
    </div>
  )
}

export function Home() {
  const [data, setData] = useState<SeeUDetail>()
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/tools')
  }
  useEffect(() => {
    api.brc20.getSeeUDetails().then((res) => {
      console.log(res)
      setData(res)
    })
  }, [])
  return (
    <div className="w-full">
      {/* Introduction */}
      <div className="flex flex-col flex-wrap pt-[80px] lg:flex-row">
        <div className="mr-0 flex flex-1 flex-col flex-wrap lg:mr-[100px]">
          <div className="md:flex-1">
            <h1 className="break-words text-[48px] font-[700] leading-[68px] md:text-[56px]">
              $GUAD, The First #MEME #INSCRIPTION build with #GameFi
            </h1>
            <p className="text-[20px] leading-[26px]">
              When Inscription meets GameFi, when the voice of meme spreads all
              over the world, grab it and you can get back everything you missed
              over the years. Finally, you can have a good night&lsquo;s sleep.
              Good night, Makka Pakka.{' '}
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-8">
            <SeeButton
              onClick={() => {
                window.open(
                  'https://www.okx.com/cn/web3/marketplace/ordinals/brc20/GUAD',
                  '_blank'
                )
              }}
              className="h-[44px] w-[160px] md:mx-[unset]"
            >
              OKX maketplace
            </SeeButton>
            <Button
              onClick={() => {
                window.open('https://app.makkapakka.top', '_blank')
              }}
              className="h-[44px] w-[160px] border-[#63e3ff] text-[#63e3ff] hover:bg-[#63e3ff] hover:text-white md:mx-[unset]"
            >
              Play
            </Button>
            <Button
              onClick={() => {
                window.open(
                  'https://app.satsat.exchange/marketplace/GUAD_USDT',
                  '_blank'
                )
              }}
              className="h-[44px] w-[160px] border-[#63e3ff] text-[#63e3ff] hover:bg-[#63e3ff] hover:text-white md:mx-[unset] md:w-auto"
            >
              (L2)GUAD/USDT
            </Button>
          </div>
          <div className="h-[20px] lg:h-[180px]"></div>
          {/* dashboard */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            <DashbooardItem
              value={
                <>
                  <BitcoinIcon />
                  {data ? Number.parseFloat('99999.99').toFixed(3) : 0}
                </>
              }
              label="Total volume"
            />
            <div className="mx-[10px] h-full border-r-[1px] border-[#9b9b9b] md:mx-[26px]"></div>
            <DashbooardItem
              value={
                <>
                  <BitcoinIcon />
                  {data ? Number.parseFloat('9.99').toFixed(3) : 0}
                </>
              }
              label="24h Volume"
            />
            <div className="mx-[10px] h-full border-r-[1px] border-[#9b9b9b] md:mx-[26px]"></div>
            <DashbooardItem value={99999} label="Holders" />
          </div>
        </div>
        {/* dashboard card */}
        <div
          className="m-auto h-[max-content] w-[368px]"
          style={{ boxShadow: '0px 40px 160px rgba(255,255,255,0.32)' }}
        >
          <div className="w-full px-[62px] py-[92px]">
            <img src={logo} width={244} alt="logo" />
          </div>
          <div className="w-full bg-white p-[24px] text-black">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="text-[20px]">Market cap</div>
                <div className="flex items-center pt-[10px] text-[22px] font-[700]">
                  <BitcoinIcon />
                  {data
                    ? (
                        Number.parseFloat('1000.87') * Number.parseFloat('17.8')
                      ).toFixed(2)
                    : 0}
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="text-[20px]">Floor Price</div>
                <div className="flex flex-1 items-center pt-[10px] text-[22px] font-[700]">
                  {(data
                    ? (
                        Number.parseFloat(data.marketplace.floorPrice) *
                        100000000
                      ).toFixed(4)
                    : 0) + ' sats'}
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => {
                  window.open('https://twitter.com/MakkaPakkaDLand', '_blank')
                }}
                className="h-[40px] w-[152px] bg-[#111] text-white"
              >
                Follow us
              </Button>
              <Button
                onClick={() => {
                  window.open('https://t.me/GN_MakkaPakka', '_blank')
                }}
                className="h-[40px] w-[152px] "
              >
                Join us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60px]"></div>
      {/* Token Details */}
      <h1 className="mb-[20px] text-[24px] font-[500] leading-[30px]">
        Token Details
      </h1>
      <div className="flex flex-col gap-2 text-lg text-[#aaa]">
        <div className="flex justify-between text-sm text-[#aaa]">
          <div>Minted: 10,587,000 GUAD </div>
          <div>Supply: 88,888,000</div>
        </div>
        <Progress
          percent={100}
          showInfo={false}
          strokeColor={{ '0%': '#63e3ff', '100%': '#87d068' }}
        />
        <div className="items-between flex justify-start">
          <div className="flex-1">
            <div className="flex flex-wrap">
              <div className="w-[180px]">Total supply</div>
              <div>10,587,000 GUAD</div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-[180px]">Deployed</div>
              <div>06:59:07 2024-02-19</div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-[180px]">Inscription ID</div>
              <div className="flex flex-wrap">
                f35c77d09841d0bb1b5bf258759cfc753925b1d91c5a726e660b861c12e3cd0ci0
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap">
              <div className="w-[240px]">Inscription starting no.</div>
              <div>#61087967</div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-[240px]">Inscription ending no.</div>
              <div>#61087968</div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-[240px]">Limit per mint</div>
              <div>1,000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60px]"></div>
      {/* Roadmap */}
      <h1 className="mb-[20px] text-[24px] font-[500] leading-[30px]">
        Community-based BTC Layer2 Future
      </h1>
      <Roadmap />
      <div className="h-[30px]"></div>
      {/* <div>
        <h1 className="my-[20px] flex items-center justify-between text-[24px] font-[500] leading-[30px]">
          <div>Tools</div>
          <div
            onClick={handleNavigate}
            className="cursor-pointer text-lg text-[#63e3ff]"
          >
            More tools
          </div>
        </h1>
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
          {Object.keys(toolsData)
            .flatMap((t) => toolsData[t].map((tool) => ({ ...tool, group: t })))
            .slice(0, 4)
            .map((tool) => (
              <ToolItem value={tool} key={tool.id} group={tool.group} />
            ))}
        </div>
      </div> */}
      <div className="h-[60px]"></div>
      <TwitterList />
      <div className="h-[60px]"></div>
      {/* <TelegramList />
      <div className="h-[60px]"></div> */}
    </div>
  )
}
