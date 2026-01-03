"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Copy, Check, ArrowUpRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CodeCardProps {
  code: string;
  filename: string;
}

function CodeCard({ code, filename }: CodeCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Copy failed");
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border shadow-lg bg-zinc-950 text-zinc-100">
      <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 text-sm border-b border-zinc-800">
        <span className="font-mono text-zinc-300">{filename}</span>
        <Button
          onClick={handleCopy}
          size="sm"
          variant="secondary"
          className="gap-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>

      <ScrollArea className="h-[320px]">
        <pre className="m-0 p-4 text-sm leading-relaxed font-mono">
          <code>{code}</code>
        </pre>
      </ScrollArea>
    </div>
  );
}

const tunnelSnippet = `# Install the mcp2dev client
cargo install --git https://github.com/chigwell/mcp2.dev mcp2dev

# Expose local port 3000 via the public mcp2.dev server
CTRL_HOST=wormhole.tunnel.mcp2.dev CTRL_PORT=443 mcp2dev -p 3000

# Require an auth header for this tunnel
CTRL_HOST=wormhole.tunnel.mcp2.dev CTRL_PORT=443 mcp2dev -p 3000 --tunnel-auth "my-secret-token"

# Requests must include the header
curl -H 'X-Mcp2dev-Token: my-secret-token' "https://tunnel.mcp2.dev/8dc6369c-e4ec-4efe-a1d2-4ba4e4b25576/mcp"

# Output will be something like:
# +-------------------------+----------------------------------------------------------------------+
# | Public tunnel URL       |     https://tunnel.mcp2.dev/8dc6369c-e4ec-4efe-a1d2-4ba4e4b25576     |
# +-------------------------+----------------------------------------------------------------------+
# | Local inspect dashboard |     http://localhost:51230                                           |
# +-------------------------+----------------------------------------------------------------------+
# | Forwarding traffic to   |     http://localhost:3000                                            |
# +-------------------------+----------------------------------------------------------------------+`;

export function AuthShowcase() {
  return (
    <section className="relative py-20">
      <div className="container grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-2 text-primary">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Free Public Tunnels
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Share local MCP servers on the public internet in minutes
          </h2>
          <p className="text-muted-foreground text-lg">
            mcp2.dev is a free service that exposes your local HTTP endpoints to a public URL.
            Run the client, get a tunnel URL, and use your MCP servers from anywhere.
          </p>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span className="rounded-full border border-border/60 bg-muted/40 px-3 py-1">
              No signup
            </span>
            <span className="rounded-full border border-border/60 bg-muted/40 px-3 py-1">
              Optional auth token
            </span>
            <span className="rounded-full border border-border/60 bg-muted/40 px-3 py-1">
              Works with localhost:3000
            </span>
          </div>
          <Button asChild size="lg" className="group w-fit shadow-md hover:shadow-xl">
            <a href="https://github.com/chigwell/mcp2.dev" target="_blank" rel="noreferrer">
              Start a tunnel
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <CodeCard code={tunnelSnippet} filename="mcp2dev-tunnel.sh" />
          <p className="text-xs text-muted-foreground">
            Your local port stays on your machine. The tunnel forwards traffic through mcp2.dev.
          </p>
        </div>
      </div>
    </section>
  );
}
