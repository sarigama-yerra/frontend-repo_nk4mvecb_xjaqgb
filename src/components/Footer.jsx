export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 text-white/60 text-sm text-center">
      © {new Date().getFullYear()} Flux Exchange. All rights reserved.
    </footer>
  );
}
