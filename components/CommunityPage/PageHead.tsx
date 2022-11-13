import Head from "next/head";

interface PropsInterface {
  communityName : string;
  shortName : string;
}

export const PageHead = (props:PropsInterface) => {
  return (
    <Head>
      <title>{`${props.communityName} Community`}</title>
      <meta
        name="description"
        content="Night Login Web Development Community"
      />
      <link rel="icon" href={`/NL Assets/${props.shortName}.png`} />
    </Head>
  );
};
