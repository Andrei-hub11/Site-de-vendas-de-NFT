import React from "react";
import styled from "styled-components";
import subscribe from "../assets/subscribe.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export default function Subscribe() {
  return (
    <Section>
      <div className="content">
        <h2>Inscreva-se para obter atualização a cada Novas Ofertas</h2>
        <p>
          Lorem Ipsum é simplesmente um texto fictício da impressão e
          composição. Lorem Ipsum tem sido o padrão da indústria.
        </p>
        <div className="input-container">
          <input type="text" placeholder="Informe seu e-mail" />
          <BsFillArrowRightCircleFill />
        </div>
      </div>
      <div className="image">
        <img src={subscribe} alt="subscribe" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 9rem;
  gap: 10rem;
  margin-bottom: 5rem;
  .image {
    img {
    }
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    /* width: 50%; */
    h2 {
      font-size: 4rem;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
    }
    .input-container {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      gap: 1rem;
      border: 1px solid #c4c4c4;
      border-radius: 3rem;
      input {
        border: none;
        &:focus {
          outline: none;
        }
        padding-left: 2rem;
        padding-right: 5rem;
        font-size: 1.3rem;
      }
      svg {
        color: #2d69fd;
        font-size: 3rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 0 2rem;
    gap: 2rem;
    margin-bottom: 2rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 80vw;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 2rem;
      }
      p {
        line-height: 1.4rem;
      }
      .input-container {
        display: none;
        width: max-content;
        input {
          width: 50%;
        }
      }
    }
  }
`;
