import { GetServerSideProps, GetServerSidePropsContext } from "next"

interface IProps {
  nodeEnv: string
  myEnv: string
  nextPublic: string
}

function About(props: IProps) {
  const data = {
    nodeEnv: process.env.NODE_ENV,
    myEnv: process.env.MY_ENV ? "값있음" : "값없음",
    nextPublic: process.env.NEXT_PUBLIC_MY_ENV_NV,
  }
  return (
    <div style={{}}>
      <h1>About == </h1>
      <h4>props from back myEnv == {props.myEnv}</h4>
      <h4>props from back nextPublic == {props.nextPublic}</h4>
      <h4>props from back nodeEnv == {props.nodeEnv}</h4>

      <br />

      <br />
      <h4>data from front myEnv == {data.myEnv}</h4>
      <h4>data from front nextPublic == {data.nextPublic}</h4>
      <h4>data from front nodeEnv == {data.nodeEnv}</h4>
    </div>
  )
}

export default About

export const getServerSideProps: GetServerSideProps = async (
  _ctx: GetServerSidePropsContext,
) => {
  const data = {
    nodeEnv: process.env.NODE_ENV,
    myEnv: process.env.MY_ENV,
    nextPublic: process.env.NEXT_PUBLIC_MY_ENV_NV,
  }
  console.log("getServerSideProps === ", data)

  return {
    props: data,
  }
}
