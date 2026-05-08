export default function GlitchTitle({ id, title }) {
  return (
    <div className="glitch-wrapper">
      <div id={id} className="glitch" data-glitch={title}>
        {title}
      </div>
    </div>
  );
}
