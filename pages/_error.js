import Head from "next/head";
import Link from "next/link";

const Error = () => (
  <>
    <Head>
      <title>error - shk.im</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="block text-center">
      <h1 className="block-title">
        <span role="img" aria-label="not found">
          🤔
        </span>
      </h1>
      <p className="lead">에러가 발생했습니다.</p>
      <Link>
        <a className="btn btn-outline-primary" href="/">
          메인으로 가기
        </a>
      </Link>
    </div>
  </>
);

export default Error;
