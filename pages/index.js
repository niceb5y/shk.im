import Head from "next/head";

const Home = () => (
  <>
    <Head>
      <title>shk.im</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="block text-center">
      <h1 className="block-title">
        Serverless Demo
        <span role="img" aria-label="lightning">
          ⚡
        </span>
      </h1>
      <p className="lead">
        Powered by <a href="https://nextjs.org">next.js</a> +{" "}
        <a href="https://serverless.com">serverless framework</a>
      </p>
    </div>
  </>
);

export default Home;
