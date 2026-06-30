import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/cn";
import { testimonials, TestimonialCard } from "./RomiTestimonials";

/*
 * Testimonials carousel — 3 cards visible (1 on mobile, 2 on small), 9 total,
 * one card per step. Built on Embla (already in package.json): transform-based,
 * so it glides with no native scroll-snap jank, and adds real drag/swipe + a
 * seamless loop. Arrows match the legacy chevron pattern, restyled for the light
 * cream band.
 */
export function RomiTestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: false,
    duration: 22,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return undefined;
    setSnapCount(emblaApi.scrollSnapList().length);
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* negative margin pairs with slide padding to give an even gutter */}
        <div className="-ml-3 flex touch-pan-y">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="min-w-0 shrink-0 grow-0 basis-full pl-3 sm:basis-1/2 md:basis-1/3"
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* controls: arrows flanking the progress dots */}
      <div className="mt-9 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous testimonials"
          className="grid h-10 w-10 place-items-center rounded-[8px] bg-white outline outline-1 -outline-offset-1 outline-[#F9E8D2] shadow-[0px_1px_2px_rgba(0,0,0,0.05),inset_0px_0px_0px_1px_#EDE6DC] transition hover:bg-[var(--romi-color-surface-muted)]"
        >
          <ChevronLeft className="h-5 w-5 text-[#A3A3A3]" />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === selectedIndex
                  ? "w-7 bg-[var(--romi-color-primary)]"
                  : "w-2.5 bg-[var(--romi-charcoal-40)] hover:bg-[var(--romi-charcoal-60)]"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next testimonials"
          className="grid h-10 w-10 place-items-center rounded-[8px] bg-white outline outline-1 -outline-offset-1 outline-[#F9E8D2] shadow-[0px_1px_2px_rgba(0,0,0,0.05),inset_0px_0px_0px_1px_#EDE6DC] transition hover:bg-[var(--romi-color-surface-muted)]"
        >
          <ChevronRight className="h-5 w-5 text-[#A3A3A3]" />
        </button>
      </div>
    </div>
  );
}
