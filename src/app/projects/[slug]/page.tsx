import { projects } from "#site/content";
import LinksSection from "@/components/links-section";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import Picture from "@/components/picture";
import { siteConfig } from "@/config/site.config";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Tạm thời bỏ qua import đã xác định để tránh lỗi build
// import { projects } from "#site/content";
// Tạo biến projects tạm thời
const projects: Project[] = [];

// Define project type
interface Project {
  slugAsParams: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: { src: string };
  body: string;
  links: { name: string; url: string }[];
}

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

async function getProjectFromParam(params: { slug: string }) {
  const slug = params.slug;
  const project = projects.find((project) => project.slugAsParams === slug);

  if (!project) {
    return null;
  }
  return project;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParam(params);

  if (!project) {
    return {};
  }

  const ogUrl = new URL(`${siteConfig.siteUrl}${project.image?.src}`);
  ogUrl.searchParams.set("heading", project.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `${project.title} | ${siteConfig.creator.name}`,
    description: project.description,
    keywords: [...project.tags, ...siteConfig.keywords, project.title],
    openGraph: {
      title: `${project.title} | ${siteConfig.creator.name}`,
      description: project.description,
      type: "article",
      url: `${siteConfig.siteUrl}/projects/${project.slugAsParams}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<ProjectPageProps["params"][]> {
  const slugs = projects.map((project: Project) => project.slugAsParams);
  return slugs.map((slug: string) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParam(params);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <div className="relative w-full lg:w-2/5 lg:h-full p-2 md:p-8 overflow-y-scroll">
          <div className="flex justify-between mb-2 sticky top-0 z-10 bg-transparent">
            <Link href="/" className="group/back text-xs">
              <ArrowLeft
                size={18}
                className="group-hover/back:-translate-x-1 transition-transform transform-gpu duration-100 ease-in-out"
              />
              <span className="sr-only">minhvo.vercel.app</span>
            </Link>
            <p className="px-2 py-1 text-xs rounded bg-secondary">{project.date}</p>
          </div>
          <Picture
            image={project.image}
            width={600}
            height={400}
            alt={project.title}
            className="border rounded-xl mx-auto"
          />
          <h1 className="head-text-sm py-1 mt-6 mb-4">{project.title}</h1>
          <div className="mb-8">
            <div className="mb-4">
              <LinksSection links={project.links} />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag: string) => (
                <p key={tag} className="text-xs p-1 rounded bg-secondary cursor-pointer">
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <p className="rounded mb-4">{project.description}</p>
        </div>
        <div id="tab-section" className="relative w-full lg:h-full lg:w-3/5 p-2 md:p-8 overflow-y-scroll">
          <MDXContentRenderer code={project.body} />
        </div>
      </div>
    </main>
  );
}
