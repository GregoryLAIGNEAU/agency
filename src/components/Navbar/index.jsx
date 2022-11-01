import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sun from '../../assets/sun.svg';
import Moon from '../../assets/moon.svg';

const Navbar = () => {
  const body = document.body;
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // useEffect function to get 'isDarkTheme' from the Local Storage.
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
    if (currentTheme) {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
  }, []);

  // useEffect function to store 'isDarkTheme' in the Local Storage.
  useEffect(() => {
    isDarkTheme ?
    (body.classList.add('dark'), body.classList.remove('light')) :
    (body.classList.add('light'), body.classList.remove('dark'));

    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  // Function to update useState
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <header>
      <h1><Link to="/">Agency</Link></h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Company</Link></li>
          <li><Link to="/works">Projects</Link></li>
        </ul>
      </nav>
      <button className='theme-button' onClick={changeTheme}>{ isDarkTheme ? <span>Dark<span><img src={Moon} alt='A moon-shaped icon to switch the theme to light mode' /></span></span> : <span>Light<span><img src={Sun} alt='A sun-shaped icon to switch the theme to dark mode' /></span></span> }</button>
    </header>
  )
}

export default Navbar
