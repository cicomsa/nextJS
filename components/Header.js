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
        <Link href="/fourth">
            <a style={linkStyle}>Fourth</a>
        </Link>
        <Link href="/fifth">
            <a style={linkStyle}>Fifth</a>
        </Link>
        <Link href="/sixth">
            <a style={linkStyle}>Sixth</a>
        </Link>
        <Link href="/seventh">
            <a style={linkStyle}>Seventh</a>
        </Link>
    </div>
)

export default Header