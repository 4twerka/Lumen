import React from "react";
import QuestionAcordion from "./QuestionAcordion";

const QuestionsAcordions: React.FC = () => {
  return (
    <div>
      <QuestionAcordion
        number="01/"
        title="Як довго горять  свічки?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <QuestionAcordion
        number="02/"
        title="Чи є можливість обміну або повернення товару?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <QuestionAcordion
        number="03/"
        title="Чи можна замовити свічки в подарунковій упаковці?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <QuestionAcordion
        number="04/"
        title="Чи можна замовити свічку з індивідуальним дизайном?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <QuestionAcordion
        number="05/"
        title="Чи є програма лояльності для постійних клієнтів?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
    </div>
  );
};

export default QuestionsAcordions;
