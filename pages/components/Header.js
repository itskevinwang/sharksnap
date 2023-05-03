import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="text-3xl font-bold py-5 text-center">
      SharkSnap
      <Navigation />
    </header>
  );
}