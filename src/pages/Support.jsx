import React from "react";
import UnderConstruction from "../components/extra/UnderConstruction";
import QuestionsForm from "../components/Main/Support/QuestionsForm";

const Support = () => {
  return (
    <div className="customBackground flex h-screen flex-col items-center justify-center">
      {/*       <p className="highlight -rotate-6 text-center">Support Page</p>
      <UnderConstruction /> */}
      <QuestionsForm />
    </div>
  );
};

export default Support;
