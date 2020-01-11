import Link from 'next/link';

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>First</a>
        </Link>
        <Link href="/second">
            <a style={linkStyle}>Second</a>
        </Link>
        <Link href="/third">
            <a style={linkStyle}>Third</a>
        </Link>
    </div>
)

export default Header