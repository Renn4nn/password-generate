import { useState } from "react";
import { HiOutlineClipboardList } from "react-icons/hi";
import { Container, Screen, Button, Title } from "./components/index";

import { Slider } from "@mui/material";

function App() {
  const [passwordValue, setPasswordValue] = useState(8);
  const [password, setPassword] = useState("");

  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_@-.";

  const mudanca = (p) => {
    setPasswordValue(p.target.value);
  };

  const generator = () => {
    let resultado = "";
    for (let i = 0; i < passwordValue; i++) {
      resultado += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }
    setPassword(resultado);
  };

  const copiar = async () => {
    try {
      if (password === "") {
        alert("Gerar a senha primeiro!");
      } else {
        await navigator.clipboard.writeText(password);
        alert("Senha Copiada: " + password);
      }
    } catch (err) {
      console.error("Falha ao copiar para a área de transferência:", err);
    }
  };

  return (
    <Container>
      <Title>Gerador de senha</Title>
      <Screen>
        <span style={{flex: 1, fontSize: 20, letterSpacing: '0.7px'}}>{password}{" "}</span>
        <button onClick={copiar} style={{ border: "0px" , padding: '0px', margin: '2px', cursor: 'pointer'}}>
          <HiOutlineClipboardList size={20}/>
        </button>
      </Screen>
      <div style={{ width: "530px" }}>
        <Slider
          color="secondary"
          value={passwordValue}
          onChange={mudanca}
          min={8}
          max={30}
        />
      </div>
      <p>{passwordValue}</p>
      <Button onClick={generator}>Gerar</Button>
    </Container>
  );
}

export default App;
