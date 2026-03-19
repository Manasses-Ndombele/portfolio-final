import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Footer() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <footer ref={ref} className="reveal bg-[#162536] py-8">
      <div className="container mx-auto px-6">
        <p className="font-poppins text-center text-[#F9FAFB] text-sm">
          Copyright © 2026 - Manassés Ndombele. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
