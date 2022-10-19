import Link from 'next/link'

export default function Header() {
    return <header className="site-container py-6">
        <nav className="space-x-4">
            <Link href="/">
                <a>ana sayfa</a>
            </Link>
            <Link href="/posts">
                <a>yazilar</a>
            </Link>
        </nav>
    </header>
}