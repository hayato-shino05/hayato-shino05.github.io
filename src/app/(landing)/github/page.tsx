"use client";

import React, { useMemo, useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { GithubRepo } from "@/components/github-repo";

const schema = z.object({
  query: z.string().min(1, "Search is required"),
  sort: z.enum(["Last updated", "Stars"]).default("Stars"),
});

export default function GithubPage() {
  const [githubProjects, setGithubProjects] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      query: "",
      sort: "Stars",
    },
  });

  const { query, sort } = form.watch();

  const fetchGithubRepos = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/github/repos', {
        next: {
          revalidate: 0 // Remove cache
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const repos = await response.json();
      setGithubProjects(repos);
    } catch (error) {
      console.error("Failed to fetch GitHub repos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGithubRepos();
  }, [fetchGithubRepos]);

  const sortedGithubProjects = useMemo(() => {
    return [...githubProjects].sort((a, b) => {
      if (sort === "Stars") {
        return b.stargazers_count - a.stargazers_count;
      }
      return (
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
    });
  }, [githubProjects, sort]);

  const filteredProjects = useMemo(() => {
    const lowercaseQuery = query.toLowerCase();
    return sortedGithubProjects.filter((project) => {
      const name = project.name || "";
      const description = project.description || "";
      return (
        name.toLowerCase().includes(lowercaseQuery) ||
        description.toLowerCase().includes(lowercaseQuery)
      );
    });
  }, [query, sortedGithubProjects]);

  const renderProjects = useCallback(() => {
    if (loading) {
      return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          {Array(12)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="w-full h-full min-h-[90px] rounded-md border bg-muted/50 animate-pulse"
              ></div>
            ))}
        </div>
      );
    }

    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredProjects.map((repo, index) => (
          <GithubRepo key={index} repo={repo} />
        ))}
      </div>
    );
  }, [filteredProjects, loading]);

  return (
    <section className="w-full space-y-6 mt-5">
      <Form {...form}>
        <form className="w-full flex items-center nav-container sticky top-14 z-20">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="rounded-lg rounded-r-none current focus-visible:ring-0 bg-background backdrop-blur-md"
                    placeholder="Search repositories"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center">
            <FormField
              control={form.control}
              name="sort"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={cn(
                          "p-2 min-w-16 lg:min-w-24 text-center text-sm hover:bg-secondary cursor-pointer border-0 border-t-[0.5px] bg-background transition-all duration-100 ease-out",
                          "nav-item hover:bg-background rounded-none gap-1",
                          "rounded-r-lg"
                        )}
                      >
                        {field.value}
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent
                      ref={(ref) =>
                        // temporary workaround from https://github.com/shadcn-ui/ui/issues/1220
                        ref?.addEventListener(
                          "touchend",
                          (e) => e.preventDefault()
                        )
                      }
                    >
                      <SelectItem value="Last updated">Last updated</SelectItem>
                      <SelectItem value="Stars">Stars</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
      {renderProjects()}
    </section>
  );
} 