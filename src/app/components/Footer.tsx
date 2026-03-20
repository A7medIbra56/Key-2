import React from 'react';
import Link from 'next/link';

export default function Footer({ slug }: { slug: string }) {
  return (
    <div className="elementor-82">
      {/* Give Us A Call / Send Email Footer Area */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-6977f723 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6977f723" data-element_type="section" data-settings='{"background_background":"classic"}'>
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-17a8d35" data-id="17a8d35" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-567aa4fa elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-widget elementor-widget-icon-box" data-id="567aa4fa" data-element_type="widget" data-widget_type="icon-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon elementor-animation-pulse-grow">
                        <i aria-hidden="true" className="fas fa-phone-alt"></i>
                      </span>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">
                        <span>Give us a call</span>
                      </h3>
                      <p className="elementor-icon-box-description">0547773330</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-22de8dd5" data-id="22de8dd5" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-7f3509fb elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-widget elementor-widget-icon-box" data-id="7f3509fb" data-element_type="widget" data-widget_type="icon-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <a className="elementor-icon elementor-animation-pulse-grow" href="mailto:Keyexperts333@gmail.com">
                        <i aria-hidden="true" className="fas fa-envelope"></i>
                      </a>
                    </div>
                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">
                        <a href="mailto:Keyexperts333@gmail.com">Send an email</a>
                      </h3>
                      <p className="elementor-icon-box-description">Keyexperts333@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Links & Copyright */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-17c768bc elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="17c768bc" data-element_type="section" data-settings='{"background_background":"classic"}'>
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f3fefb0" data-id="f3fefb0" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-fc74a53 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="fc74a53" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3bf8c585 elementor-hidden-phone" data-id="3bf8c585" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-3fff2b59 elementor-nav-menu__align-center elementor-nav-menu--dropdown-mobile elementor-nav-menu--stretch elementor-nav-menu__text-align-center elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="3fff2b59" data-element_type="widget" data-settings='{"full_width":"stretch","layout":"horizontal","submenu_icon":{"value":"fas fa-caret-down","library":"fa-solid"},"toggle":"burger"}' data-widget_type="nav-menu.default">
                        <div className="elementor-widget-container">
                          <nav data-migration_allowed="1" data-migrated="0" role="navigation" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-drop-out">
                            <ul id="menu-1-3fff2b59" className="elementor-nav-menu">
                              <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-103 ${!slug || slug === '' ? 'current-menu-item page_item current_page_item' : ''}`}>
                                <Link href="/" className={`elementor-item menu-link ${!slug || slug === '' ? 'elementor-item-active' : ''}`}>Home</Link>
                              </li>
                              <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-104 ${slug === 'auto-locksmith-services' ? 'current-menu-item page_item current_page_item' : ''}`}>
                                <Link href="/auto-locksmith-services" className={`elementor-item menu-link ${slug === 'auto-locksmith-services' ? 'elementor-item-active' : ''}`}>Auto</Link>
                              </li>
                              <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-105 ${slug === 'commercial-locksmith-services' ? 'current-menu-item page_item current_page_item' : ''}`}>
                                <Link href="/commercial-locksmith-services" className={`elementor-item menu-link ${slug === 'commercial-locksmith-services' ? 'elementor-item-active' : ''}`}>Commercial</Link>
                              </li>
                              <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-107 ${slug === 'domestic-locksmith-services' ? 'current-menu-item page_item current_page_item' : ''}`}>
                                <Link href="/domestic-locksmith-services" className={`elementor-item menu-link ${slug === 'domestic-locksmith-services' ? 'elementor-item-active' : ''}`}>Domestic</Link>
                              </li>
                              <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-106 ${slug === 'contact-us' ? 'current-menu-item page_item current_page_item' : ''}`}>
                                <Link href="/contact-us" className={`elementor-item menu-link ${slug === 'contact-us' ? 'elementor-item-active' : ''}`}>Contact Us</Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-129f973b" data-id="129f973b" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-3b32e44f elementor-widget elementor-widget-heading" data-id="3b32e44f" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <p className="elementor-heading-title elementor-size-default">CALL US NOW ON <b>0547773330</b></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-83688c2 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="83688c2" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-93afff1" data-id="93afff1" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-4e791cb elementor-widget elementor-widget-heading" data-id="4e791cb" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <p className="elementor-heading-title elementor-size-default">© 2021 All rights Reserved. Key Experts Ltd.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d144e01" data-id="d144e01" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-8710e63 elementor-widget elementor-widget-heading" data-id="8710e63" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            <Link href="/privacy-policy">
                              <span style={{ color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 400 }}>Privacy Policy</span>
                            </Link>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
