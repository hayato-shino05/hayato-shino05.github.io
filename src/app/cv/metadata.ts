import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const ogUrl = new URL(`${siteConfig.siteUrl}/og`);
  ogUrl.searchParams.set("heading", "Curriculum Vitae");
  ogUrl.searchParams.set("type", "CV");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `CV | ${siteConfig.creator.name}`,
    description: "Programming Student with experience in JavaScript, Python, React, Node.js, and web development",
    keywords: [
      "Programming Student", 
      "Web Development", 
      "JavaScript", 
      "Python", 
      "React", 
      "Node.js", 
      "Next.js", 
      "C++", 
      "C#", 
      "VB.NET", 
      "PHP", 
      "Flask", 
      "Bootstrap", 
      "MySQL", 
      "Firebase", 
      "Student"
    ],
    authors: [{ name: siteConfig.creator.name }],
    openGraph: {
      title: `CV | ${siteConfig.creator.name}`,
      description: "Programming Student with experience in JavaScript, Python, React, Node.js, and web development",
      type: "article",
      url: `${siteConfig.siteUrl}/cv`,
      images: [{ url: ogUrl.toString(), width: 1200, height: 630, alt: "CV" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `CV | ${siteConfig.creator.name}`,
      description: "Programming Student with experience in JavaScript, Python, React, Node.js, and web development",
      images: [ogUrl.toString()],
    },
  };
} 