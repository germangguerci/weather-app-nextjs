import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {

  const router = useRouter();

  return (
    <MainNav>
      <div className="navigation-container">
        <Link href="/" scroll={false} passHref>
          <a className={router.route === '/' ? 'active' : ''}>Rio de janeiro</a>
        </Link>
        <Link href="/los+angeles" scroll={false} passHref>
          <a className={router.query?.city === 'los+angeles' ? 'active' : ''}>Los Angeles</a>
        </Link>
        <Link href="/beijing" scroll={false} passHref>
          <a className={router.query?.city === 'beijing' ? 'active' : ''}>Beijing</a>
        </Link>
      </div>
    </MainNav>
  );
}

const MainNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 999;
  margin: 0 0 1rem 0;
  background: white;
  border-radius: 1rem;
  height: 4rem;
  margin: 1rem;
  max-width: 1200px;
  @media (max-width: 768px){
    max-width: 90%;
    margin: 1rem auto;
  }
  .navigation-container {
        display:flex;
        justify-content: space-evenly;
        width: 100%;
        a {
          text-transform: uppercase;
          color: #70757a;
          transition: color ease 0.3s;
          text-decoration: none;
          @media (max-width: 768px){
            font-size: 14px;
          }
          &.active {
            color: #3c4043;
            font-weight: 700; 
            text-decoration: underline 2px solid;
          }
        }
      }
  `;