import React, { useEffect, useState } from "react";
import { GrMoney } from "react-icons/gr";

const financialTips = [
  {
    tip: "Start Saving Early",
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    expert: "Warren Buffett",
  },
  {
    tip: "Diversify Your Investments",
    quote: "Don’t put all your eggs in one basket.",
    expert: "Andrew Carnegie",
  },
  {
    tip: "Live Below Your Means",
    quote: "If you live for having it all, what you have is never enough.",
    expert: "Vicki Robin",
  },
  {
    tip: "Invest in Yourself",
    quote: "The most important investment you can make is in yourself.",
    expert: "Warren Buffett",
  },
  {
    tip: "Understand the Power of Compound Interest",
    quote:
      "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn’t, pays it.",
    expert: "Albert Einstein",
  },
  {
    tip: "Create a Budget and Stick to It",
    quote:
      "A budget is telling your money where to go instead of wondering where it went.",
    expert: "Dave Ramsey",
  },
  {
    tip: "Avoid High-Interest Debt",
    quote: "Debt is dumb. Cash is king.",
    expert: "Dave Ramsey",
  },
  {
    tip: "Have an Emergency Fund",
    quote:
      "Prepare for the unknown by studying how others in the past have coped with the unforeseeable and the unpredictable.",
    expert: "George S. Clason",
  },
  {
    tip: "Focus on Long-Term Goals",
    quote:
      "The stock market is designed to transfer money from the Active to the Patient.",
    expert: "Warren Buffett",
  },
  {
    tip: "Keep Learning and Stay Informed",
    quote: "In investing, what is comfortable is rarely profitable.",
    expert: "Robert Arnott",
  },
];

export const FinancialTips = () => {
  const [showQuote, setShowQuote] = useState(financialTips[0]);

  useEffect(() => {
    setInterval(() => {
      setShowQuote(
        financialTips[Math.floor(Math.random() * financialTips.length)]
      );
    }, 3000);
  }, []);

  const { tip, quote, expert } = showQuote;
  return (
    <div
      className="d-flex flex-column justify-content-center"
      style={{
        height: "100%",
      }}
    >
      <div className="mb-5">
        <GrMoney className="text-success" style={{ fontSize: "10rem" }} />
        <div>Watch your Money Grow!</div>
      </div>
      <h4>{tip}</h4>
      <div className="fw-bolder">
        " {quote} " - {expert}
      </div>
    </div>
  );
};
