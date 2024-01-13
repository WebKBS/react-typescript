type InfoBoxProps = {
  mode: 'hint' | 'warning';
  severity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
};

export default function InfoBox({ mode, severity, children }: InfoBoxProps) {
  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside
      className={`infobox infobox-warning warning--${
        severity === 'low' ? 'low' : severity === 'medium' ? 'medium' : 'high'
      }`}
    >
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
