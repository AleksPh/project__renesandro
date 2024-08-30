import logoImg from "../../images/logo.png"


const Header= ()=>{
  return(
    <div className="header">
      <div className="header__title">
        <div className="header__title-image"><img src={logoImg} alt="RenesandroImage" /></div>
        <div className="header__title-text">Renesandro</div>
      </div>
      <div className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-link"><a target='_blank' href='https://www.renesandro.info/'>Info</a></li>
          <li className="header__menu-link"><a target='_blank' href='https://www.renesandro.info/'>Team</a></li>
          <li className="header__menu-link"><a target='_blank' href='https://www.renesandro.info/'>Example</a></li>
          <li className="header__menu-link"><a target='_blank' href='https://www.renesandro.info/'>Demo</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header