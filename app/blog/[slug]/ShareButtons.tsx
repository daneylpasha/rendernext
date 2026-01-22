"use client";

import { Linkedin, Twitter, LinkIcon } from "lucide-react";

interface ShareButtonsProps {
  slug: string;
  title: string;
}

export default function ShareButtons({ slug, title }: ShareButtonsProps) {
  const shareUrl = `https://rendernext.io/blog/${slug}`;
  const shareText = title;

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500">Share:</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-mustard hover:text-black transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-mustard hover:text-black transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <button
        onClick={() => {
          navigator.clipboard.writeText(shareUrl);
        }}
        className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-mustard hover:text-black transition-colors"
        aria-label="Copy link"
      >
        <LinkIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
