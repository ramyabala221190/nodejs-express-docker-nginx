FROM nginx:alpine

ARG targetEnv

COPY nginx/nginx-${targetEnv}.config /etc/nginx/templates/default.conf.template
