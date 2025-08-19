import type { ReactNode } from "react";

interface CaseStudyTemplateProps {
  title: string;
  subtitle?: string;
  role?: string,
  children: ReactNode;
}

const CaseStudyTemplate = ({ title, subtitle, role, children }: CaseStudyTemplateProps) => (
  <section className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
    {subtitle && <h2 className="text-xl text-gray-400 mb-8">{subtitle}</h2>}
    {role && <p className="text-lg text-gray-300 mb-6">Role: <strong className="text-gray-400">{role}</strong></p>}
    <article className="prose prose-invert">{children}</article>
  </section>
);

export default CaseStudyTemplate;