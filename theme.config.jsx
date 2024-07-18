export default {
  docsRepositoryBase: 'https://github.com/dappros/ethora-docs',
  project: {
    link: 'https://github.com/dappros/ethora'
  },
  logo: <img src="https://www.ethora.com/images/ethora-logo-new.png" alt="Ethora Logo" width="130px" />,
  head: (
    <>
      <title>Ethora Docs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <meta name="description" content="Ethora Documentation" />
      <meta name="og:title" content="Ethora Docs" />
      <link rel="icon" href="https://www.ethora.com/images/favicon_io/favicon.ico" />
    </>
  ),

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

