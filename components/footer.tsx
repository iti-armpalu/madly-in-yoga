// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-transparent">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-zinc-800 text-center">
          © {new Date().getFullYear()} Madly in Yoga. All rights reserved.
        </div>
      </footer>
    );
  }
  