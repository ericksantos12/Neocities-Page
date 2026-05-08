import Layout from '../components/Layout.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import GoatCounter from '../components/GoatCounter.jsx';
import Slideshow from '../components/Slideshow.jsx';
import { mariSlides } from '../data/mariSlides.js';

export default function Mari() {
  return (
    <Layout title="Mari" glitchId="alpha">
      <GoatCounter />
      <AudioPlayer src="https://cdn.discordapp.com/attachments/773512975788408842/1020413095287459911/dog.m4a" loop />
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Mari!!! omgg hi :D</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div className="window-content">
            <Slideshow images={mariSlides} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
