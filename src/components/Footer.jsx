// Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} StoreIdir. All rights reserved.</p>
      </div>
    </footer>
  );
}
