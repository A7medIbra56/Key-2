import Link from "next/link";
import BodyClassSetter from "./components/BodyClassSetter";
import Script from "next/script";
import TrustpilotSection from './components/TrustpilotSection';
import MapSection from './components/MapSection';
import ServiceFeaturesSection from './components/ServiceFeaturesSection';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <BodyClassSetter classes={["home", "elementor-page-43"]} />
      <div data-elementor-type="wp-page" data-elementor-id="43" className="elementor elementor-43" data-elementor-settings="[]">
        <div className="elementor-section-wrap">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-730e8fd1 elementor-section-content-middle elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="730e8fd1" data-element_type="section" data-settings='{"background_background":"classic","sticky":"top","sticky_on":["desktop","tablet","mobile"],"sticky_offset":0,"sticky_effects_offset":0}'>
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7412b272" data-id="7412b272" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-4837898f elementor-widget elementor-widget-image" data-id="4837898f" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img fetchPriority="high" decoding="async" width="1043" height="408" alt="KEY Experts" src="/key-experts.png" className="attachment-full size-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4f779368" data-id="4f779368" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-45216507 elementor-nav-menu__align-right elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="45216507" data-element_type="widget" data-settings='{"full_width":"stretch","layout":"horizontal","submenu_icon":{"value":"fas fa-caret-down","library":"fa-solid"},"toggle":"burger"}' data-widget_type="nav-menu.default">
                    <div className="elementor-widget-container">
                      <nav data-migration_allowed="1" data-migrated="0" role="navigation" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-framed e--animation-draw">
                        <ul id="menu-1-45216507" className="elementor-nav-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-43 current_page_item menu-item-103">
                            <Link href="/" className="elementor-item elementor-item-active menu-link">Home</Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
                            <Link href="/auto-locksmith-services" className="elementor-item menu-link">Auto</Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-105">
                            <Link href="/commercial-locksmith-services" className="elementor-item menu-link">Commercial</Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-107">
                            <Link href="/domestic-locksmith-services" className="elementor-item menu-link">Domestic</Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106">
                            <Link href="/contact-us" className="elementor-item menu-link">Contact Us</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Top Info Bar */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-40973b87 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="40973b87" data-element_type="section" data-settings='{"background_background":"classic","sticky":"top","sticky_on":["desktop","tablet"],"sticky_offset":144,"sticky_effects_offset":0}'>
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5732de74" data-id="5732de74" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-5cee8296 elementor-widget elementor-widget-heading" data-id="5cee8296" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">Locksmith Services Covering the whole of the UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7d7bf44d" data-id="7d7bf44d" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-5a95363a elementor-widget elementor-widget-heading" data-id="5a95363a" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">Call us now on <b>0547773330 </b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hero Section */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-16b121ba elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="16b121ba" data-element_type="section" data-settings='{"background_background":"classic"}'>
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-57841d0a" data-id="57841d0a" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-7a1d8e5c elementor-widget elementor-widget-heading" data-id="7a1d8e5c" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h1 className="elementor-heading-title elementor-size-default">Commercial, Residential & Automotive Locksmith Services</h1>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-58008156 elementor-widget elementor-widget-heading" data-id="58008156" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">SERVICING THROUGHOUT THE UK</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-7c8fff91 elementor-mobile-align-justify elementor-widget elementor-widget-button" data-id="7c8fff91" data-element_type="widget" data-widget_type="button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <Link href="#services" className="elementor-button-link elementor-button elementor-size-lg elementor-animation-pulse-grow" role="button">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">EXPLORE OUR SERVICES</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-4f46a88a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4f46a88a" data-element_type="section" id="services" data-settings='{"background_background":"classic"}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3e02fa98" data-id="3e02fa98" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-1f4930a4 elementor-widget elementor-widget-heading" data-id="1f4930a4" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">RESIDENTIAL, COMMERCIAL & AUTOMOTIVE LOCKSMITHS</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-4c881a0b elementor-widget elementor-widget-heading" data-id="4c881a0b" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">What kind of service do we provide</h2>
                    </div>
                  </div>
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-668b272f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="668b272f" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-wide">
                      <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-9f43b15" data-id="9f43b15" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-ed81e6d elementor-cta--layout-image-above elementor-cta--valign-middle elementor-cta--skin-classic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action" data-id="ed81e6d" data-element_type="widget" data-widget_type="call-to-action.default">
                            <div className="elementor-widget-container">
                              <Link href="/auto-locksmith-services" className="elementor-cta">
                                <div className="elementor-cta__bg-wrapper">
                                  <div className="elementor-cta__bg elementor-bg" style={{ backgroundImage: "url(/wp-content/uploads/2021/06/locksmith-4.jpg)" }}></div>
                                  <div className="elementor-cta__bg-overlay"></div>
                                </div>
                                <div className="elementor-cta__content">
                                  <h2 className="elementor-cta__title elementor-cta__content-item elementor-content-item">Automotive Locksmith Services</h2>
                                  <div className="elementor-cta__description elementor-cta__content-item elementor-content-item">Car lock broken? Keys got lost? No problem, we can fix it.</div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Repeat for Residential and Commercial */}
                      <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2202093c" data-id="2202093c" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-4cd5d450 elementor-cta--layout-image-above elementor-cta--valign-middle elementor-cta--skin-classic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action" data-id="4cd5d450" data-element_type="widget" data-widget_type="call-to-action.default">
                            <div className="elementor-widget-container">
                              <Link href="/domestic-locksmith-services" className="elementor-cta">
                                <div className="elementor-cta__bg-wrapper">
                                  <div className="elementor-cta__bg elementor-bg" style={{ backgroundImage: "url(/wp-content/uploads/2021/06/locksmith-3.jpg)" }}></div>
                                  <div className="elementor-cta__bg-overlay"></div>
                                </div>
                                <div className="elementor-cta__content">
                                  <h2 className="elementor-cta__title elementor-cta__content-item elementor-content-item">Residential Locksmith Services</h2>
                                  <div className="elementor-cta__description elementor-cta__content-item elementor-content-item">Do you need a locksmith service at your private property?</div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5665956e" data-id="5665956e" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-53a18edf elementor-cta--layout-image-above elementor-cta--valign-middle elementor-cta--skin-classic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action" data-id="53a18edf" data-element_type="widget" data-widget_type="call-to-action.default">
                            <div className="elementor-widget-container">
                              <Link href="/commercial-locksmith-services" className="elementor-cta">
                                <div className="elementor-cta__bg-wrapper">
                                  <div className="elementor-cta__bg elementor-bg" style={{ backgroundImage: "url(/wp-content/uploads/2021/06/locksmith-2.jpg)" }}></div>
                                  <div className="elementor-cta__bg-overlay"></div>
                                </div>
                                <div className="elementor-cta__content">
                                  <h2 className="elementor-cta__title elementor-cta__content-item elementor-content-item">Commercial Locksmith Services</h2>
                                  <div className="elementor-cta__description elementor-cta__content-item elementor-content-item">Do you need a locksmith service at your commercial property?</div>
                                </div>
                              </Link>
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

          {/* UK Coverage Info */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-69bddbd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="69bddbd" data-element_type="section" data-settings='{"background_background":"classic"}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-36748307" data-id="36748307" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-1fe183fa elementor-widget elementor-widget-heading" data-id="1fe183fa" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">We provide our services through the UK</h3>
                    </div>
                  </div>
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-368f8fa elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="368f8fa" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-wide">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5df50632" data-id="5df50632" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-f7eb036 elementor-mobile-align-left elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="f7eb036" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-text">England - Wales - Scotland - Northern Ireland</span>
                                </li>
                              </ul>
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

          {/* Trustpilot and National Service Section */}
          <TrustpilotSection />

          {/* Contact Form Section */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-6630c34a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6630c34a" data-element_type="section" data-settings='{"background_background":"classic"}'>
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-50b83fd0" data-id="50b83fd0" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-11015687 elementor-widget elementor-widget-heading" data-id="11015687" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Want to know more?</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-37968d32 elementor-widget elementor-widget-heading" data-id="37968d32" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title elementor-size-default">FOR ANY LOCKSMITH SERVICE YOU NEED</p>
                    </div>
                  </div>
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-e370a33 animated-slow elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e370a33" data-element_type="section" data-settings='{"background_background":"classic","animation":"fadeIn"}'>
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6b1c6843" data-id="6b1c6843" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-3cb3e427 elementor-button-align-stretch elementor-widget elementor-widget-form" data-id="3cb3e427" data-element_type="widget" data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}' data-widget_type="form.default">
                            <div className="elementor-widget-container">
                              <form className="elementor-form" method="post" name="New Form">
                                <div className="elementor-form-fields-wrapper elementor-labels-above">
                                  <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_2 elementor-col-100">
                                    <label htmlFor="form-field-field_2" className="elementor-field-label">Full Name</label>
                                    <input size={1} type="text" name="form_fields[field_2]" id="form-field-field_2" className="elementor-field elementor-size-sm elementor-field-textual" />
                                  </div>
                                  <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_1 elementor-col-100">
                                    <label htmlFor="form-field-field_1" className="elementor-field-label">Phone Number</label>
                                    <input size={1} type="tel" name="form_fields[field_1]" id="form-field-field_1" className="elementor-field elementor-size-sm elementor-field-textual" />
                                  </div>
                                  <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                                    <label htmlFor="form-field-email" className="elementor-field-label">Email Address</label>
                                    <input size={1} type="email" name="form_fields[email]" id="form-field-email" className="elementor-field elementor-size-sm elementor-field-textual" required aria-required="true" />
                                  </div>
                                  <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                                    <label htmlFor="form-field-message" className="elementor-field-label">Message</label>
                                    <textarea className="elementor-field-textual elementor-field elementor-size-sm" name="form_fields[message]" id="form-field-message" rows={3}></textarea>
                                  </div>
                                  <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                    <button type="submit" className="elementor-button elementor-size-md elementor-animation-pulse-grow">
                                      <span>
                                        <span className="elementor-button-text">SUBMIT FORM</span>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </form>
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

          {/* Call Box */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-7dff5b21 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7dff5b21" data-element_type="section" data-settings='{"background_background":"classic"}'>
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-10adba72" data-id="10adba72" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-147d7fc1 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default" data-id="147d7fc1" data-element_type="section" data-settings='{"background_background":"classic"}'>
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-68553a7c" data-id="68553a7c" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-17df9c1 elementor-widget elementor-widget-heading" data-id="17df9c1" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <p className="elementor-heading-title elementor-size-default"> <b>OR CALL US ON</b></p>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-51ea6d2d elementor-icon-list--layout-inline elementor-align-center elementor-tablet-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="51ea6d2d" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items elementor-inline-items">
                                <li className="elementor-icon-list-item elementor-inline-item">
                                  <Link href="https://wa.me/971547773330">
                                    <span className="elementor-icon-list-icon">
                                      <i aria-hidden="true" className="fas fa-phone-alt"></i>
                                    </span>
                                    <span className="elementor-icon-list-text">0547773330</span>
                                  </Link>
                                </li>
                              </ul>
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

          {/* Stats Section */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-77c1ce1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="77c1ce1" data-element_type="section" data-settings='{"background_background":"classic"}'>
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4f481ad8" data-id="4f481ad8" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-9a47225 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9a47225" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-491ff692" data-id="491ff692" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-a3957e2 elementor-widget elementor-widget-heading" data-id="a3957e2" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <p className="elementor-heading-title elementor-size-default">STATISTICS</p>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-484692f9 elementor-widget elementor-widget-heading" data-id="484692f9" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">Key Experts in numbers</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4d971baf" data-id="4d971baf" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-435d1951 elementor-widget elementor-widget-counter" data-id="435d1951" data-element_type="widget" data-widget_type="counter.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-counter">
                                <div className="elementor-counter-number-wrapper">
                                  <span className="elementor-counter-number" data-duration="1000" data-to-value="10000" data-from-value="0" data-delimiter=",">10,000</span>
                                </div>
                                <div className="elementor-counter-title"><b> PLUS</b> callouts each year</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7e000949" data-id="7e000949" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-cf315ae elementor-widget elementor-widget-counter" data-id="cf315ae" data-element_type="widget" data-widget_type="counter.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-counter">
                                <div className="elementor-counter-number-wrapper">
                                  <span className="elementor-counter-number" data-duration="500" data-to-value="200" data-from-value="0" data-delimiter=",">200</span>
                                </div>
                                <div className="elementor-counter-title"><b>PLUS </b> Locksmiths </div>
                              </div>
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

          {/* Service Features Section */}
          <ServiceFeaturesSection />

          {/* Map Section */}

          <MapSection />

          <Footer slug="" />
        </div>
      </div>
    </>
  );
}
