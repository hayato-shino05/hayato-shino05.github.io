import React from "react";
import { Star } from "lucide-react";
import { GithubRepository } from "@/types";

export const GithubRepo = React.memo(({ repo }: { repo: GithubRepository }) => (
  <a
    href={repo.html_url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full h-full min-h-[90px] flex flex-col rounded-lg p-2 border text-sm hover:bg-muted/50 duration-100 transition-all ease-in-out"
  >
    <h1>{repo.name}</h1>
    <p className="flex-1 text-xs text-muted-foreground">{repo.description}</p>
    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
      <p>{repo.language}</p>
      {repo.stargazers_count > 0 && (
        <p className="flex items-center gap-px text-foreground">
          <Star size={12} />
          {repo.stargazers_count}
        </p>
      )}
      {repo.forks > 0 && <p>{repo.forks} forks</p>}
    </div>
  </a>
));

GithubRepo.displayName = "GithubRepo"; 