export default function GithubLoading() {
  return (
    <section className="w-full mt-10 space-y-6">
      <div className="w-full h-10 rounded-lg border bg-muted/40 animate-pulse flex items-center justify-between">
        <div className="flex-1"></div>
        <div className="min-w-16 lg:min-w-24 h-full border-l"></div>
        <div className="min-w-16 lg:min-w-24 h-full border-l"></div>
      </div>
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
    </section>
  );
} 