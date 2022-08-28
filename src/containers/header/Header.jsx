import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
          nesciunt. Animi voluptatibus ducimus at quas beatae dolorum
          consequuntur laudantium sunt soluta nihil ratione aliquid accusantium
          minus, dolorem explicabo quos iusto fuga saepe quam perspiciatis
          quibusdam ea aperiam qui. Dignissimos ipsa quam, voluptate labore
          similique doloremque culpa.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email adress" />
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai-img" />
      </div>
    </div>
  );
};

export default Header;
