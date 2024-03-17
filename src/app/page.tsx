import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import SideNav from "./shared/SideNav/SideNav";
import Header from "./shared/Header/Header";

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
          <h1>Hello world</h1>
        </div>
      </div>
    </div>
  </main>
  );
}
