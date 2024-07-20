import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";

const HorizontalStepper = () => {
  const [activeStep, setActiveStep] = useState<string>();
  useEffect(() => {
    const stickySections = document.querySelectorAll(".sticky_1");

    const onScroll = () => {
      stickySections.forEach((section) => {
        transform(section);
        highlightActiveStep(section);
      });
    };

    const transform = (section: any) => {
      const offsetTop = section.parentElement.offsetTop;
      const scrollSection = section.querySelector(".scroll_section");

      if (scrollSection) {
        let percentage =
          ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
        updateProgressBar(percentage / 4);

        const dividedPer = percentage / 4;
        if (dividedPer <= 17) {
          setActiveStep("step-1");
        }
        if (dividedPer >= 18 && dividedPer <= 39) {
          setActiveStep("step-2");
        }
        if (dividedPer >= 40 && dividedPer <= 64) {
          setActiveStep("step-3");
        }
        if (dividedPer >= 65 && dividedPer <= 89) {
          setActiveStep("step-4");
        }
        if (dividedPer >= 90 && dividedPer <= 100) {
          setActiveStep("step-5");
        }
      }
    };

    const highlightActiveStep = (section: any) => {
      const steps = section.querySelectorAll(".step");
      steps.forEach((step: any, index: any) => {
        const rect = step.getBoundingClientRect();
        if (rect.left >= 0 && rect.right <= window.innerWidth) {
          step.classList.add("active");
        } else {
          step.classList.remove("active");
        }
      });
    };

    const updateProgressBar = (percentage: any) => {
      const progressBar: any = document.querySelector(".progress-bar");
      if (progressBar) {
        progressBar.style.width = `${percentage}%`;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="sticky_parent bg-purple-50">
      <div className="h-[40vh] sticky top-0 max-w-[100vw] mx-auto flex flex-col py-2 items-center justify-center hide_scrollbar">
        <div className="div-block-129">
          <h2 className="text-6xl font-bold text-zinc-900 leading-snug tracking-wide text-center mb-3">
            Defilens: Automate Your Trades
          </h2>
          <h2 className="text-lg text-center text-zinc-700 mb-8">
            Automate repetitive tasks, conduct meetings, and make data-driven
            decisions with AI.
            <br />
            Tools, web, and more.
          </h2>
          <div className="div-block-131 relative">
            <a
              href="#"
              className={`build-tag-1 w-inline-block ${
                activeStep === "step-1"
                  ? "bg-purple-400 text-white"
                  : "bg-white"
              }`}
            >
              <div className="text-block-68">Build</div>
            </a>
            <a
              href="#"
              className={`build-tag-1 w-inline-block ${
                activeStep === "step-2"
                  ? "bg-purple-400 text-white"
                  : "bg-white"
              }`}
            >
              <div className="text-block-68">Test</div>
            </a>
            <a
              href="#"
              className={`build-tag-1 w-inline-block ${
                activeStep === "step-3"
                  ? "bg-purple-400 text-white"
                  : "bg-white"
              }`}
            >
              <div className="text-block-68">Deploy</div>
            </a>
            <a
              href="#"
              className={`build-tag-1 w-inline-block ${
                activeStep === "step-4"
                  ? "bg-purple-400 text-white"
                  : "bg-white"
              }`}
            >
              <div className="text-block-68">Monitor</div>
            </a>
            <a
              href="#"
              className={`build-tag-1 w-inline-block ${
                activeStep === "step-5"
                  ? "bg-purple-400 text-white"
                  : "bg-white"
              }`}
            >
              <div className="text-block-68">Analyze</div>
            </a>
            <div className="absolute left-0 right-0 h-full flex items-center w-full -z-10">
              <div className="h-[2px] bg-zinc-200 w-full">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
          <div className="div-block-130"></div>
        </div>
      </div>
      <div className="sticky_1 bg-purple-50 hide_scrollbar">
        <div className="scroll_section">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="step w-screen flex items-center justify-center border-green-400"
            >
              <div className="bg-white border border-zinc-200 text-zinc-900 bg-opacity-70 rounded-3xl py-6 px-8">
                <div className="frame-33221">
                  <div className="text-4xl tracking-wide font-semibold mb-2">
                    {index === 0 && "Build"}
                    {index === 1 && "Test"}
                    {index === 2 && "Deploy"}
                    {index === 3 && "Monitor"}
                    {index === 4 && "Analyze"}
                  </div>
                  <div className="text-lg mb-5 tracking-wide">
                    Easily Build AI Agents for Complex Tasks
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <FaCheck className="text-base text-purple-500" />
                    <div className="text-base tracking-normal">
                      Automate Across 100+ Apps
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ">
                    <FaCheck className="text-base text-purple-500" />
                    <div className="text-base tracking-normal">
                      Multi-Model Agent Support
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCheck className="text-base text-purple-500" />
                    <div className="text-base tracking-normal">
                      Single-prompt Agent
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ">
                    <FaCheck className="text-base text-purple-500" />
                    <div className="text-base tracking-normal">
                      Bring Your LLM
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCheck className="text-base text-purple-500" />
                    <div className="text-base tracking-normal">
                      Easily Build AI AgentsTool Calls
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalStepper;
