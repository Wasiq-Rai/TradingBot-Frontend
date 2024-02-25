'use client'

import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { handleClickScroll } from '@/lib/helpers'
import { usePathname, useSearchParams } from 'next/navigation'

let flag = true

const NavBar = () => {
  // sticky nav bar
  const [stickyClass, setStickyClass] = useState({
    fixed: '',
    header: '',
  })

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const asPath = pathname + (searchParams ? '?' + searchParams.toString() : '')


  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      // window height changed for the demo
      windowHeight < 245
        ? setStickyClass({ fixed: '', header: '' })
        : setStickyClass({ fixed: 'active-height', header: 'sticky-menu' })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
    return () => window.removeEventListener('scroll', stickNavbar)
  }, [])

  // active link switching
  const [hash, setHash] = useState('')

  useEffect(() => {
    setHash(asPath.split('#')[1] || '')
  }, [asPath])

  const isActiveLink = (id: string) => {
    return id === `#${hash}` ? 'active' : ''
  }

  return (
    <header id="header">
      <div id="header-fixed-height" className={cn(stickyClass.fixed)} />

      <div id="sticky-header" className={cn('menu-area', stickyClass.header)}>
        <div className={cn('container custom-container')}>
          <div className="row">
            <div className="col-12">
              <div className={"mobile-nav-toggler"}>
                <i className="fas fa-bars" />
              </div>

              <div className="menu-wrap">
                <nav className={"menu-nav"}>
                  <div className="logo">
                    <Link href={"/"}>
                      {/* <img src={"/img/logo/logo.png"} alt="BigTech Logo" /> */}
                      <h4>Trading Bot</h4>
                    </Link>
                  </div>

                  <div className={cn('navbar-wrap main-menu d-none d-lg-flex')}>
                    <ul className={"navigation"}>
                      <li
                        className={cn(
                          (!hash || hash == "header") && "active",
                          "menu-item-has-children"
                        )}
                      >
                        <Link
                          href="#header"
                          className={"section-link"}
                          onClick={() => handleClickScroll("header")}
                        >
                          Home
                        </Link>
                        <ul className={cn("sub-menu")}>
                          <li className={cn(pathname == "/" && "active")}>
                            <Link href="/">Home One</Link>
                          </li>
                          <li className={cn(pathname == "/home-two" && "active")}>
                            <Link href="/home-two">Home Two</Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cn(hash == "about" && "active")}>
                        <Link
                          href="#about"
                          className={"section-link"}
                          onClick={() => handleClickScroll("about")}
                        >
                          Predictions
                        </Link>
                      </li>
                      <li className={isActiveLink("#sales")}>
                        <Link
                          href="#sales"
                          className={"section-link"}
                          onClick={() => handleClickScroll("sales")}
                        >
                          Market
                        </Link>
                      </li>
                      <li className={isActiveLink("#roadmap")}>
                        <Link
                          href="#roadmap"
                          className={"section-link"}
                          onClick={() => handleClickScroll("roadmap")}
                        >
                          ABout US
                        </Link>
                      </li>
                      <li className={"menu-item-has-children"}>
                        <Link href="/blog">Trade Bot</Link>
                        <ul className={cn("sub-menu")}>
                          <li className={cn(pathname == "/blog" && "active")}>
                            <Link href="/blog">Auto</Link>
                          </li>
                          <li className={cn(pathname == "/blog/blog-details" && "active")}>
                            <Link href="/blog/blog-details">Custom Bot</Link>
                          </li>
                        </ul>
                      </li>
                      <li className={isActiveLink("#orders")}>
                        <Link
                          href="orders"
                          className={"section-link"}
                          onClick={() => handleClickScroll("orders")}
                        >
                          Orders
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={cn("header-action", "d-none d-md-block")}>
                    <ul>
                      <li className={"header-lang"}>
                        
                      </li>
                      <li className={"header-btn"}>
                        <Link href="#" className="btn">
                          Sign in
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              

              <div className={"menu-backdrop"} onClick={() => document.body.classList.remove('mobile-menu-visible')} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar