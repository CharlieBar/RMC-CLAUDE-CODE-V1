"use client";

import { Facebook, Linkedin, Mail, Share2, Twitter } from "lucide-react";
import { generateShareUrls } from "@/lib/blog-utils";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
}

export function SocialShare({ url, title, className = "" }: SocialShareProps) {
  const shareUrls = generateShareUrls(url, title);

  const shareButtons = [
    {
      name: "Twitter",
      icon: Twitter,
      url: shareUrls.twitter,
      color: "hover:bg-[#1DA1F2] hover:text-white",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: shareUrls.facebook,
      color: "hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: shareUrls.linkedin,
      color: "hover:bg-[#0A66C2] hover:text-white",
    },
    {
      name: "Email",
      icon: Mail,
      url: shareUrls.email,
      color: "hover:bg-slate-600 hover:text-white",
    },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm font-medium text-slate-600 flex items-center gap-2">
        <Share2 className="h-4 w-4" />
        Share:
      </span>
      <div className="flex gap-2">
        {shareButtons.map((button) => (
          <a
            key={button.name}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg border border-slate-200 text-slate-600 transition-all duration-200 ${button.color} hover:border-transparent hover:shadow-md`}
            aria-label={`Share on ${button.name}`}
          >
            <button.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
