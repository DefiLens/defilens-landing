import { useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {
  const [menu, setMenu] = useState(false);

  const handleMenubar = (e: any) => {
    setMenu(e.target.checked);
  };
  return <Header handleMenubar={handleMenubar} menu={menu} setMenu={setMenu} />;
};

export default HeaderContainer;
