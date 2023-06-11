import Image from 'next/image';
import logo from '@/../public/bilgeadam-logo.png';

const Menu = () => {
  return (
    <aside className='menu__container'>
      <div className='logo__container'>
        <Image src={logo} alt='Bilgeadam Logo' />
        <h1>Bilgeadam</h1>
        <h2>Front-End Development Course</h2>
        <h2>Students</h2>
      </div>
      <nav className='nav__container'>
        <div className='nav__link'>Test</div>
        <div className='nav__link'>Test</div>
        <div className='nav__link'>Test</div>
      </nav>
    </aside>
  );
};
export default Menu;
