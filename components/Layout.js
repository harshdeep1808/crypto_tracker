import Head from 'next/head';
import Link from 'next/link';


const Layout = ({ children, title = 'Crypto Tracker' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
       
      </Head>
      <header className='header'>
        <Link href='/' passHref>
          <a>
          <h1 style={{color:"	#FF8C00", marginTop:"40px",marginBottom:"30px",fontStyle:"italic",fontSize:"40px"}}>Crypto Tracker <i className="fa-solid fa-coins" style={{color:"	#FF8C00",fontStyle:"italic"}}></i></h1>
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;