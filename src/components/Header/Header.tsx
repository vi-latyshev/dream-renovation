import { Link } from 'components/controls';

export const Header = () => (
    <header>
        <nav>
            <Link href="/">
                Home
            </Link>{' '}
            <Link href="https://google.ru">
                External
            </Link>
        </nav>
    </header>
);
