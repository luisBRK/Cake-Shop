import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pageName }) => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Sweet World | {pageName ?? ""}</title>
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
