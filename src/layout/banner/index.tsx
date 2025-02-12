import logo from 'assets/images/logo.png'

const Banner = () => {
  const slogan = 'Guad the dream Land'

  return (
    <div className="frc-center flex-1 overflow-hidden bg-black lg:max-w-[800px]">
      <h1 className="absolute top-10 w-full text-center text-lg text-white">
        {slogan}
      </h1>
      <img
        src={logo}
        alt="banner"
        className="h-auto w-full object-cover object-center"
      />
    </div>
  )
}

export default Banner
