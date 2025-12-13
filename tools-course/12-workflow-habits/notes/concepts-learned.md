# Concepts & Mental Models

## Concept: Reverse Proxy (Caddy/Nginx)
- **Definition:** A server that sits *in front* of my application. Clients talk to the Proxy, and the Proxy talks to my App.
- **Why use it?:** It handles security (HTTPS) and routing so my app code doesn't have to.
- **Analogy:** A receptionist at an office. Visitors talk to the receptionist, who directs them to the right person. The visitors don't walk directly to my desk.
- **Related Commands:** `caddy reverse-proxy`, `systemctl status caddy`

## Concept: SSH Identity File
- **Definition:** The private half of the key pair (`id_ed25519`). It acts like a physical key to unlock the server.
- **Crucial Rule:** Never share this file. The `.pub` file is the lock (public), the file without extension is the key (private).