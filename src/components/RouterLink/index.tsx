import { Link } from 'react-router';

type RouterLinkrProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<'a'>;

export function RouterLink({ children, href, ...props }: RouterLinkrProps) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
