import Layout from '../components/Layout.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import GoatCounter from '../components/GoatCounter.jsx';

export default function Amandita() {
  return (
    <Layout title="Amandita">
      <GoatCounter />
      <AudioPlayer src="https://cdn.discordapp.com/attachments/334598557145366528/1107664785652322406/RESTART_-_Levo_Comigo.mp3" />
      <img src="https://files.catbox.moe/x630ei.gif" alt="'Ganielle' Pink sparkle title gif" style={{ margin: '1rem auto', display: 'block' }} />
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Gabi my beloved</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div className="window-content">
            <div className="content-title">
              <img src="/assets/titles/Tribute_to_G_.gif" className="title-gif" alt="" />
            </div>
            <img src="/assets/heart gifs/loveline.gif" className="divider amandita-divider" alt="" />
            <div className="kiss-image">
              <img src="/assets/heart gifs/love.gif" width="20%" alt="" />
              <img src="https://ericksantos12.github.io/amandita/img/gabi%20gifs/kiss.gif" alt="Erick Kissing Gabi retro gif" width="50%" />
              <img src="/assets/heart gifs/love.gif" width="20%" alt="" />
            </div>
            <img src="/assets/heart gifs/loveline.gif" className="divider amandita-divider" alt="" />
            <p><em>Diante da vastidão do tempo e da imensidão do universo, é um imenso prazer para mim dividir um planeta e uma época com você.</em></p>
            <p>— Carl Sagan</p>
            <br />
          </div>
        </div>
      </div>
    </Layout>
  );
}
