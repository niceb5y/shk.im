import Head from "next/head";

const Home = () => (
  <>
    <Head>
      <title>shk.im</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="block py-2 text-center">
      <div className="jumbotron">
        <h1 className="display-4">SHK.IM</h1>
        <p className="lead">The backbone of personal internet services.</p>
      </div>
    </div>
  </>
);

export default Home;
