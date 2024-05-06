import Head from "next/head";


const SEO = ({ title, description, image, metas = [] }) => {
    const formattedTitle = `${title} | Elektron`;

    return (
      <Head>
        <title>{formattedTitle}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={formattedTitle} />
        <meta name="og:description" content={description} />
        {image && <meta name="og:image" content={image} />}
        <meta name="og:type" content="website" />
        {metas.map(({ name, content }) => (
          <meta name={name} key={name} content={content} />
        ))}
      </Head>
    );
}

export default SEO;