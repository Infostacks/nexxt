import React from "react";
import ReactTypingEffect from "react-typing-effect";
import video from "../../assets/video.mp4";
import { VideoContainer, TextWrapper, FixedText } from "./Main.styles";
const Main = () => {
  return (
    <>
      <VideoContainer loop autoPlay muted id="myVideo">
        <source src={video} type="video/mp4" />
      </VideoContainer>
      <TextWrapper className="text-wrapper">
        <FixedText className="fixed-text">We are the next </FixedText>
        <ReactTypingEffect
          text={[
            "Financial Technologist",
            "AI Builder",
            "Data Scientist",
            "Web Developer",
            "Startup Builders",
          ]}
          eraseSpeed={0}
          eraseDelay={1000}
          typingDelay={5000}
        />
      </TextWrapper>
    </>
  );
};

export default Main;
