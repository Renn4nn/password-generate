import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 24px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #2f2f2f;;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
`;

export const Screen = styled.div`
  padding: 12px 16px;
  border: 2px solid #ccc;
  border-radius: 12px;
  font-size: 16px;
  background-color: #f0f0f0;
  color: #333;
  width: 500px;

  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #7b61ff, #6344e0);
  color: #fff;
  border: none;
  border-radius: 9999px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;


export const Title = styled.h1`
  font-size: 32px;
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 24px;
  color: #a259ff;
  font-weight: bold;

  letter-spacing: 2px;
`;
