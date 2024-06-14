FROM mcr.microsoft.com/devcontainers/typescript-node:20

USER root
RUN apt-get update -y \
    && DEBIAN_FRONTEND=noninteractive apt-get upgrade -y \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg \
        lsb-release \
        postgresql-client \
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /var/cache/apt/* /var/lib/apt/lists/
