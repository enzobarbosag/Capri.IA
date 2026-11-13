import { useState } from 'react';
import './App.css';

function App() {
  const [texto, setTexto] = useState('');
  const [imagem, setImagem] = useState('');
  const [carregando, setCarregando] = useState(false);

  function gerarImagem(evento) {
    evento.preventDefault();

    if (texto === '') {
      alert('Digite alguma coisa primeiro!');
      return;
    }

    setCarregando(true);

    const promptFormatado = encodeURIComponent(texto);
    const numeroAleatorio = Math.floor(Math.random() * 1000);
    const urlDaApi = `https://image.pollinations.ai/prompt/${promptFormatado}?seed=${numeroAleatorio}&width=512&height=512&nologo=true`;

    setImagem(urlDaApi);
  }

  return (
    <div className="caixa-principal">
      <h1>CAPRI.IA</h1>
      <h2>seu gerador de imagens artificias</h2>
      <p>De forma aos seus sonhos</p>

      <form onSubmit={gerarImagem}>
        <input
          type="text"
          placeholder="Ex: um dragão vermelho de fogo..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit">Criar Imagem</button>
      </form>

      {carregando && <p className="aviso">Gerando imagem,por favor  aguarde...</p>}

      {imagem !== '' && (
        <div className="resultado">
          <img
            src={imagem}
            alt="Gerada por IA"
            onLoad={() => setCarregando(false)}
          />
          <br />
          <a href={imagem} target="_blank" rel="noreferrer">
        
          </a>
        </div>
      )}
    </div>
  );
}

export default App;