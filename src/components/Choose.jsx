import React from "react";
import styled from "styled-components";
import choose from "../assets/choose.png";
import Button from "./Button";
export default function Choose() {
  return (
    <Section>
      <div className="image">
        <img src={choose} alt="choose" />
      </div>
      <div className="content">
        <h2>Por que você deve escolher nosso site?</h2>
        <p>
          Lorem Ipsum é simplesmente um texto fictício da impressão e
          composição. Lorem Ipsum tem sido o texto fictício padrão da indústria
          de todos os tempos desde os anos 1500, quando um impressor
          desconhecido pegou uma cozinha de tipos e embaralhou-o para fazer um
          livro de espécimes de tipos.
        </p>
        <Button text="Saber mais" blue />
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 9rem;
  gap: 3rem;
  margin-bottom: 5rem;
  .image {
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    h2 {
      font-size: 4rem;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 2rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 50vw;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 1rem;
      }
      p {
        line-height: 1.3rem;
        font-size: 0.9rem;
      }
    }
  }
`;
