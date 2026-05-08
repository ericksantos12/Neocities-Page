import Layout from '../components/Layout.jsx';
import Age from '../components/Age.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import GoatCounter from '../components/GoatCounter.jsx';

export default function About() {
  const easterFound = sessionStorage.getItem('easterFound');

  return (
    <Layout title="About" glitchId="gamma">
      <GoatCounter />
      <AudioPlayer src="https://cdn.discordapp.com/attachments/334598557145366528/1107516616398356480/Donkey_Kong_2_OST_Stickerbrush_Symphony.mp3" />
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">About</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div className="window-content main-body about-body">
            <section className="window-section">
              <h3>About:</h3>
              <p>Hello everyone! my name is Erick I'm <Age /> years old and I'm studying Software Development in Brazil.</p>
              <p>I'm having fun developing new things and I'm learning a lot of new stuff.</p>
              <p>One of my favorite aesthetics is Old Web and Weirdcore, when I've found neocities my eyes literally sparkled and I had the idea to make this website.</p>
              <p>Thanks for visiting!</p>
            </section>
            <hr className="divider" />
            <section className="window-section">
              <h3>My Setup:</h3>
              <div>
                <h4>Peripheral Specs</h4>
                <p><strong>Headphone</strong> - Havit HV-H2002D</p>
                <p><strong>Keyboard</strong> - Corsair K68 ABNT2 Cherry MX Red</p>
                <p><strong>Mouse</strong> - T-Dagger Sergeant T-TGM202</p>
              </div>
              <div>
                <h4>Computer Specs</h4>
                <p><strong>MB</strong> - ASUS PRIME B450M G/BR (w/ VRM Heatsink)</p>
                <p><strong>CPU</strong> - AMD Ryzen 5 3600XT - 3.8Ghz</p>
                <p><strong>MEM</strong> - 32GB HyperX Predator 2666Mhz</p>
                <p><strong>GFX</strong> - Galax NVIDIA GeForce RTX 3060 TI 8GB</p>
                <p><strong>SSD</strong> - 240GB Kingston A400 SATAIII</p>
                <p><strong>HDD</strong> - 1TB Hitachi 7200 RPM SATAIII</p>
                <p><strong>HDD</strong> - 3TB Seagate 5900 RPM SATAIII</p>
                <p><strong>OS</strong> - Windows 11 Pro x64</p>
              </div>
            </section>
            <hr className="divider" />
            <section className="window-section">
              <h3>Credits:</h3>
              <ul className="general-list">
                <li><a target="_blank" rel="noreferrer" href="https://jdan.github.io/98.css/?ref=producthunt#window">98.css</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://10015.io/tools/css-text-glitch-effect-generator">CSS Text Glitch Effect</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://win98icons.alexmeub.com">Windows 98 Icon Viewer</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://anilist.co/forum/thread/24917">Minzkraut Spotify Embed</a></li>
                <li><a target="_blank" rel="noreferrer" href="http://www.3dtextmaker.com/cgi-bin/3dtext.pl">3D Text Maker</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.htmlcommentbox.com">HTML Comment Box</a></li>
                <li className={`secret-item ${easterFound ? 'is-visible' : ''}`}><a target="_blank" rel="noreferrer" href="https://cooltext.com">Cool Text</a></li>
              </ul>
            </section>
            <hr className="divider" />
            <section className="window-section">
              <h3>Tracklist:</h3>
              <ul className="general-list">
                <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=mdPlcKg-qFs">Donkey Kong 2 OST - Stickerbrush Symphony</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=woPff-Tpkns">Toby Fox - Dogsong</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=wxAZfLenfa0">Donkey Kong 2 OST - Forest Interlude</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=NPoRXusuZa4">Calum Bowen - An Old Friend (The Green Box)</a></li>
                <li className={`secret-item ${easterFound ? 'is-visible' : ''}`}><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=1pGh-wLu1pA">Restart - Levo Comigo</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
