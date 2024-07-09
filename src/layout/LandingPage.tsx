import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center ">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Elevate Your Go Game
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-900">
            Discover the ultimate Go game platform, where strategy, skill, and
            community converge. Elevate your gameplay and connect with
            passionate players worldwide.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Join Now
          </Link>
        </div>
        <Image
          src="/imgs/landingpageimg.webp"
          width="600"
          height="400"
          alt="Go Game"
          className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
    </section>
  );
}
