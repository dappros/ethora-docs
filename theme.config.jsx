export default {
  docsRepositoryBase: 'https://github.com/dappros/ethora-docs',
  project: {
    link: 'https://github.com/dappros/ethora'
  },
  logo: <img src="https://www.ethora.com/images/ethora-logo-new.png" alt="Ethora Logo" width="130px" />,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <meta name="title" content="Ethora Documentation" />
      <meta name="description" content="Ethora is low-code and highly customisable which means you can launch your own branded app into appstore in no time. Follow the documentation for more insights." />
      <link rel="icon" href="https://www.ethora.com/images/favicon_io/favicon.ico" />
     
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://docs.ethora.com/" />
      <meta property="og:title" content="Ethora Documentation" />
      <meta property="og:description" content="Ethora is low-code and highly customisable which means you can launch your own branded app into appstore in no time. Follow the documentation for more insights." />
      <meta property="og:image" content="/og-ethora.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://docs.ethora.com/" />
      <meta property="twitter:title" content="Ethora Documentation" />
      <meta property="twitter:description" content="Ethora is low-code and highly customisable which means you can launch your own branded app into appstore in no time. Follow the documentation for more insights." />
      <meta property="twitter:image" content="/og-ethora.png" />
    </>
  ),

  useNextSeoProps() {
    return {
      titleTemplate: 'Ethora Docs - %s'
    }
  },

  feedback:{
    content: "Questions? Visit our forum",
    useLink: ()=>"https://forum.ethora.com/"
  },
  editLink:{
    component: null
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://www.ethora.com" target="_blank">
          Ethora
        </a>
        .
      </span>
    )
  }
};

