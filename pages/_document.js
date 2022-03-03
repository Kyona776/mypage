import Document, { Html, Head, Main, NextScript } from 'next/document'

import { Box } from '@chakra-ui/react'

const siteTitle = "Enomoto Kyona's Portfolio website";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>{siteTitle}</title>
			    <meta name="description"
			    	content="Enomoto Kyona's Portfolio website. Hello hooman!"
			    />
			    <link rel="icon" href="/favicon.ico" />
          {/* font setting 
            next js will automatically declare css font setting.
          */}
			    <link href="https://fonts.googleapis.com/css2?family=Inter"
			    	rel="stylesheet"
			    />
			    {/* for sns things */}
			    <meta name="og:title" content={siteTitle} />
          		{/* viewport setting */}
          <meta name="viewport" content="width=device-width initial-scale=1.0"></meta>
          {/*<script src="https://unpkg.com/@mojs/core"></script>*/}
        </Head>
        <Box as="body" bg='#000d1c' maxWidth='100vw' p={3}>
          <Main />
          <NextScript />
        </Box>
      </Html>
    )
  }
}

export default MyDocument