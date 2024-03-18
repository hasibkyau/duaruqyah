import React from "react";
import "./Categories.css";
import Image from "next/image";
import logo from "../../../assets/logos/005-fever.png";

const Categories = () => {
  
  return (
    <div className="category-container">
      <div className="header">
        <h2>Categories</h2>
      </div>

      <div className="category-subcontainer">
        <div className="search-box">
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Search by Dua Name"
          />
          <div className="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                stroke="#868686"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="card-container">
          <div className="category-card">
            <div className="left">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="middle">
              <h2>Introduction to Dua</h2>
              <p>Subcategory: 11</p>
            </div>
            <div className="right">
              <h2>15</h2>
              <p>Duas</p>
            </div>
          </div>
          <div className="subcategory-card">
            <div className="left">
              <div class="dotted-border">
                <div className="circle"></div>
                <div className="title">
                  <p>What is Dua</p>
                </div>
              </div>
            </div>

            <div className="left">
              <div class="dotted-border">
                <div className="circle"></div>
                <div className="title">
                  <p>Conditions for Dua to be successful</p>
                </div>
              </div>
            </div>

            <div className="left">
              <div class="dotted-border">
                <div className="circle"></div>
                <div className="title">
                  <p>The Methode Of Dua</p>
                </div>
              </div>
            </div>

            <div className="left">
              <div class="dotted-border">
                <div className="circle"></div>
                <div className="title">
                  <p>Before Dua</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
