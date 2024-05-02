import Tilt from "react-parallax-tilt";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: Props) {
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.5}
      className="fix-safari-tilt relative hover:shadow-xl hover:shadow-purple-100/70 overflow-hidden rounded-2xl bg-gradient-to-b from-white to-purple-200 p-px"
    >
      <div className="relative flex h-full flex-col gap-6 rounded-2xl p-8 bg-purple-50">
        {icon}
        <div>
          <h4 className="text-xl font-semibold text-zinc-900">{title}</h4>
          <p className="mt-3 text-zinc-600">{description}</p>
        </div>
      </div>
    </Tilt>
  );
}
