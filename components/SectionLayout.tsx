import React from 'react'

export function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-6 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {children}
      </div>
    </main>
  );
}
