import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Btn from "./Button";

export default function Navbar() {
  return (
    <Nav>
      <div className="brand">
        <img src={logo} alt="logo" />
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Vendedores</a>
          </li>
          <li>
            <a href="#">Criar</a>
          </li>
        </ul>
      </div>
      <Btn text="Contato" />
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;

  .toggle {
    display: none;
  }
  .links {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    padding: 2.5rem 8rem;

    ul {
      display: flex;
      list-style-type: none;
      gap: 3rem;

      li {
        a {
          color: #002000;
          text-decoration: none;
          transition: 0.4s ease-in-out;
          &:hover {
            color: #2d69fd;
          }
        }
      }
    }
  }
`;
