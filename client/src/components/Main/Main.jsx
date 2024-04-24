import React, { useContext } from "react";
import axios from "axios";
import "./main.css";
import { assets } from "../../assets/assets";
import { IoSendSharp } from "react-icons/io5";
import { FaMicrophoneSlash } from "react-icons/fa";
import { Context } from "../../context/Context";
import SpinningLogo from "../SpinningLogo";
import { formatDateTime } from "../../utils/formatDate";

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

  console.log("recentPrompt", recentPrompt);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fakeName = "John Doe";
    const currentTime = formatDateTime(new Date());

    // Check if input is empty and handle accordingly
    if (!input) {
      console.error("Input field is empty");
      return; // Exit the function if input is empty
    }

    const formData = {
      prompt: input,
      user: fakeName,
      time: currentTime,
      // result: resultData,
    };

    try {
      await axios.post(import.meta.env.VITE_API_SERVER, formData);
      console.log("Item added to database", formData);

      // Reset input field and call onSent after successful submission
      setInput("");
      onSent();
    } catch (error) {
      console.error("Error adding item to database:", error);
    }
  };

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
                <span>Hello,</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <SpinningLogo height={"50px"} width={"59px"} />
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places that Drew needs to take me to.</p>
              </div>
              <div className="card">
                <p>
                  Tell me a story about a girl named Ari that never knows what
                  she wants to eat.
                </p>
              </div>
              <div className="card hidden">
                <p>Would my boyfriend Drew still love me if I was a bug?</p>
              </div>
              <div className="card">
                <p>
                  What is the best way to tell Drew that I want to go shopping?
                </p>
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
              <SpinningLogo height={"30px"} width={"30px"} />
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
          <div className="box">
            <span></span>
            <div className="box1">
              <span></span>
            </div>
          </div>

          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                  setInput("");
                }
              }}
            />
            <div>
              <FaMicrophoneSlash size={25} style={{ cursor: "pointer" }} />
              {input ? <IoSendSharp size={23} onClick={handleSubmit} /> : null}
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
