"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const InfoSection = () => {
  return (
    <div className="bg-black pt-10">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1590497008432-598f04441de8?q=80&w=2591&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Sofort"
        heading="Beste Lieferanten"
      >
        <Content1 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1579992822406-2092a7bd5a36?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Preise"
        heading="Beste Konditionen"
      >
        <Content2 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1592963219751-3800a144a41e?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Filter"
        heading="Lieferanten filtern"
      >
        <Content3 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Anfrage"
        heading="Mehrfachanfrage nutzen"
      >
        <Content4 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1600633429280-a79e72ca72ba?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Favoriten"
        heading="Lieferanten verwalten"
      >
        <Content5 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1611580446429-e3182ad73c90?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Partner"
        heading="Überprüfte Lieferanten"
      >
        <Content6 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Content1 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Sofort den besten Lieferanten für Heizungszubehoer finden und bis 30%
      sparen
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-400 md:text-2xl">
        Mit Lieferanten.de steht seit 2011 eine erstklassige
        Business-Suchmaschine zur Verfügung. Bei uns suchen und finden jeden
        Monat viele tausend Unternehmen die besten Hersteller und Großhändler.
        So gelangen Sie nicht nur in Sekunden zu jedem gewünschten Produkt und
        Lieferanten. Sie sparen beim Einkauf auch bis zu 30%.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-[#0093D3] md:w-fit">
        Jetzt registrieren <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const Content2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Die besten Preise und Konditionen
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-400 md:text-2xl">
        Großhandelspreise und Mengenrabatte für deutlich verbesserte
        Gewinnchancen{" "}
      </p>
      <p className="mb-8 text-xl text-neutral-400 md:text-2xl">
        Gewinn und Erfolg hängen vor allem vom Einkauf ab. Durch Lieferanten.de
        erhalten Sie als gewerblicher Einkäufer besonders günstige
        Einkaufspreise, zusätzliche Mengenrabatte und insgesamt herausragende
        Konditionen. Sie behalten hier mühelos viele verschiedene Lieferanten im
        Blick und gelangen im Handumdrehen zum besten Preis.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-[#0093D3] md:w-fit">
        Jetzt registrieren <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const Content3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Lieferanten filtern und kontaktieren
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-400 md:text-2xl">
        Um die besten Lieferanten schneller zu finden, können Sie jederzeit nach
        Unternehmensart, Standort oder Anzahl der Mitarbeiter filtern. Im
        Anschluss zeigen wir Ihnen dann detaillierte Informationen zu jedem
        Lieferanten. So wissen Sie schon vor der direkten Kontaktaufnahme ganz
        genau, mit wem Sie es zu tun haben.{" "}
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-[#0093D3] md:w-fit">
        Jetzt registrieren <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const Content4 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Mit nur einer Anfrage zum besten Angebot{" "}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-400 md:text-2xl">
        Heizungszubehoer bestellen und dabei bis zu 30% im Einkauf sparen!{" "}
      </p>
      <p className="mb-8 text-xl text-neutral-400 md:text-2xl">
        Sollten Sie in den 5,4 Mio. Produkten unserer Lieferanten nicht sofort
        fündig werden, können Sie über uns ganz einfach Ihre Anfrage mit nur
        einem Mausklick an viele Großhändler und Hersteller versenden. Mit
        unserer Mehrfachanfrage sorgen wir dafür, dass Ihr Anliegen immer beim
        richtigen Ansprechpartner landet, so dass Sie innerhalb kürzester Zeit
        die ersten Angebote zum gesuchten Produkt erhalten.
      </p>
      <p className="mb-4 text-xl text-neutral-400 md:text-2xl">
        Unsere Mehrfachanfrage hilft Ihnen nicht nur Zeit zu sparen. Sie bietet
        auch den{" "}
        <span className="font-bold">
          schnellsten und einfachsten Weg zum besten Angebot.{" "}
        </span>
      </p>

      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-[#0093D3] md:w-fit">
        Jetzt registrieren <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const Content5 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Bevorzugte Lieferanten bequem verwalten
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-400 md:text-2xl">
        Für Einkäufer ist das persönliche Netzwerk das eigentliche Kapital. Bei
        Lieferanten.de können Sie deshalb eigene Favoriten auswählen und
        speichern und die Aktivitäten Ihrer bevorzugten Hersteller und
        Großhändler jederzeit verfolgen. Außerdem bieten wir Ihnen die
        Möglichkeit, Ihre eigenen Anfragen komfortabel zu verwalten.{" "}
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-[#0093D3] md:w-fit">
        Jetzt registrieren <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const Content6 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Beste Partner für Ihren Einkauf{" "}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-400 md:text-2xl">
        Professionelle Lieferanten für Heizungszubehoer von uns sorgfältig
        überprüft{" "}
      </p>
      <p className="mb-8 text-xl text-neutral-400 md:text-2xl">
        Beim Einkauf müssen Experimente vermieden werden. Deshalb prüfen wir
        jeden Lieferanten nach einer strengen Routine, bevor wir ihn für unsere
        Plattform zulassen. So können Sie sich darauf verlassen, dass Sie es mit
        professionellen und zuverlässigen Herstellern und Großhändlern zu tun
        haben.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-[#0093D3] md:w-fit">
        Jetzt registrieren <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
