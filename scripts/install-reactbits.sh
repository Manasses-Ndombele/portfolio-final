#!/usr/bin/env bash
# Instala os componentes React Bits (registry shadcn)
npx shadcn@latest init -d
for c in EchoText AeroShards BorderGlow LogoLoop CursorGrid GlareHover SpecularButton AnimatedContent; do
  npx shadcn@latest add @react-bits/$c-JS-CSS -y
done
