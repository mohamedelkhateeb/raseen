import Slogen from './slogen';
import NavBar from './Nav';

export default function Header() {
  return (
    <header className="sticky inset-x-0 left-0 top-0 z-50">
      <Slogen />
      <NavBar />
    </header>
  );
}
