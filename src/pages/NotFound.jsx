import AudioPlayer from '../components/AudioPlayer.jsx';

export default function NotFound() {
  return (
    <main>
      <AudioPlayer src="https://cdn.discordapp.com/attachments/773512975788408842/1018603592598441995/majin.m4a" />
      <div className="not-found-page">
        <div className="not-found-content">
          <h1>ページが見つかりません</h1>
          <p><a href="index.html">go back</a></p>
        </div>
      </div>
    </main>
  );
}
