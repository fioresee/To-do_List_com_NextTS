export const metadado = {
  title: 'To-do Next TS',
  description: 'Intro Next.js + TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className="min-h-dvh bg-zinc-50 text-zinc-900">
        <div className="mx-auto max-w-xl p-6">{children}</div>
      </body>
    </html>
  )
}