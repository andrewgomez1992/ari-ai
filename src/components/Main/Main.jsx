import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  console.log("loading", loading);

  return (
    <div className="main">
      <div className="nav">
        <p>Ari</p>
        <img src={assets.ari} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places that Drew needs to take me to.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Tell me a story about a girl named Ari that never knows what
                  she wants to eat.
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Would my boyfriend Drew still love me if I was a bug?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  What is the best way to tell Drew that I want to go shopping?
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.ari} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Ari may provide false information, so please, take it all lightly,
            despite what she says, she does not know everything.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
