export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-sm text-zinc-500 text-center">
        © {new Date().getFullYear()} MiniStore. All rights reserved.
      </div>
    </footer>
  );
}
