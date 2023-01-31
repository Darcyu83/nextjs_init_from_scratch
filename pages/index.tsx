interface IProps {}

function Home(props: IProps) {
  return (
    <div style={{}}>
      <h1>MY_ENV = {process.env.MY_ENV}</h1>
      <h1>
        .env 파일 안에 NEXT_PUBLIC_ PREFIX를 사용하면 dotenv없이 사용가능함.
      </h1>
      <h1>
        process.env.NEXT_PUBLIC_MY_ENV_NV = {process.env.NEXT_PUBLIC_MY_ENV_NV}
      </h1>
    </div>
  )
}

export default Home
