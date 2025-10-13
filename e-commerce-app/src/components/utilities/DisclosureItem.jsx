import { useState } from "react";

function DisclosureItem({ title, children, isLast }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-t bg-cream ${isLast ? 'border-b' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 bg-cream hover:bg-gray-50 transition
        focus:outline-none focus:ring-0 rounded-none"
      >
        <span className="text-xs text-gray-900 font-medium font-sans">{title}</span>
        <span className="text-xl text-gray-600">
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <div className="px-4 py-2 bg-white text-xs text-gray-700 text-left font-sans">
          {children}
        </div>
      )}
    </div>
  );
}


export default DisclosureItem;