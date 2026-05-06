"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-medium text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-primary ${centered ? "mx-auto" : ""}`}
      />
    </AnimatedSection>
  );
}
