import Head from 'next/head';

const Header = ({ title , description,children })=>{
  return <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {children}
  </Head>
}
export default Header;
