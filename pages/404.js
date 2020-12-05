import Head from "next/head";
import Link from "next/link";

const Error404 = () => (
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
			<p className="lead">페이지를 찾을 수 없습니다.</p>
			<Link href="/">
				<a className="btn btn-outline-primary">메인으로 가기</a>
			</Link>
		</div>
	</>
);

export default Error404;
