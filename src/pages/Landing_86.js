import Logo_86 from '../components/Logo_86';
import main from '../assets/images/main-alternative.svg';

import styled from 'styled-components';

const Landing_86 = () => {
    return (
        <Wrapper>
            <nav>
                <Logo_86/>
             
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Job <span>Tracking</span> App</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adip
                    </p>
                    <a href="#" className="btn btn-hero">
                    Login/Register
                </a>
                </div>
              
                <div>
                    <img src={main} alt="job hunt" className="img main-img" />
                </div>
            </div>
        </Wrapper >
    )
}
const Wrapper = styled.main`
  nav {
      width: var(--fluid-width);
      max-width: var(--max-width);
      margin: 0 auto;
      height: var(--nav-height);
      display: flex;
      align-items:center;
  }

  .page{
      min-height: calc(100vh - var(--nav-height));
      display: grid;
      align-items:center;
  }

  h1 {
      font-size:700;

      span {
          color: var(--primary-500);
      }
  }

  p{
      color: var(--grey-600);
  }

  .main-img {
      display:none;
  }

  @media (min-width: 768px) {
      .page {
          grid-template-columns: 1fr 1fr;
          column-gap: 3rem;
      }
      .main-img{
          display: block;
      }
  }

`

export default Landing_86;