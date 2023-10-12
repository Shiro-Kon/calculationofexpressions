import './Header.scss'
type Props = {}

const Header = (props: Props) => {
  return (
    <header id='top'>
     <span><a href="#X">Обчислення виразу</a></span>
     <span><a href="#ind">Індивідульне завдання</a></span>
    </header>
  )
}

export default Header