import Head from "next/head";
import Link from "next/link";

const Ln = () => (
  <>
    <Head>
      <title>ln.shk.im</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="block py-2 text-center">
      <div className="jumbotron">
        <h1 className="display-4">LN.SHK.IM</h1>
        <p className="lead">Private URL shortner service.</p>
        <Link><a href="/" className="btn btn-outline-primary">메인으로 돌아가기</a></Link>
      </div>
    </div>
  </>
);

export default Ln;
