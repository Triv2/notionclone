'use client'


interface HeadingProps {}

export const Heading = () => {
  return (
    <div className=" max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl">
        Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Notion Clone</span>!
      </h1>

    </div>
  );
}
