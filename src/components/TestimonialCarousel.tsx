"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const TESTIMONIALS = [
  {
    quote:
      "With Tramline, releases feel a lot more predictable. We're not juggling scripts or waiting on someone to run the right commands — everything just flows.",
    name: "Sean Kim",
    title: "Head of Engineering, Speak",
  },
  {
    quote:
      "Tramline brings maturity to the mobile DevOps process. Mobile engineers always put in extra time and effort on app releases; Tramline recognizes that effort and standardizes it.",
    name: "Brijesh Masrani",
    title: "Engineering Manager, Groww",
  },
  {
    quote:
      "Managing releases is so much overhead and Tramline takes it all away. It reduces context switching.",
    name: "Arnab Deka",
    title: "CTO, Metacast",
  },
  {
    quote:
      "If it wasn't for Tramline's git automations, we may not have the discipline to do all the chores that help us maintain a clean release process.",
    name: "Sasikanth",
    title: "Creator, Twine RSS Reader",
  },
];

export function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="py-20">
      <div className="max-w-[700px] mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase mb-6 text-foreground">
          Customer Reviews
        </p>

        <Carousel opts={{ loop: true }} setApi={setApi}>
          <CarouselContent>
            {TESTIMONIALS.map((testimonial, i) => (
              <CarouselItem key={i}>
                <Card className="bg-cream border-none shadow-none ring-0">
                  <CardContent className="pt-6 pb-8 px-8">
                    <blockquote className="text-xl md:text-2xl font-light text-foreground leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-foreground" : "bg-border"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
