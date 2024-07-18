"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useRef } from "react";

export default function Home2() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <section ref={targetRef} className="flex bg-black text-white">
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
    </>
  );
}

const Content = ({ content }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, description }, idx) => (
        <div
          key={id}
          className={`p-8 h-screen flex flex-col justify-between ${
            idx % 2 ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="font-light w-full max-w-md">{description}</p>
        </div>
      ))}
    </div>
  );
};

const Images = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-24 md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};

const items = [
  {
    id: 1,
    title: "Almond nuts with chocolate drizzle",
    description:
      "Enjoy the rich flavor and crunchy texture of our premium almond nuts, delicately drizzled with luscious chocolate. Perfect for indulgent snacking or adding a touch of sweetness to your favorite recipes.",
    img: "https://photos.prnewswire.com/prnfull/20151208/294393?max=400",
  },
  {
    id: 2,
    title: "Raisins in a bowl",
    description:
      "Our plump raisins are a delightful blend of sweet and tangy flavors, ideal for snacking on their own or as a nutritious addition to cereals, yogurt, and baked goods. Packed with antioxidants and natural sweetness, they're a healthy choice for any occasion.",
    img: "https://i.pinimg.com/originals/f5/bf/31/f5bf31d7df475571e19b74388bb991f6.png",
  },
  {
    id: 3,
    title: "Almond nuts close-up",
    description:
      "Get up close with our exquisite almond nuts, known for their wholesome goodness and versatility. Whether you enjoy them raw, roasted, or as part of your favorite recipes, these almonds are a delicious and nutritious choice.",
    img: "https://hips.hearstapps.com/hmg-prod/images/almonds-in-a-wooden-bowl-royalty-free-image-1689461629.jpg?crop=0.668xw:1.00xh;0.231xw,0&resize=980:*",
  },
  {
    id: 4,
    title: "Raisins on a wooden surface",
    description:
      "Discover the natural sweetness and chewy texture of our premium raisins, perfect for snacking or enhancing your favorite dishes. With their rich flavor and health benefits, our raisins are a tasty way to boost your daily nutrition.",
    img: "https://4.imimg.com/data4/YJ/AJ/MY-23669687/yellow-raisins-500x500.jpg",
  },
];
