export default function GlitchTitle({ id, title, onClick }) {
  return (
    <div className="glitch-wrapper">
      <div id={id} className="glitch" data-glitch={title} data-egg-id={id} onClick={onClick}>
        {title}
      </div>
    </div>
  );
}
