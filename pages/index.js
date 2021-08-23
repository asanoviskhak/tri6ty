import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
export default function Home() {
  async function handleOnSubmit(e) {
    e.preventDefault();
  
    const formData = {};
  
    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });
  
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then(()=>{
      var messageModalElement = document.getElementById('messageModal');
	    var messageForm = document.querySelector('#form-message');
      var mes = document.querySelector(".success-message")
      mes.hidden = false
      messageForm.querySelectorAll('input, textarea').forEach(function (inputElement) {
        inputElement.value = '';
      });
      
    });
  }
  return (
    <div className="body-page scroll-anim">
      <Head>
        <title>Tri6ty | 360° Photo Booths</title>
        <meta name="description" content="360 degree photos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <div>
            <div className="icon icon-spin" >
            <p>loading</p>
            </div>
          </div>
          <header className="navbar-top navbar navbar-a navbar-expand-lg navbar-dark">
            <nav className="container-fluid px-0">
              <a className="navbar-brand hide-on-scroll-md" href="#">
                <span className="logo">
                  <img className="light-logo" src="/img/logo.png" alt="Website Template" />
                </span>
                {/* <span className="text ms-2 ms-md-3">
                  <span className="line strong">Tri6ty</span>
                  <span className="line sub">360°</span>
                </span> */}
              </a>
              <button className="navbar-toggler order-lg-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenuCollapse" aria-controls="navbarMenuCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon icon-menu icon-menu-a">
                  <span className="bars">
                    <span className="bar1" />
                    <span className="bar2" />
                  </span>
                </span>
              </button>
              <div className="collapse navbar-collapse order-lg-1" id="navbarMenuCollapse">
                <div className="navbar-menu-wrapper">
                  <div className="nav-body">
                    <ul className="navbar-nav nav-menu-top hide-on-scroll-lg">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#works">Examples</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#contact">Contact</a>
                      </li>
                    </ul>
                    <div className="nav-fullscreen-lg">
                      <div className="nav-bg" />
                      <ul className="navbar-nav nav">
                        <li className="nav-item">
                          <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Gallery</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Item</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Demo</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nav-footer-md">
                    <nav className="nav-social nav-social-a">
                      <ul>
                        <li className="nav-item">
                          <a className="nav-link btn" href="#">
                            <span className="icon">
                              <i className="ion ion-logo-instagram" />
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link btn" href="#">
                            <span className="icon">
                              <i className="ion ion-logo-twitter" />
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link btn" href="#">
                            <span className="icon">
                              <i className="ion ion-logo-dribbble" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className="cover-page">
            <div className="cover-bg">
              <Image layout="fill" className="fit" src="/img/bg-default.jpg" alt="cover" />
            </div>
            <div className="cover-bg video-container">
              <video autoPlay="autoplay" loop="loop" muted="muted" width={640} height={360}>
                <source src="vid/tri6ty.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="cover-bg bg-black opacity-5" />
          </div>
          <main className="page-main sections-scroll" id="mainpage">
            <section id="home" className="section hero-a fullscreen-h content-white">
              <div className="section-body">
                <div className="hero-content section-content container content-width-full anim">
                  <div className="row">
                    <div className="content-col col-12 col-md-10 col-lg-10 text-left">
                      <div className="title-desc">
                        <div className="rellax" data-rellax-speed={1} data-rellax-percentage="0.5">
                          <div data-anim-visible="scale-y-2" data-anim-start="0.75">
                            <p className="display-subtitle-3 mb-0 anim-1">360° Photo Booths by</p>
                          </div>
                        </div>
                        <div className="rellax" data-rellax-speed={1} data-rellax-percentage="0.5">
                          <div data-anim-visible="scale-y-2" data-anim-start="0.9">
                            <h1 className="display-title-1 title-font anim-2 mb-0">Tri6ty</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="hero-footer hide-on-scroll">
                <div className="section-footer-right footer-scrolldown">
                  <a className="btn-scrolldown-a" href="#about">
                    <span className="text text-before">
                      Scroll
                    </span>
                    <span className="icon icon-scrolldown" />
                  </a>
                </div>
              </footer>
            </section>
            <section id="about" className="section section-a section-color-1">
              <div className="section-body">
                <div className="section-content container content-width-full anim">
                  <div className="row gx-0 justify-content-between row-text-lg-fig">
                    <div className="col-12 col-lg-5 text-left">
                      <div className="title-desc large-text-size">
                        <h2 className="display-3 title-font anim-1" data-anim-visible="fade">The best startup in this town</h2>
                        <div className="anim-2 mt-5" data-anim-visible="fade">
                          <p className="mb-0">We create unique experience throught all of our working process. We did so
                            to empower our
                            customers. All of this is since our first year of providing such great services.</p>
                        </div>
                      </div>
                      <div className="btns mt-5">
                        <a className="btn btn-inline-a btn-light btn-anim mb-0" href="#works">
                          <span className="icon icon-arrow-a icon-border">
                            <span className="arrow-right" />
                          </span>
                          <span className="text">View works</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5 order-lg-1 pos-rel">
                      <figure className="figure-a col-fig mt-5 mt-lg-0">
                        <div className="img-1" data-anim-visible="fade">
                          <div className="img-anim" data-anim-visible="scale-y-2">
                            <Image layout="fill" className="img img-4x4 rounded-pill-off" src="/img/items/img-square-1.jpg" alt="..." />
                          </div>
                        </div>
                        <div className="img-2 rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5">
                          <div className="img-anim" data-anim-visible="scale-y-2">
                            <Image layout="fill" className="img img-4x4 rounded-pill-off " src="/img/items/img-square-2.jpg" alt="..." />
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="services" className="section section-a section-color-1">
              <div className="section-body pt-0">
                <div className="section-content container content-width-full anim">
                  <div className="row">
                    <div className="col col-12 col-lg-12">
                      <div className="item-list row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-lg-5 gy-5 anim-list">
                        <div className="col">
                          <div className="item item-feature-a" data-anim-visible="fade">
                            <div className="item-body">
                              <h4 className="f-title text-uppercase">Branding and <br />marketing</h4>
                              <p>We do this to make this word a nice and better place to live.
                                Another text replace
                                this.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="item item-feature-a" data-anim-visible="fade">
                            <div className="item-body">
                              <h4 className="f-title text-uppercase">Design and <br />conception</h4>
                              <p>We do this to make this word a nice and better place to live.
                                Another text replace
                                this.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="item item-feature-a" data-anim-visible="fade">
                            <div className="item-body">
                              <h4 className="f-title text-uppercase">Architecture <br />and coding</h4>
                              <p>We do this to make this word a nice and better place to live.
                                Another text replace
                                this.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="item item-feature-a" data-anim-visible="fade">
                            <div className="item-body">
                              <h4 className="f-title text-uppercase">Finance <br />and marketing</h4>
                              <p>We do this to make this word a nice and better place to live.
                                Another text replace
                                this.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="works" className="section section-a section-color-1">
              <div className="section-border-top" data-anim-visible="scale-x" />
              <div className="section-title title-anim title-top">
                <h2 className="text title-font rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5">E.</h2>
              </div>
              <div className="section-body">
                <div className="section-content container content-width-full anim">
                  <div className="row justify-content-between mb-4">
                    <div className="col-12 col-lg-5 text-left">
                      <div className="title-desc large-text-size">
                        <h2 className="display-3 title-font anim-1" data-anim-visible="fade">Examples</h2>
                        <div className="anim-2 mt-5" data-anim-visible="fade">
                          <p className="mb-0">Here are some of our selected projects. We did so many projects since the
                            begining.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-section part-wrapper">
                    <div className="item-list row row-cols-1 row-cols-md-2 g-5 anim-list">
                      <div className="col">
                        <div className="row row-cols-1 g-5">
                          <div className="col">
                            <a className="item item-image-a col-12 col-lg-10" href="item.html#or_an_url">
                              <div className="item-header">
                                <div className="rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5" style={{ transform: 'translate3d(0px, 26px, 0px)' }}>
                                  <p className="number title-font text-stroke">01</p>
                                </div>
                              </div>
                              <div className="item-img" data-anim-visible="scale-y-2">
                                <div className="img-anim">
                                  <picture>
                                    <source media="(max-width: 640px)" srcSet="/img/items/img-portrait3.jpg" />
                                    <img className="fit" src="/img/items/img-square-3.jpg" alt="..." />
                                  </picture>
                                </div>
                              </div>
                              <div className="item-body text-left">
                                <div className="desc text-shadow rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5" style={{ transform: 'translate3d(0px, 26px, 0px)' }}>
                                  <h4 className="title-font">Alfabeta</h4>
                                  <p>Street photo</p>
                                </div>
                              </div>
                              <div className="item-hover-icon">
                                <span className="icon">
                                  <i className="ion-ios-arrow-forward" />
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a className="item item-image-a" href="item.html#or_an_url">
                              <div className="item-header">
                                <div className="rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5" style={{ transform: 'translate3d(0px, 26px, 0px)' }}>
                                  <p className="number title-font text-stroke">03</p>
                                </div>
                              </div>
                              <div className="item-img" data-anim-visible="scale-y-2">
                                <div className="img-anim">
                                  <picture>
                                    <source media="(max-width: 640px)" srcSet="/img/items/img-portrait1.jpg" />
                                    <img className="fit" src="/img/items/img-sample1.jpg" alt="..." />
                                  </picture>
                                </div>
                              </div>
                              <div className="item-body text-left">
                                <div className="desc text-shadow rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5" style={{ transform: 'translate3d(0px, 26px, 0px)' }}>
                                  <h4 className="title-font">Yeflow</h4>
                                  <p>Studio photo</p>
                                </div>
                              </div>
                              <div className="item-hover-icon">
                                <span className="icon">
                                  <i className="ion-ios-arrow-forward" />
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row row-cols-1 g-5">
                          <div className="col">
                            <a className="item item-image-a" href="item.html#or_an_url">
                              <div className="item-header text-lg-end">
                                <div className="rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5" style={{ transform: 'translate3d(0px, 26px, 0px)' }}>
                                  <p className="number title-font text-stroke">02</p>
                                </div>
                              </div>
                              <div className="item-img" data-anim-visible="scale-y-2">
                                <div className="img-anim">
                                  <picture>
                                    <source media="(max-width: 640px)" srcSet="/img/items/img-portrait4.jpg" />
                                    <img className="fit" src="/img/items/img-sample4.jpg" alt="..." />
                                  </picture>
                                </div>
                              </div>
                              <div className="item-body text-left">
                                <div className="desc text-shadow rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5" style={{ transform: 'translate3d(0px, 26px, 0px)' }}>
                                  <h4 className="title-font">Pinkital</h4>
                                  <p>Landscape photo</p>
                                </div>
                              </div>
                              <div className="item-hover-icon">
                                <span className="icon">
                                  <i className="ion-ios-arrow-forward" />
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="col d-flex justify-content-end">
                            <a className="item item-image-a col-12 col-lg-9" href="item.html#or_an_url">
                              <div className="item-header text-lg-end">
                                <div className="rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5" style={{ transform: 'translate3d(0px, 26px, 0px)' }}>
                                  <p className="number title-font text-stroke">04</p>
                                </div>
                              </div>
                              <div className="item-img" data-anim-visible="scale-y-2">
                                <div className="img-anim">
                                  <picture>
                                    <source media="(max-width: 640px)" srcSet="/img/items/img-portrait2.jpg" />
                                    <img className="fit" src="/img/items/img-portrait2.jpg" alt="..." />
                                  </picture>
                                </div>
                              </div>
                              <div className="item-body text-left">
                                <div className="desc text-shadow rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5" style={{ transform: 'translate3d(0px, 26px, 0px)' }}>
                                  <h4 className="title-font">Lampiew</h4>
                                  <p>Architecture photo</p>
                                </div>
                              </div>
                              <div className="item-hover-icon">
                                <span className="icon">
                                  <i className="ion-ios-arrow-forward" />
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="image-separator" className="section section-a section-image-only section-color-1">
              <div className="section-cover">
                <div className="row g-0">
                  <div className="col-12 col-lg-8" data-anim-visible="scale-x-2">
                    <Image layout="fill" className="fit" src="/img/items/img-sample2.jpg" alt="..." />
                  </div>
                </div>
              </div>
            </section>
            <section id="missions" className="section section-a section-color-1">
              <div className="section-body">
                <div className="section-content container content-width-full anim">
                  <div className="row justify-content-between">
                    <div className="col-12 col-lg-5 text-left">
                      <div className="title-desc large-text-size">
                        <h2 className="display-3 title-font anim-1" data-anim-visible="fade">About our experiences and missions</h2>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="title-desc large-text-size">
                        <div className="anim-2" data-anim-visible="fade">
                          <p className="mb-0">We create unique experience throught all of our working process. We did so
                            to empower our
                            customers. All of this is since our first year of providing such great services.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="projects" className="section section-a section-color-1">
              <div className="section-border-top" data-anim-visible="scale-x" />
              <div className="section-body">
                <div className="section-content container content-width anim d-lg-none">
                  <div className="row mb-4">
                    <div className="col-12 col-lg-8 text-left">
                      <div className="title-desc">
                        <h2 className="display-3 anim-1 mb-0">Areas of work</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-content content-width-full px-0 anim">
                  <div className="swiper-container slider-simple-a animated">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide slide-item-a">
                        <div className="item-wrapper">
                          <div className="row gy-5">
                            <div className="col-12 col-md-6 col-lg-5">
                              <div className="item-content with-margin">
                                <div className="item-header mb-4">
                                  <p className="number title-font text-stroke">01</p>
                                </div>
                                <h3 className="title title-font display-3 mb-5">Amaazing<br />Project</h3>
                                <h4 className="category display-subtitle-3">Studio photo</h4>
                                <div className="btns mt-5">
                                  <a className="btn btn-inline-a btn-light btn-anim mb-0" href="item.html" re>
                                    <span className="icon icon-arrow-a icon-border">
                                      <span className="arrow-right" />
                                    </span>
                                    <span className="text">Learn more</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-7">
                              <div className="item-image rounded-md">
                                <div className="anim-img" data-anim-visible="scale-x-2">
                                  <img src="/img/items/img-sample2.jpg" alt="image" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide slide-item-a">
                        <div className="item-wrapper">
                          <div className="row gy-5">
                            <div className="col-12 col-md-6 col-lg-5">
                              <div className="item-content with-margin">
                                <div className="item-header mb-4">
                                  <p className="number title-font text-stroke">02</p>
                                </div>
                                <h3 className="title title-font display-3 mb-5">Nivision <br />Flawier</h3>
                                <h4 className="category display-subtitle-3">Street photo</h4>
                                <div className="btns mt-5">
                                  <a className="btn btn-inline-a btn-light btn-anim mb-0" href="item.html">
                                    <span className="icon icon-arrow-a icon-border">
                                      <span className="arrow-right" />
                                    </span>
                                    <span className="text">Learn more</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-7">
                              <div className="item-image rounded-md">
                                <div className="anim-img" data-anim-visible="scale-x-2">
                                  <img src="/img/items/img-sample3.jpg" alt="image" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide slide-item-a">
                        <div className="item-wrapper">
                          <div className="row gy-5">
                            <div className="col-12 col-md-6 col-lg-5">
                              <div className="item-content with-margin">
                                <div className="item-header mb-4">
                                  <p className="number title-font text-stroke">03</p>
                                </div>
                                <h3 className="title title-font display-3 mb-5">Painticus <br />Matine</h3>
                                <h4 className="category display-subtitle-3">Graduation</h4>
                                <div className="btns mt-5">
                                  <a className="btn btn-inline-a btn-light btn-anim mb-0" href="item.html">
                                    <span className="icon icon-arrow-a icon-border">
                                      <span className="arrow-right" />
                                    </span>
                                    <span className="text">Learn more</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-7">
                              <div className="item-image rounded-md">
                                <div className="anim-img" data-anim-visible="scale-x-2">
                                  <img src="/img/items/img-sample4.jpg" alt="image" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                    <div className="slider-btns">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-5">
                          <div className="btns">
                            <div className="slider-btn slider-prev swiper-button-prev">
                              <span className="icon icon-arrow-b">
                                <i className="arrow-left" />
                              </span>
                            </div>
                            <div className="slider-btn slider-next swiper-button-next">
                              <span className="icon icon-arrow-b">
                                <i className="arrow-right" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="products" className="section section-a section-color-1">
              <div className="section-border-top" data-anim-visible="scale-x" />
              <div className="section-title title-anim title-top">
                <h2 className="text title-font rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5">P.</h2>
              </div>
              <div className="section-body">
                <div className="section-content container content-width-full anim">
                  <div className="row justify-content-between mb-4">
                    <div className="col-12 col-lg-5 text-left">
                      <div className="title-desc large-text-size">
                        <h2 className="display-3 title-font anim-1" data-anim-visible="fade">Products</h2>
                        <div className="anim-2 mt-5" data-anim-visible="fade">
                          <p className="mb-0">Here are some products that we made. You can select one. We made so many
                            products since the
                            begining.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="part-wrapper mt-section">
                    <div className="item-list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 anim-list-delay">
                      <div className="col">
                        <a className="item item-image-b" href="item.html#or_an_url" data-anim-visible="fade">
                          <div className="item-img">
                            <div className="img-anim" data-anim-visible="scale-y-2">
                              <div className="img-container">
                                <img className="fit" src="/img/items/img-square-2.jpg" alt="..." />
                                <div className="item-hover-icon">
                                  <span className="icon">
                                    <i className="ion-ios-arrow-forward" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-body">
                            <div className="desc">
                              <div className="row">
                                <div className="col">
                                  <h4>Alfabeta</h4>
                                </div>
                                <div className="col-auto">
                                  <span className="price">$159</span>
                                </div>
                                <div className="col-12">
                                  <hr className="hr-a" data-anim-visible="scale-x" />
                                </div>
                              </div>
                              <p className="category">Photo booth S</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col">
                        <a className="item item-image-b" href="item.html#or_an_url" data-anim-visible="fade">
                          <div className="item-img">
                            <div className="img-anim" data-anim-visible="scale-y-2">
                              <div className="img-container">
                                <img className="fit" src="/img/items/img-square-3.jpg" alt="..." />
                                <div className="item-hover-icon">
                                  <span className="icon">
                                    <i className="ion-ios-arrow-forward" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-body">
                            <div className="desc">
                              <div className="row">
                                <div className="col">
                                  <h4>Clokpink</h4>
                                </div>
                                <div className="col-auto">
                                  <span className="price">$79</span>
                                </div>
                                <div className="col-12">
                                  <hr className="hr-a" data-anim-visible="scale-x" />
                                </div>
                              </div>
                              <p className="category">Photo booth SM</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col">
                        <a className="item item-image-b" href="item.html#or_an_url" data-anim-visible="fade">
                          <div className="item-img">
                            <div className="img-anim" data-anim-visible="scale-y-2">
                              <div className="img-container">
                                <img className="fit" src="/img/items/img-square-4.jpg" alt="..." />
                                <div className="item-hover-icon">
                                  <span className="icon">
                                    <i className="ion-ios-arrow-forward" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-body">
                            <div className="desc">
                              <div className="row">
                                <div className="col">
                                  <h4>Bookins</h4>
                                </div>
                                <div className="col-auto">
                                  <span className="price">$45</span>
                                </div>
                                <div className="col-12">
                                  <hr className="hr-a" data-anim-visible="scale-x" />
                                </div>
                              </div>
                              <p className="category">Photo booth M</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col">
                        <a className="item item-image-b" href="item.html#or_an_url" data-anim-visible="fade">
                          <div className="item-img">
                            <div className="img-anim" data-anim-visible="scale-y-2">
                              <div className="img-container">
                                <img className="fit" src="/img/items/img-square-5.jpg" alt="..." />
                                <div className="item-hover-icon">
                                  <span className="icon">
                                    <i className="ion-ios-arrow-forward" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-body">
                            <div className="desc">
                              <div className="row">
                                <div className="col">
                                  <h4>Recording</h4>
                                </div>
                                <div className="col-auto">
                                  <span className="price">$245</span>
                                </div>
                                <div className="col-12">
                                  <hr className="hr-a" data-anim-visible="scale-x" />
                                </div>
                              </div>
                              <p className="category">Photo booth L</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col">
                        <a className="item item-image-b" href="item.html#or_an_url" data-anim-visible="fade">
                          <div className="item-img">
                            <div className="img-anim" data-anim-visible="scale-y-2">
                              <div className="img-container">
                                <img className="fit" src="/img/items/img-square-6.jpg" alt="..." />
                                <div className="item-hover-icon">
                                  <span className="icon">
                                    <i className="ion-ios-arrow-forward" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-body">
                            <div className="desc">
                              <div className="row">
                                <div className="col">
                                  <h4>Chairwood</h4>
                                </div>
                                <div className="col-auto">
                                  <span className="price">$349</span>
                                </div>
                                <div className="col-12">
                                  <hr className="hr-a" data-anim-visible="scale-x" />
                                </div>
                              </div>
                              <p className="category">Photo booth ML</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col">
                        <a className="item item-image-b" href="item.html#or_an_url" data-anim-visible="fade">
                          <div className="item-img">
                            <div className="img-anim" data-anim-visible="scale-y-2">
                              <div className="img-container">
                                <img className="fit" src="/img/items/img-square-7.jpg" alt="..." />
                                <div className="item-hover-icon">
                                  <span className="icon">
                                    <i className="ion-ios-arrow-forward" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-body">
                            <div className="desc">
                              <div className="row">
                                <div className="col">
                                  <h4>Teeshee</h4>
                                </div>
                                <div className="col-auto">
                                  <span className="price">$29</span>
                                </div>
                                <div className="col-12">
                                  <hr className="hr-a" data-anim-visible="scale-x" />
                                </div>
                              </div>
                              <p className="category">Photo booth XL</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="reviews" className="section section-a section-color-1">
              <div className="section-border-top" data-anim-visible="scale-x" />
              <div className="section-body">
                <div className="section-content container content-width-full anim">
                  <div className="row justify-content-between gy-5">
                    <div className="col-12 col-lg-5 text-left">
                      <div className="title-desc large-text-size">
                        <h2 className="display-3 title-font anim-1 mb-0" data-anim-visible="fade">Customer feedback and reviews</h2>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 text-left">
                      <div className="swiper-container slider-simple-b" data-anim-visible="fade">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="item-slider item-quote-a">
                              <div className="item-body">
                                <blockquote className="quote">
                                  <span className="quote-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="37.002" height="33.114" viewBox="0 0 37.002 33.114">
                                      <path data-name="Path 4" d="M34.409,0V4.56a7.322,7.322,0,0,0-3.211,4.3,25.306,25.306,0,0,0-1.028,8.093v1.413H35.95V32.114H22.462V21.838A30.83,30.83,0,0,1,25.481,7.065,13.635,13.635,0,0,1,34.473,0ZM11.929,0V4.56a7.322,7.322,0,0,0-3.211,4.3A25.306,25.306,0,0,0,7.69,16.956v1.413H13.47V32.114H-.018V21.838A30.83,30.83,0,0,1,3,7.065,13.635,13.635,0,0,1,11.993,0Z" transform="translate(0.551 0.5)" fill="rgba(255,255,255,0.07)" stroke="currentColor" strokeWidth={1} />
                                    </svg>
                                  </span>
                                  <span>
                                    We can tell our relatives that we did the best choice when choosing it. One thought: nice
                                    work !
                                  </span>
                                </blockquote>
                              </div>
                              <div className="item-header mt-5">
                                <div className="row">
                                  <div className="col-auto">
                                    <img className="icon-img-lg rounded-pill" src="/img/items/img-avatar-1.jpg" loading="lazy" alt="Item" />
                                  </div>
                                  <div className="col">
                                    <h5 className="mb-1 mt-2">J. Morgan</h5>
                                    <p className="mb-0">Journalist</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="item-slider item-quote-a">
                              <div className="item-body">
                                <blockquote className="quote">
                                  <span className="quote-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="37.002" height="33.114" viewBox="0 0 37.002 33.114">
                                      <path data-name="Path 4" d="M34.409,0V4.56a7.322,7.322,0,0,0-3.211,4.3,25.306,25.306,0,0,0-1.028,8.093v1.413H35.95V32.114H22.462V21.838A30.83,30.83,0,0,1,25.481,7.065,13.635,13.635,0,0,1,34.473,0ZM11.929,0V4.56a7.322,7.322,0,0,0-3.211,4.3A25.306,25.306,0,0,0,7.69,16.956v1.413H13.47V32.114H-.018V21.838A30.83,30.83,0,0,1,3,7.065,13.635,13.635,0,0,1,11.993,0Z" transform="translate(0.551 0.5)" fill="rgba(255,255,255,0.07)" stroke="currentColor" strokeWidth={1} />
                                    </svg>
                                  </span>
                                  <span>
                                    This product is something that we really trusted since the first
                                    time we had it. You will not regret it.
                                  </span>
                                </blockquote>
                              </div>
                              <div className="item-header mt-5">
                                <div className="row">
                                  <div className="col-auto">
                                    <img className="icon-img-lg rounded-pill" src="/img/items/img-avatar-2.jpg" loading="lazy" alt="Item" />
                                  </div>
                                  <div className="col">
                                    <h5 className="mb-1 mt-2">E. Helen</h5>
                                    <p className="mb-0">Designer</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="image-separator-2" className="section section-a section-image-only section-color-1">
              <div className="section-cover">
                <div className="row g-0">
                  <div className="col-12 col-lg-8" data-anim-visible="scale-x-2">
                    <Image layout="fill" className="fit" src="/img/items/img-sample7.jpg" alt="..." />
                  </div>
                </div>
              </div>
            </section>
            {/* <section id="subscribe" className="section section-a section-color-1 ">
              <div className="section-body">
                <div className="section-content container content-width-full anim">
                  <div className="row justify-content-between gy-5">
                    <div className="col-12 col-lg-5 text-left">
                      <div className="title-desc large-text-size">
                        <h2 className="display-3 title-font anim-1" data-anim-visible="fade">Subscribe</h2>
                        <div className="anim-2 mt-5" data-anim-visible="fade">
                          <p className="mb-0">Don&quot;t miss any new opportunity, Hurry up! register now and get early access
                            for all future updates</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 text-left">
                      <form id="form-subscribe" className="form-a form-subscribe" method="post" action="http://demo.cutekit.net/studiofix/ajaxserver/serverfile.php" data-anim-visible="fade">
                        <div className="mb-4 success-gone">
                          <label htmlFor="name-subscribe" className="form-label form-label-a">Name:</label>
                          <input type="text" className="form-control form-control-a" id="name-subscribe" placeholder="Firstname Lastname" required />
                        </div>
                        <div className="mb-4 success-gone">
                          <label htmlFor="email-subscribe" className="form-label form-label-a">Email:</label>
                          <input type="email" className="form-control form-control-a" id="email-subscribe" placeholder="your@email.com" required />
                        </div>
                        <div className="mt-4 success-gone">
                          <button type="submit" className="btn rounded-pill 
                          btn-outline btn-black">
                            <span className="text">Subscribe</span>
                          </button>
                        </div>
                        <div className="info">
                          <p className="success-show">Thank you for your subscription.</p>
                          <p className="error">Oops, an error happened.</p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            <section id="contact" className="section section-a section-color-2">
              <div className="section-title title-anim title-top">
                <h2 className="text title-font rellax" data-rellax-speed="1.2" data-rellax-percentage="0.5">C.</h2>
              </div>
              <div className="section-body section-contact" itemScope itemType="https://schema.org/Organization">
                <div className="section-content container content-width-full anim">
                  <div className="row justify-content-between">
                    <div className="col-12 col-lg-12 text-left">
                      <div className="title-desc large-text-size mb-5">
                        <h2 className="display-3 title-font anim-1" data-anim-visible="fade">Contact</h2>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5 text-left">
                      <div className="title-desc large-text-size">
                        <div className="anim-2" data-anim-visible="fade">
                          <p className="mb-0">Feel free to ask us any questions related to our activities. We will be happy
                            to answer you.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal modal-a " id="messageModal" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog popup-container">
                      <div className="modal-content">
                        <div className="popup-header">
                          <div className="title">
                            Write to us
                          </div>
                          <div className="btns-group">
                            <button className="btn-icon btn-white ms-3" data-bs-dismiss="modal">
                              <span className="icon"><i className="ion-md-close" /></span>
                            </button>
                          </div>
                        </div>
                        <div className="popup-body">
                          <form id="form-message" className="form-a form-message form-message" method="post" onSubmit={handleOnSubmit}>
                            <div className="mb-3">
                              <label htmlFor="name-message" className="form-label">Name</label>
                              <input type="text" className="form-control form-control-a" id="name" name="name" placeholder="Firstname Lastname" required />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="email-message" className="form-label">Email</label>
                              <input type="email" className="form-control form-control-a" id="email" name="email" placeholder="your@email.com" required />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="message-message" className="form-label">Message</label>
                              <textarea className="form-control form-control-b" id="message" name="message" placeholder="Hello, your message" required defaultValue={""} />
                            </div>
                            <div className="mt-4">
                              <button className="btn btn-outline btn-black btn-sm rounded-pill" type="submit">
                                <span className="text">Send message</span>
                              </button>
                              <div className="error-show">
                                <p className>Ooops, an error happened</p>
                              </div>
                              <div className="mt-2 success-message" hidden>
                                <p className="text">Thanks, your message was send! Now you can close the form</p>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <form className="form-contact">
                    </form>
                  </div>
                </div>
                <div className="section-content container content-width-full anim  mt-section ">
                  <div className="row anim-4  gx-lg-5 gy-5">
                    <div className="col-12 col-md-6 col-lg-6 text-left">
                      <h4 className="label-b text-uppercase">Say hello</h4>
                      <div className="d-flex align-items-center anim-2" data-anim-visible="fade">
                        <a className="email email-main btn-inline" href="mailto:hello@ourinbox.com" itemProp="email">hello@ourinbox.com</a>
                        <button className="btn-fab btn-black ms-3" data-bs-toggle="modal" data-bs-target="#messageModal">
                          <span className="icon"><i className="ion-md-mail" /></span>
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 text-left">
                      <div itemProp="department" itemScope itemType="https://schema.org/Place" data-anim-visible="fade">
                        <h4 className="label-b text-uppercase" itemProp="name">Antartica Studio</h4>
                        <div className="dep-address" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                          <div className="addr-line">Phone: <span itemProp="telephone">(0)123-456-7890</span></div>
                          <div className="addr-line">
                            <span itemProp="streetAddress">12 Avenue de l&quot;Est</span>
                          </div>
                          <div className="addr-line">
                            <span itemProp="addressLocality">New Warc City, Antartica</span>
                          </div>
                          <div className="btns mt-3">
                            <a className="btn btn-inline-a btn-light btn-anim mb-0" href="http://maps.google.com/" target="_blank" rel="noreferrer">
                              <span className="icon icon-border">
                                <i className="ion-ios-pin" />
                              </span>
                              <span className="text">View location</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 text-left">
                      <div itemProp="department" itemScope itemType="https://schema.org/Place" data-anim-visible="fade">
                        <h4 className="label-b text-uppercase" itemProp="name">New York Box</h4>
                        <div className="dep-address" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                          <div className="addr-line">Phone: <span itemProp="telephone">(0)123-456-7890</span></div>
                          <div className="addr-line">
                            <span itemProp="streetAddress">21 East Street, First Box</span>
                          </div>
                          <div className="addr-line">
                            <span itemProp="addressLocality">Los Ingales, Arctica</span>
                          </div>
                          <div className="btns mt-3">
                            <a className="btn btn-inline-a btn-light btn-anim mb-0" href="http://maps.google.com/" target="_blank" rel="noreferrer">
                              <span className="icon icon-border">
                                <i className="ion-ios-pin" />
                              </span>
                              <span className="text">View location</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer id="page-footer" className="section section-a section-color-2">
            <div className="section-border-top" data-anim-visible="scale-x" />
            <div className="section-body py-5">
              <div className="section-content container content-width-full anim">
                <div className="row justify-content-between">
                  <div className="col-12 col-lg text-left">
                    <nav className="nav-footer">
                      <ul className="nav nav-list list-inline">
                        <li className="nav-item">
                          <a className="nav-link btn" href="#">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link btn" href="#">
                            Works
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link btn" href="#">
                            Demo page
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-12 col-lg-auto text-right">
                    <nav className="nav-social nav-social-a">
                      <ul>
                        <li className="nav-item">
                          <a className="nav-link btn" href="#an_url_here">
                            <span className="icon">
                              <i className="ion ion-logo-instagram" />
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link btn" href="#an_url_here">
                            <span className="icon">
                              <i className="ion ion-logo-twitter" />
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link btn" href="#an_url_here">
                            <span className="icon">
                              <i className="ion ion-logo-linkedin" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 col-lg-12 text-left">
                    <p className="note ">© 2000 <span className="marked">Tri6ty</span>. All RightReserved</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
      </div>
      <Script src="js/bootstrap.min.js"></Script>

        
        <Script src="js/swiper/swiper-bundle.min.js"></Script>
        <Script src="js/rellax/rellax-custom.js"></Script>
        <Script src="js/scroll-slider.js"></Script>
        <Script src="js/section-scroll.js"></Script>
        <Script src="js/scroll-anim.js"></Script>

        
        <Script src="js/axios/axios.min.js"></Script>
        <Script src="js/init-form.js"></Script>

        
        <Script src="js/main.js"></Script>
      </div>
      )
}
