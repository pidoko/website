import Link from "next/link";

/**
 * Navbar Component
 *
 * Renders a navigation bar with links to key pages.
 * Utilizes Windi CSS for styling, including support for dark mode,
 * and includes hover transitions for improved user interaction.
 */
export default function Navbar() {
  return (
    <nav
      className="p-4 shadow-md bg-white dark:bg-gray-800"
      aria-label="Main Navigation"
    >
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className="hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-blue-500 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-blue-500 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
