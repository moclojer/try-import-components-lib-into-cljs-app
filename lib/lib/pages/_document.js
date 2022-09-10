import { Head, Html, Main, NextScript } from 'next/document';
export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps;
  return /*#__PURE__*/React.createElement(Html, {
    className: "h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']",
    lang: "en"
  }, /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
  })), /*#__PURE__*/React.createElement("body", {
    className: "flex h-full flex-col"
  }, /*#__PURE__*/React.createElement(Main, null), /*#__PURE__*/React.createElement(NextScript, null)));
}