import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import Contract from "components/Contract/Contract";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import InchDex from "components/InchDex";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Menu, Layout } from "antd";
import "antd/dist/antd.css";
import Blockie from "components/Blockie";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
const { Header } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "white",
    marginTop: "100px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#181a27",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    boxShadow: "rgb(0 0 0 / 45%) 0px 0px 12px 6px"
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Router>
      <Layout style={{ mineight: "100vh", background: "#0e111a", }}>
        <Header style={styles.header}>
          <Logo />
          <Menu
            theme="light"
            mode="horizontal"
            style={{
              display: "flex",
              fontSize: "17px",
              fontWeight: "500",
              width: "100%",
              justifyContent: "center",
              background: "transparent",
            }}
            defaultSelectedKeys={["quickstart"]}
          >
            <Menu.Item key="quickstart">
              <NavLink to="/quickstart"><i class="material-icons">&#xE88A;</i> Welcome</NavLink>
            </Menu.Item>
            <Menu.Item key="wallet">
              <NavLink to="/wallet"><i class="material-icons">&#xe850;</i> Wallet</NavLink>
            </Menu.Item>
            <Menu.Item key="dex">
              <NavLink to="/1inch"><i class="material-icons">&#xe8d4;</i> Swap</NavLink>
            </Menu.Item>
            <Menu.Item key="balances">
              <NavLink to="/erc20balance"><i class="material-icons">&#xe263;</i> Tokens</NavLink>
            </Menu.Item>
            <Menu.Item key="transfers">
              <NavLink to="/erc20transfers"><i class="material-icons">&#xef6e;</i> Transfers</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance"><i class="material-icons">&#xe8a7;</i> NFTs</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            <TokenPrice
              address="0x7ae0d42f23c33338de15bfa89c7405c068d9dc0a"
              chain="eth"
              image="/images/question.png"
              size="40px"
            />
            <NativeBalance />
            <Account />
            <Blockie currentWallet size={7} scale={5} />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/quickstart">
              <QuickStart />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/1inch">
              <InchDex chain="eth" />
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
            {/* <Redirect from="/" to="/wallet" /> */}
          </Switch>
          <Redirect to="/quickstart" />
          {/* {isAuthenticated ? <Redirect to="/quickstart" /> : <Redirect to="/nonauthenticated" />} */}
        </div>
      </Layout>
    </Router>
  );
};

export const Logo = () => (
  <img height="70%" src="https://shibaverse.io/wp-content/uploads/2018/02/logo-z-napisem_2.png"></img>
);

export default App;
