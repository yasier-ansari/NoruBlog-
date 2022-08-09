import Header from '../components/Header'
import Footer from '../components/footer'
import Head from 'next/head'

type Props = {
    children: React.ReactNode
}
const Structure = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>Blog website</title>
            </Head>
            <Header />
            <main className='mx-8' >{children}</main>
            <Footer />
        </>
    )
}

export default Structure