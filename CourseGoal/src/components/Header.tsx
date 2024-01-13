type HeaderProps = {
  children: React.ReactNode;
  image: { src: string; alt: string };
};

export default function Header({ children, image }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
