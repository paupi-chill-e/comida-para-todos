import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './styles/burguerToggle.css';
import { ShowContext } from '../../App'
import { animateScroll as scroll} from 'react-scroll';

const BurguerToggle = (props) => {

  const [positionScroll, setPositionScroll] = useContext(ShowContext);

  const classToogle = props.burgerOn === true ? 'toggleVisible' : 'toggleHidden'

  return (
    <div className='containerBurguerToggle'>
      <div className={classToogle}>
        <Link to="/Nosotros" className='oli'>
          <div className='boxSection'>
            <p className='textBurgerToggle' onClick={()=>{ props.setBurgerOn(!props.burgerOn)}}>Quiénes somos</p>
          </div>
        </Link>
        <Link to="/Nosotros" className='oli'>
          <div className='boxSection' onClick={()=>{setPositionScroll(2850); scroll.scrollTo(2850); props.setBurgerOn(!props.burgerOn) }}>
            <p className='textBurgerToggle'>Qué hacemos</p>
          </div>
        </Link>
        <Link to="/Nosotros" className='oli'>
          <div className='boxSection' onClick={()=>{setPositionScroll(4000); scroll.scrollTo(4000); props.setBurgerOn(!props.burgerOn)}}>
            <p className='textBurgerToggle'>Transparencia</p>
          </div>
        </Link>
        <Link to="/Donaciones" className='oli'>
          <div className='boxSection'>
            <p className='textBurgerToggle' onClick={()=>{ props.setBurgerOn(!props.burgerOn)}}>Haz tu donación</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BurguerToggle;


