import Slogen from './slogen';
import NavBar from './Nav';
import { getSubCategories } from '@/services/homeService';

export default async function Header() {
  const subOne = await getSubCategories('1');
  const subTwo = await getSubCategories('2');
  return (
    <header className="sticky inset-x-0 left-0 top-0 z-50">
      <Slogen />
      <NavBar subOne={subOne} subTwo={subTwo} />
    </header>
  );
}
