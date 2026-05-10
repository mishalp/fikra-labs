import Image from "next/image";

const brands = [
  { name: "Shopify", src: "https://cdn.simpleicons.org/shopify/a1a1aa" },
  { name: "Notion", src: "https://cdn.simpleicons.org/notion/a1a1aa" },
  { name: "Stripe", src: "https://cdn.simpleicons.org/stripe/a1a1aa" },
  { name: "Framer", src: "https://cdn.simpleicons.org/framer/a1a1aa" },
  { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/a1a1aa" },
  { name: "Supabase", src: "https://cdn.simpleicons.org/supabase/a1a1aa" },
] as const;

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex shrink-0 items-center justify-center px-3 sm:px-5 md:px-6">
      <Image
        src={src}
        alt=""
        width={112}
        height={32}
        unoptimized
        className="h-[22px] w-auto opacity-60 grayscale transition-opacity duration-300 hover:opacity-90 sm:h-6 md:h-7"
      />
      <span className="sr-only">{name}</span>
    </div>
  );
}

export function BrandLogosRow() {
  return (
    <>
      {brands.map((b) => (
        <LogoItem key={b.name} name={b.name} src={b.src} />
      ))}
    </>
  );
}
