import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import SideNav from "./shared/SideNav/SideNav";
import Header from "./shared/Header/Header";
import Categories from './home/Categories/Categories'
import DuaPage from './home/DuaPage/DuaPage'
import Settings from './home/Settings/Settings'

export default function Home() {
  return (
  <main>
    <div className="main">
      <div className="side-nav">
        <SideNav></SideNav>
      </div>

      <div className="main-container">
        <div className="header">
          <Header></Header>
        </div>
        <div className="content">
          {/* <Home></Home> */}
          <div className="categories">
            <Categories></Categories>
            </div>
            <div className="dua-page">
                <DuaPage></DuaPage>            
            </div>
            <div className="settings">
                <Settings></Settings>
            </div>
        </div>
      </div>
    </div>
  </main>
  );
}
