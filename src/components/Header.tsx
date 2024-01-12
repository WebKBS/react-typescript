export default function Header({
  children,
  image,
}: {
  children: React.ReactNode;
  image: { src: string; alt: string };
}) {
  return (
    <header>
      <img src={image.src} alt={image.src} />
      {children}
    </header>
  );
}
