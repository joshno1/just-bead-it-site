import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t mt-12 py-6">
      <div className="max-w-6xl mx-auto text-center text-gray-500">© {new Date().getFullYear()} Just Bead It — Handmade with love.</div>
    </footer>
  );
}
