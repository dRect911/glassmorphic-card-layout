

import clsx from "clsx";
import Image from "next/image";

type Skill = {
  id: number;
  title: string;
  description: string;
  icon: string;
  accentColor?: string; // Optional accent color for the skill
};

const skills: Skill[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Mastering HTML, CSS, JavaScript, and frameworks like Next.js and Tailwind.",
    icon: "⚡",
    accentColor: "rose",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
    "Crafting intuitive and visually pleasing interfaces with Figma & Adobe Suite.",
    icon: "🎨",
    accentColor: "gold",
  },
  {
    id: 3,
    title: "3D & Motion",
    description:
      "Creating interactive 3D elements, animations, and parallax effects with Three.js & GSAP.",
    icon: "🌀",
    accentColor: "steel-pink",
  },
  {
    id: 4,
    title: "Productivity",
    description:
      "Efficient workflow with task organization, Git, and project management tools.",
    icon: "📈",
    accentColor: "safety-orange",
  },
  {
    id: 5,
    title: "Personal Projects",
    description:
    "Building side projects to experiment with design, interactivity, and tech stack.",
    icon: "",
    accentColor: "violet",
  },
];

const GMCard = ({ skill }: { skill: Skill }) => {
  const accent = skill.accentColor ? skill.accentColor : "gold";

  // Static mapping of accent color keys to Tailwind class strings
  const accentClasses: Record<string, {
    border: string;
    ring: string;
    bg: string;
    text: string;
    bg0: string;
  }> = {
    rose: {
      border: "hover:border-rose/70",
      ring: "hover:ring-rose/30",
      bg: "hover:bg-rose/2",
      text: "group-hover:text-rose",
      bg0: "bg-rose/0",
    },
    gold: {
      border: "hover:border-gold/70",
      ring: "hover:ring-gold/30",
      bg: "hover:bg-gold/2",
      text: "group-hover:text-gold",
      bg0: "bg-gold/0",
    },
    "steel-pink": {
      border: "hover:border-steel-pink/70",
      ring: "hover:ring-steel-pink/30",
      bg: "hover:bg-steel-pink/2",
      text: "group-hover:text-steel-pink",
      bg0: "bg-steel-pink/0",
    },
    "safety-orange": {
      border: "hover:border-safety-orange/70",
      ring: "hover:ring-safety-orange/30",
      bg: "hover:bg-safety-orange/2",
      text: "group-hover:text-safety-orange",
      bg0: "bg-safety-orange/0",
    },
    violet: {
      border: "hover:border-violet/70",
      ring: "hover:ring-violet/30",
      bg: "hover:bg-violet/2",
      text: "group-hover:text-violet",
      bg0: "bg-violet/0",
    },
  };

  function getCardClasses(accent: string) {
    // fallback to gold if accent not found
    const accentObj = accentClasses[accent] ?? accentClasses["gold"];
    return {
      container: clsx(
        "group bg-white/0 backdrop-blur-sm rounded-2xl border-2 border-neutral-200 ring-2 ring-neutral-100",
        accentObj.border,
        accentObj.ring,
        accentObj.bg,
        "p-4 row-span-1 col-span-1 transition-all cursor-pointer duration-300"
      ),
      inner: clsx(
        "size-full rounded-lg flex flex-col gap-2",
        accentObj.bg0
      ),
      title: clsx(
        "text-5xl font-bold transition-all duration-300",
        accentObj.text
      ),
    };
  }
  const classes = getCardClasses(accent);
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <h2 className={classes.title}>
          {skill.title}
        </h2>
        <p className="text-neutral-600 text-xl">
          {skill.description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main
      id="main-container"
      className="font-sans w-screen lg:h-screen py-20 min-h-screen bg-green-100/0 flex min-w-screen items-center justify-center "
    >
      <div className="container h-full bg-green-200/0 p-0 pb-8 lg:py-0">
        <div className="grid size-full p-4 gap-6 bg-green-300/0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {skills.map((i) => (
            <GMCard key={i.id} skill={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
