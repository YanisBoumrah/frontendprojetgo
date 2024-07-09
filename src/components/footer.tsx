
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-8 md:py-12 w:auto w-full items-center justify-center flex flex-col">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MoveIcon className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold">Go Platform</span>
          </Link>
          <nav className="grid gap-2">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-bold">Connect with us</h3>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <GitlabIcon className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <DiscIcon className="w-5 h-5" />
              <span className="sr-only">Discord</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-bold">Resources</h3>
          <nav className="grid gap-2">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Community
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-bold">Legal</h3>
          <nav className="grid gap-2">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Go Platform. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}

function DiscIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function GitlabIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function MoveIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="5 9 2 12 5 15" />
      <polyline points="9 5 12 2 15 5" />
      <polyline points="15 19 12 22 9 19" />
      <polyline points="19 9 22 12 19 15" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
