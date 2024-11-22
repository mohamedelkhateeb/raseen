import Slogen from './slogen';
import NavBar from './Nav';
import { getSubCategories } from '@/services/homeService';

export default async function Header() {
  const [subOne, subTwo, subThree] = await Promise.all([getSubCategories('1'), getSubCategories('2'), getSubCategories('3')]);

  return (
    <header className="sticky inset-x-0 left-0 top-0 z-50">
      <Slogen />
      <NavBar subOne={subOne} subTwo={subTwo} subThree={subThree} />
    </header>
  );
}
