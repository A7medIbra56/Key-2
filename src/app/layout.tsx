import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home | KEY Experts",
  description: "Commercial, Residential & Automotive Locksmith Services SERVICING THROUGHOUT THE UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="stylesheet" id="astra-theme-css-css" href="/wp-content/themes/astra/assets/css/minified/main.min822f.css?ver=3.6.2" media="all" />
        <link rel="stylesheet" id="elementor-icons-css" href="/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min21f9.css?ver=5.11.0" media="all" />
        <link rel="stylesheet" id="elementor-animations-css" href="/wp-content/plugins/elementor/assets/lib/animations/animations.min2072.css?ver=3.2.5" media="all" />
        <link rel="stylesheet" id="elementor-frontend-css" href="/wp-content/plugins/elementor/assets/css/frontend.min2072.css?ver=3.2.5" media="all" />
        <link rel="stylesheet" id="elementor-post-6-css" href="/wp-content/uploads/elementor/css/post-6d442.css?ver=1712917719" media="all" />
        <link rel="stylesheet" id="elementor-pro-css" href="/wp-content/plugins/elementor-pro/assets/css/frontend.min3d36.css?ver=3.3.1" media="all" />
        <link rel="stylesheet" id="elementor-global-css" href="/wp-content/uploads/elementor/css/globald442.css?ver=1712917719" media="all" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-43466f.css" media="all" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-862977.css" media="all" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-823817.css" media="all" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-84ed22.css" media="all" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-500684.css" media="all" />
        <link rel="stylesheet" id="google-fonts-1-css" href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CPoppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=auto&amp;ver=6.9.3" media="all" />
        <link rel="stylesheet" id="elementor-icons-shared-0-css" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min9e0b.css?ver=5.15.1" media="all" />
        <link rel="stylesheet" id="elementor-icons-fa-solid-css" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min9e0b.css?ver=5.15.1" media="all" />
        <link rel="stylesheet" id="elementor-icons-fa-regular-css" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/regular.min9e0b.css?ver=5.15.1" media="all" />
        <Script id="astra-theme-js-js-extra" strategy="beforeInteractive">
          {`var astra = {"break_point":"921","isRtl":""};`}
        </Script>
      </head>
      <body className="wp-singular page-template page-template-elementor_canvas page wp-theme-astra ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-desktop ast-separate-container ast-right-sidebar astra-3.6.2 ast-normal-title-enabled elementor-default elementor-template-canvas elementor-kit-6 elementor-page">
        {children}
        <Script src="/wp-content/themes/astra/assets/js/minified/frontend.min822f.js?ver=3.6.2" strategy="lazyOnload" />
        <Script src="/wp-includes/js/jquery/jquery.minf43b.js?ver=3.7.1" strategy="beforeInteractive" />
        <Script src="/wp-content/plugins/elementor-pro/assets/lib/smartmenus/jquery.smartmenus.minf269.js?ver=1.0.1" strategy="lazyOnload" />
      </body>
    </html>
  );
}
