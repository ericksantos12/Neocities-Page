import Layout from '../components/Layout.jsx';
import Age from '../components/Age.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import GoatCounter from '../components/GoatCounter.jsx';
import { asset } from '../utils/assets.js';

export default function Home() {
  return (
    <Layout title="Home" glitchId="alpha">
      <GoatCounter />
      <AudioPlayer src="https://cdn.discordapp.com/attachments/334598557145366528/1107516616398356480/Donkey_Kong_2_OST_Stickerbrush_Symphony.mp3" />
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Home</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body main-body">
          <div className="window-content">
            <section className="window-section">
              <div className="content-title">
                <img src={asset('assets/sparkles.gif')} className="extra-gif" alt="Retro blue sparkles gif" />
                <img src={asset('assets/titles/welcome.gif')} className="title-gif" alt="Welcome Animated 3D Text" />
                <img src={asset('assets/sparkles.gif')} className="extra-gif" alt="Retro blue sparkles gif" />
              </div>
              <p>
                Hello! I'm Erick, a <Age />-year-old from Brazil. I'm currently studying Software Development and have a solid foundation in Web Development, ranging from basic to intermediate skills. My experience includes working with technologies such as JavaScript, PHP, Python, and MySQL, among others.
              </p>
            </section>

            <hr className="divider" />

            <section className="window-section">
              <div className="content-title">
                <img src={asset('assets/titles/Links.gif')} alt="" />
              </div>
              <a href="https://twitter.com/ErickSantosS12"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" /></a>
              <a href="https://www.last.fm/user/ericksantos12"><img src="https://img.shields.io/badge/Last.FM-D51007?style=for-the-badge&logo=last.fm&logoColor=white" alt="Last.FM" /></a>
              <a href="https://anilist.co/user/ErickSantos12"><img src="https://img.shields.io/badge/anilist-02A9FF?style=for-the-badge&logo=anilist&logoColor=white" alt="AniList" /></a>
              <a href="https://www.roblox.com/users/44476962/profile"><img src="https://img.shields.io/badge/roblox-000000?style=for-the-badge&logo=roblox&logoColor=white" alt="Roblox" /></a>
              <a href="https://open.spotify.com/user/ericksousa12"><img src="https://img.shields.io/badge/spotify-1DB954?style=for-the-badge&logo=spotify&logoColor=white" alt="Spotify" /></a>
              <a href="https://github.com/ericksantos12"><img src="https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
              <a href="https://letterboxd.com/ericksantos12/"><img src="https://img.shields.io/badge/Letterboxd-202830?style=for-the-badge&logo=letterboxd&logoColor=white" alt="Letterboxd" /></a>
            </section>

            <hr className="divider" />

            <section className="window-section">
              <div className="content-title">
                <img src={asset('assets/titles/Interests.gif')} className="title-gif" alt="" />
              </div>
              <p>
                I'm interested in <strong>games</strong>, <strong>development</strong>, and I also enjoy <strong>anime</strong> and <strong>cartoons</strong>. I love playing games like <strong>Roblox</strong> and <strong>Minecraft</strong>, and my favorite genre is <strong>Sandbox</strong>. I have a wide range of musical tastes, but lately, I've been really into <strong>alternative rock</strong> and <strong>J-pop</strong>, <strong>J-rock</strong>. <strong>Shoegaze</strong> used to be one of my favorite genres too. I absolutely adore <strong>mozzarella cheese</strong>
              </p>
            </section>

            <hr className="divider" />

            <section className="window-section">
              <div className="content-title">
                <img src={asset('assets/titles/Pet.gif')} className="title-gif" alt="" />
              </div>
              <iframe width="314" height="321" scrolling="no" src="https://gifypet.neocities.org/pet/pet.html?name=Bicke&dob=1684121605&gender=b&element=Water&pet=cat.gif&map=https%3A%2F%2Ffiles.catbox.moe%2Fjesryv.png&background=https%3A%2F%2Ffiles.catbox.moe%2Fccklly.png&tablecolor=black&textcolor=black" frameBorder="0" title="Bicke pet"></iframe>
            </section>

            <hr className="divider" />

            <section className="window-section">
              <div className="content-title">
                <img src={asset('assets/titles/Spotify.gif')} className="title-gif" alt="" />
              </div>
              <a href="https://spotify-github-profile.vercel.app/api/view?uid=ericksousa12&redirect=true">
                <img className="spotify-embed" src="https://embed.minzkraut.com/spotify/embed.png?key=ericksousa12&headerFont=Redressed&color=3366ff&border=2448b4" alt="Spotify History Embed" />
              </a>
            </section>
          </div>
        </div>
      </div>
      <footer>
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">Some cools 88x31</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body footer-body">
            <div className="window-content">
              <a href={asset('assets/erick.gif')} download="erick.gif"><img src={asset('assets/erick.gif')} width="88" height="31" alt="Erick button" /></a><br />
              <hr />
              <img src={asset('assets/88x31/badapple.gif')} width="88" height="31" alt="" />
              <img src={asset('assets/88x31/fubutton16.gif')} width="88" height="31" alt="" />
              <hr />
              <a href="https://clooko.neocities.org" target="_blank" rel="noreferrer"><img src={asset('assets/88x31/clooko.png')} alt="Clooko's Button" width="88" height="31" /></a>
              <hr />
              <a href="https://gifypet.neocities.org/" target="_blank" rel="noreferrer"><img src="https://gifypet.neocities.org/images/badge.gif" width="88" height="31" alt="" /></a>
              <a href="https://kirbysdreamsite.neocities.org" target="_blank" rel="noopener noreferrer"><img src="https://kirbysdreamsite.neocities.org/kirbysdreamsite.gif" alt="" /></a>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
