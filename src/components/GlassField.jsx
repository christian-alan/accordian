/** Vivid, slowly drifting backdrop so the glass has something to blur. */
export default function GlassField({ visible }) {
  return (
    <div
      aria-hidden="true"
      className={`glass-field pointer-events-none fixed inset-0 overflow-hidden transition-opacity duration-600 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="glass-stripe" />
      <div className="glass-orb glass-orb-a" />
      <div className="glass-orb glass-orb-b" />
      <div className="glass-orb glass-orb-c" />
    </div>
  );
}
