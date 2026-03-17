import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AutoLocksmith } from "./content/AutoLocksmith";
import { CommercialLocksmith } from "./content/CommercialLocksmith";
import { DomesticLocksmith } from "./content/DomesticLocksmith";
import { ContactUs } from "./content/ContactUs";
import BodyClassSetter from "../components/BodyClassSetter";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";


// Header element IDs per page, extracted from original HTML
const pageHeaders: Record<string, {
  sectionId: string;
  logoColId: string;
  logoWidgetId: string;
  navColId: string;
  navWidgetId: string;
  menuId: string;
}> = {
  'auto-locksmith-services': {
    sectionId: '45a15431',
    logoColId: '5d589253',
    logoWidgetId: '785bedbc',
    navColId: '1b88e8c0',
    navWidgetId: '31ac72d9',
    menuId: '31ac72d9',
  },
  'commercial-locksmith-services': {
    sectionId: '74455c5',
    logoColId: '2d7a246',
    logoWidgetId: '30dd7ed',
    navColId: 'c2d267b',
    navWidgetId: '31b4238',
    menuId: '31b4238',
  },
  'domestic-locksmith-services': {
    sectionId: 'b876807',
    logoColId: 'a75b30d',
    logoWidgetId: '512b269',
    navColId: 'f60ada0',
    navWidgetId: 'dc16d6f',
    menuId: 'dc16d6f',
  },
  'contact-us': {
    sectionId: 'b312e41',
    logoColId: 'a061a1d',
    logoWidgetId: '6d74f6f',
    navColId: '94a682b',
    navWidgetId: '29f3b1a',
    menuId: '29f3b1a',
  },
};

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugArray } = await params;
  const slug = slugArray.join('/');

  // Mapping slugs to data
  const pageMap: Record<string, { title: string, component: React.ReactNode, css: string, id: string, bodyClasses: string[] }> = {
    'auto-locksmith-services': {
      title: 'Auto Locksmith Services',
      component: <AutoLocksmith />,
      css: '/wp-content/uploads/elementor/css/post-862977.css',
      id: '86',
      bodyClasses: ['page-template-elementor_canvas', 'elementor-page', 'elementor-page-86']
    },
    'commercial-locksmith-services': {
      title: 'Commercial Locksmith Services',
      component: <CommercialLocksmith />,
      css: '/wp-content/uploads/elementor/css/post-823817.css',
      id: '82',
      bodyClasses: ['page-template-elementor_canvas', 'elementor-page', 'elementor-page-82']
    },
    'domestic-locksmith-services': {
      title: 'Domestic Locksmith Services',
      component: <DomesticLocksmith />,
      css: '/wp-content/uploads/elementor/css/post-84ed22.css',
      id: '84',
      bodyClasses: ['page-template-elementor_canvas', 'elementor-page', 'elementor-page-84']
    },
    'contact-us': {
      title: 'Contact Us',
      component: <ContactUs />,
      css: '/wp-content/uploads/elementor/css/post-500684.css',
      id: '50',
      bodyClasses: ['page-template-elementor_canvas', 'elementor-page', 'elementor-page-50']
    }
  };

  const page = pageMap[slug];

  if (!page) {
    notFound();
  }

  const header = pageHeaders[slug] || pageHeaders['auto-locksmith-services'];

  return (
    <>
      <BodyClassSetter classes={page.bodyClasses} />

      <div data-elementor-type="wp-page" data-elementor-id={page.id} className={`elementor elementor-${page.id}`} data-elementor-settings="[]">
        <div className="elementor-section-wrap">
          {/* Shared Header Section - using per-page element IDs */}
          <section className={`elementor-section elementor-top-section elementor-element elementor-element-${header.sectionId} elementor-section-content-middle elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle`} data-id={header.sectionId} data-element_type="section" data-settings='{"background_background":"classic","sticky":"top","sticky_on":["desktop","tablet","mobile"],"sticky_offset":0,"sticky_effects_offset":0}'>
            <div className="elementor-container elementor-column-gap-default">
              <div className={`elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-${header.logoColId}`} data-id={header.logoColId} data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className={`elementor-element elementor-element-${header.logoWidgetId} elementor-widget elementor-widget-image`} data-id={header.logoWidgetId} data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Link href="/">
                        <img fetchPriority="high" decoding="async" width="1043" height="408" alt="Locksmiths & Locks" src="/wp-content/uploads/Locksmiths-locks-logo-FINAL..png" className="attachment-full size-full" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-${header.navColId}`} data-id={header.navColId} data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className={`elementor-element elementor-element-${header.navWidgetId} elementor-nav-menu__align-right elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu`} data-id={header.navWidgetId} data-element_type="widget" data-settings='{"full_width":"stretch","layout":"horizontal","submenu_icon":{"value":"fas fa-caret-down","library":"fa-solid"},"toggle":"burger"}' data-widget_type="nav-menu.default">
                    <div className="elementor-widget-container">
                      <nav data-migration_allowed="1" data-migrated="0" role="navigation" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-framed e--animation-draw">
                        <ul id={`menu-1-${header.menuId}`} className="elementor-nav-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-103">
                            <Link href="/" className="elementor-item menu-link">Home</Link>
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
                      <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Menu Toggle" aria-expanded="false">
                        <i className="eicon-menu-bar" aria-hidden="true" role="presentation"></i>
                        <span className="elementor-screen-only">Menu</span>
                      </div>
                      <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true">
                        <ul id={`menu-2-${header.menuId}`} className="elementor-nav-menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-103">
                            <Link href="/" className="elementor-item menu-link" tabIndex={-1}>Home</Link>
                          </li>
                          <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-104 ${slug === 'auto-locksmith-services' ? 'current-menu-item page_item current_page_item' : ''}`}>
                            <Link href="/auto-locksmith-services" className={`elementor-item menu-link ${slug === 'auto-locksmith-services' ? 'elementor-item-active' : ''}`} tabIndex={-1}>Auto</Link>
                          </li>
                          <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-105 ${slug === 'commercial-locksmith-services' ? 'current-menu-item page_item current_page_item' : ''}`}>
                            <Link href="/commercial-locksmith-services" className={`elementor-item menu-link ${slug === 'commercial-locksmith-services' ? 'elementor-item-active' : ''}`} tabIndex={-1}>Commercial</Link>
                          </li>
                          <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-107 ${slug === 'domestic-locksmith-services' ? 'current-menu-item page_item current_page_item' : ''}`}>
                            <Link href="/domestic-locksmith-services" className={`elementor-item menu-link ${slug === 'domestic-locksmith-services' ? 'elementor-item-active' : ''}`} tabIndex={-1}>Domestic</Link>
                          </li>
                          <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-106 ${slug === 'contact-us' ? 'current-menu-item page_item current_page_item' : ''}`}>
                            <Link href="/contact-us" className={`elementor-item menu-link ${slug === 'contact-us' ? 'elementor-item-active' : ''}`} tabIndex={-1}>Contact Us</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Render Page-Specific Content */}
          {page.component}

          {/* Map Section */}
          <MapSection />

          {/* Global Footer */}
          <Footer slug={slug} />

        </div>
      </div>
    </>
  );
}
