from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json
import socket


ROOT = Path(__file__).resolve().parent


class SiteHandler(SimpleHTTPRequestHandler):
    """Serve the animated site and a lightweight status endpoint."""

    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".json": "application/json",
        ".webmanifest": "application/manifest+json",
        ".svg": "image/svg+xml",
        ".js": "application/javascript",
        ".css": "text/css",
        ".html": "text/html",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        super().end_headers()

    def do_GET(self):
        if self.path == "/api/status":
            payload = json.dumps({"status": "online", "studio": "Night Shift"}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
            return

        super().do_GET()


def get_local_ip() -> str:
    """Detect LAN IP address so other devices (iPhone/Android) can connect."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = "127.0.0.1"
    finally:
        s.close()
    return ip


def run(port: int = 8080) -> None:
    import sys
    import os
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass
    elif "PORT" in os.environ:
        try:
            port = int(os.environ["PORT"])
        except ValueError:
            pass

    ThreadingHTTPServer.allow_reuse_address = True
    server = ThreadingHTTPServer(("0.0.0.0", port), SiteHandler)
    local_ip = get_local_ip()
    print("=" * 64)
    print("🌌 Night Shift is live across all platforms!")
    print(f"💻 Mac & Windows (Local):    http://localhost:{port}")
    if local_ip != "127.0.0.1":
        print(f"📱 Android & iPhone (Wi-Fi): http://{local_ip}:{port}")
    print("=" * 64)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down Night Shift")
    finally:
        server.server_close()


if __name__ == "__main__":
    run()