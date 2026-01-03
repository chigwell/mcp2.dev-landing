import { AuthShowcase } from "@/components/ui/auth-showcase";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.35),transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-24 right-[-10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.3),transparent_70%)] blur-3xl" />
          <div className="absolute left-0 top-1/2 h-[240px] w-[240px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.25),transparent_70%)] blur-3xl" />
        </div>

        <header className="border-b border-border/60 bg-background/70 backdrop-blur">
          <div className="container flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
                m2
              </div>
              <div>
                <p className="text-base font-semibold leading-none">mcp2.dev</p>
                <p className="text-xs text-muted-foreground">Public tunnels for localhost</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a
                className="text-muted-foreground hover:text-foreground"
                href="https://github.com/chigwell/mcp2.dev"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        <main>
          <AuthShowcase />
          <section className="container pb-20">
            <div className="grid gap-6 rounded-2xl border border-border/60 bg-background/70 p-6 shadow-sm backdrop-blur">
              <h3 className="text-xl font-semibold">Built for MCP servers and local HTTP apps</h3>
              <div className="grid gap-3 text-sm text-muted-foreground">
                <p>
                  Expose any local MCP HTTP server, webhook listener, or dev app without touching
                  router settings.
                </p>
                <p>
                  Each tunnel forwards traffic to your machine while keeping your local port
                  private.
                </p>
                <p>Use the optional tunnel auth token when you want to lock down access.</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border/60">
          <div className="container flex flex-col items-center gap-2 py-6 text-xs text-muted-foreground">
            <span>mcp2.dev is a free community service for tunneling local development servers.</span>
            <span>Run the client, share a public URL, and use your MCP server from anywhere.</span>
            <span>Built by <a target="_blank" href="https://www.linkedin.com/in/eugene-evstafev-716669181/">Eugene Evstafev</a> with ❤️</span>
            <span>© 2026</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
