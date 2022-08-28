import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const whatGPT3Data = [
  {
    title: "Chatbots",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quod debitis, facere tempora quae autem corrupti odio ut ipsa. ",
  },
  {
    title: "Knowledgebase",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, laborum doloribus inventore nesciunt exercitationem ipsa itaque ipsum!",
  },

  {
    title: "Education",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores veniam eius inventore at accusamus omnis sequi!",
  },
];

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse mollitia inventore cumque perferendis nam. Vel commodi similique animi ex? Nisi voluptas, tenetur placeat officia modi ducimus doloribus repellat, non itaque ipsum ea quae. Dolorum quisquam provident, illum natus incidunt consequuntur quis sunt voluptas voluptates quos. "
        />
      </div>

      <div className="gpt3__whatgpt3-heading ">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        {whatGPT3Data.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatGPT3;
