FROM node:18-alpine AS alpine
FROM alpine AS base
ARG OSSUTIL_E
ARG OSSUTIL_I
ARG OSSUTIL_K

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
RUN apt -y update; apt -y install curl unzip
RUN curl https://gosspublic.alicdn.com/ossutil/install.sh | bash
COPY . /app
WORKDIR /app

FROM base AS frontend-builder
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm -F @zyy/frontend run build

RUN ossutil64 \
    -e $OSSUTIL_E \
    -i $OSSUTIL_I \
    -k $OSSUTIL_K \
    cp -ru apps/frontend/.next/static oss://zyy-frontend/_next/static

FROM alpine AS frontend-runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

COPY --from=frontend-builder /app/apps/frontend/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=frontend-builder /app/apps/frontend/.next/standalone ./

EXPOSE 3000

ENV PORT 3000

CMD ["node", "apps/frontend/server.js"]
