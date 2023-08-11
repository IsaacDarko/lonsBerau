import "@styles/global.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";

export const metadata = {
  title: "Lons Bureau",
  description: "Hub of Crypto Serivices",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <Nav />
          <main className="relative">{children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
