import tool1 from 'assets/images/tool1.png'
import tool2 from 'assets/images/tool2.png'
import tool3 from 'assets/images/tool3.png'
import tool4 from 'assets/images/tool4.png'
import tool5 from 'assets/images/tool5.png'
import tool6 from 'assets/images/tool6.png'
import tool7 from 'assets/images/tool7.png'

export type Tool = {
  id: number
  url: string
  name: string
  image: string
}

export const toolsData: {
  [x: string]: Tool[]
} = {
  dashboard: [
    {
      id: 1,
      url: 'https://app.lessgas.xyz/detail/GUAD',
      image: tool1,
      name: 'LessGas LanuchPad'
    }
    // {
    //   id: 2,
    //   url: 'https://dune.com/cryptokoryo/brc20',
    //   image: tool2,
    //   name: 'Dune'
    // },
    // {
    //   id: 3,
    //   url: 'https://mct.xyz/inscribe/monitor?inscribe_type=brc20-mint&block_type=pending',
    //   image: tool3,
    //   name: 'BTC 铭文监控'
    // },
    // {
    //   id: 4,
    //   url: 'https://ordinals.hiro.so/',
    //   image: tool4,
    //   name: 'Explore Ordinals inscriptions'
    // }
  ],
  'Mint Tools': [
    {
      id: 1,
      url: 'https://app.lessgas.xyz/detail/GUAD',
      image: tool5,
      name: 'LSGS LANUCHPAD'
    }
    // {
    //   id: 2,
    //   url: 'https://hub.cryptocell.guru/ordinalsturbo/',
    //   image: tool6,
    //   name: 'Ordinalsturbo'
    // }
  ]
}

export const Tools = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-[36px] overflow-auto px-8 pb-10 pt-[64px]">
      {Object.keys(toolsData).map((key) => (
        <div key={key}>
          <h1 className="mb-[8px] text-[24px] font-[600] capitalize">{key}</h1>
          <div className="grid grid-cols-1 gap-[36px] xl:grid-cols-2">
            {toolsData[key].map((tool) => (
              <a href={tool.url} target="_blank" rel="noreferrer" key={tool.id}>
                <div className="col-span-1 rounded-lg p-4 shadow hover:shadow-lg">
                  <div className="line-wrap one-line-wrap mb-[8px] block">
                    {tool.url}
                  </div>
                  <img
                    src={tool.image}
                    alt="img"
                    className="aspect-[300/142]"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
      <div>
        <h1 className="mb-[8px] text-[24px] font-[600] capitalize">
          Accelerate
        </h1>
        <div className="grid grid-cols-1 gap-[36px] md:grid-cols-2">
          <a
            href="https://pool.binance.com/en/acceleration"
            target="_blank"
            className="col-span-1 rounded-lg p-4 shadow hover:shadow-lg"
            rel="noopener noreferrer"
          >
            <div className="line-wrap one-line-wrap mb-[8px] block">
              https://pool.binance.com/en/acceleration
            </div>
            <img src={tool7} alt="img" className="aspect-[300/142]" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Tools
