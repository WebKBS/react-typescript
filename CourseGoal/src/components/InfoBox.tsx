type HintBoxProps = {
  mode: 'hint';
  children: React.ReactNode;
};

type WarningBoxProps = {
  mode: 'warning';
  severity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps; // 합집합 타입

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;

  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props; // props의 타입이 WarningBoxProps이므로 severity가 있음을 보장한다.

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
