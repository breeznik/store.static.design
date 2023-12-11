/* eslint-disable @next/next/no-img-element */
'use client';
import NavbarI from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, Offcanvas } from 'react-bootstrap';
import { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const pages = ['Home', 'About Us', 'PDF Catalog', 'Contact Us', 'Store'];
  const paths = ['/', '/about', '/catalog', '/contact', '/store'];
  const [navHidder, setNavHidder] = useState(false);

  //sideNav togglers
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentPath, setCurrentPath] = useState('/');

  // useEffect(() => {
  //   console.log(currentPath);
  //   if (!paths.includes(window.location.pathname) || currentPath === '/store') {
  //     console.log('trigger');
  //     setNavHidder(true);
  //   } else {
  //     setNavHidder(false);
  //   }
  //   console.log(navHidder);
  // }, [currentPath]);

  const handleLocationChange = () => {
    const newPath = window.location.pathname;
    if (paths.includes(newPath) === false || newPath === '/store') {
      setNavHidder(true);
    } else {
      setNavHidder(false);
    }
  };

  useEffect(() => {
    if (!paths.includes(window.location.pathname) || currentPath === '/store') {
      setNavHidder(true);
    } else {
      setNavHidder(false);
    }
  }, [currentPath]);

  useEffect(() => {
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  if (navHidder) {
    return <></>;
  }

  return (
    <NavbarI expand="lg" className="navbar border px-4 overflow-hidden">
      <Container fluid>
        <div className="row w-100">
          <div className="nav-left col-12 col-lg-6 d-flex">
            <div className="logo ">
              <img src="/genral/logo.png" alt="image" />
            </div>

            <div className="pages d-flex flex-nowrap gap-3 align-items-center d-none d-lg-flex">
              {pages.map((page, index) => {
                return (
                  <Link
                    as={Link}
                    href={`${paths[index]}`}
                    key={index}
                    className={`text-nowrap  ${paths[index] === currentPath ? 'current-page' : 'navlink'}`}
                    style={{ textDecoration: 'none' }}
                    onClick={() => setCurrentPath(paths[index])}
                  >
                    {page}
                  </Link>
                );
              })}
            </div>
            <NavbarI.Toggle className="ms-auto" onClick={handleShow} aria-controls="navbarScroll" />
          </div>
          <div className="nav-right col-6 d-none d-lg-flex align-items-center justify-content-around">
            <div className="row d-flex flex-nowrap">
              <div className="col-8">
                <div className="inputHolder w-60 border gap-2 d-flex">
                  <img src="/genral/mg.png" alt="icon" />
                  <input className="w-100 color-dark" placeholder="Search Catalog from Top Brands" type="text" />
                </div>
              </div>
              <div className="col-4 d-flex flex-nowrap align-items-center" style={{ gap: '24px' }}>
                <select className="langSelector w-30">
                  <option vlaue="English">English</option>
                  <option vlaue="Hindi">hindi</option>
                  <option vlaue="Urdu">Urdu</option>
                </select>
                <div className="profileWrapper">
                  <img src="/genral/profile.png" alt="prfile" />
                </div>
                <div className="cartWrapper">
                  <img src="/genral/shopping-cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {show && (
          <div className="row mt-4 d-lg-none w-100">
            <Offcanvas show={show} onHide={handleClose} className="aj">
              <img
                src="/genral/cross.png"
                className="position-absolute nav-close-toggle"
                alt="icon"
                style={{ width: '25px', height: '25px' }}
                onClick={() => handleClose()}
              />
              <div className="aj flex-column ">
                <div className="pages d-flex flex-wrap  flex-column gap-3 w-100 align-content-center text-center">
                  <img className="logo-seconday" src="/genral/logo.png" alt="image" />
                  <>
                    {pages.map((page, index) => {
                      return (
                        <span
                          key={index}
                          className={`text-nowrap ${paths[index] === currentPath && 'current-page'}`}
                          onClick={() => handleClose()}
                        >
                          <Nav.Link href={`${paths[index]}`}>{page}</Nav.Link>
                        </span>
                      );
                    })}
                  </>
                </div>
              </div>
            </Offcanvas>
          </div>
        )}
      </Container>
    </NavbarI>
  );
};

export default Navbar;
