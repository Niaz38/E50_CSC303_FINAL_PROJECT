import Nav from './Nav'
import Header from './Header'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Meta = ({ title, keyword, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keyword} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>

        </Head>
    )

}
Meta.defaultProps = {
    title: 'Student Performence Monitor -3',
    keyword: 'Student Performence Monitor -3',
    description: 'Student Performence Monitor -3'
}
export default Meta