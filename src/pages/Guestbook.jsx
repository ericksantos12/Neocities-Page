import Layout from '../components/Layout.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import GoatCounter from '../components/GoatCounter.jsx';
import HtmlCommentBox from '../components/HtmlCommentBox.jsx';

export default function Guestbook() {
  return (
    <Layout title="Guestbook" glitchId="beta">
      <GoatCounter />
      <AudioPlayer src="https://cdn.discordapp.com/attachments/334598557145366528/1108186439268704276/Donkey_Kong_Country_2_-_Forest_Interlude_Restored.mp3" />
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Guestbook</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div className="window-content">
            <HtmlCommentBox />
          </div>
        </div>
      </div>
    </Layout>
  );
}
