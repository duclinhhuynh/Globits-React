import Header from "./Header";
import Sidebar from "./Sidebar";
import Style from './DefaultLayout.module.css'
function DefaultLayout({children}) {
  return (
      <div className={Style.wrapper}>
        <Header/>
        <div className={Style.container}>
          {/* <Sidebar/> */}
          <div className={Style.content}>
            {children}
          </div>
        </div>
      </div>
  );
}

export default DefaultLayout;