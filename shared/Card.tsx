import Tilt from "react-parallax-tilt";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}

export default function Card({ icon, title, description, index }: Props) {
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.5}
      className="fix-safari-tilt relative hover:shadow-xl cursor-default hover:shadow-purple-100/70 overflow-hidden rounded-2xl bg-gradient-to-b from-white to-purple-200 p-px transition-transform transform hover:scale-105"
    >
      <div className="relative flex items-center h-full gap-6 rounded-2xl p-8 bg-purple-50">
        <div className="flex flex-col gap-6 items-center">
          {icon}
          <div>
            <h4 className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
              {title}
            </h4>
            <p className="mt-3 text-zinc-600 text-center">{description}</p>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
