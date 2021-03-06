import React from "react";
import Player from "../Player/Player";
import Teacher from "../Teacher/Teacher";

const User = (props) => {
  const { familiar } = props;

  // 1. Element Variable
  let greeting;
  if (familiar) {
    greeting = <h5>How are you?</h5>;
  } else {
    greeting = <h5>Who the Hell are you? DGM.</h5>;
  }
  return (
    <div>
      <div>
        <h2>Greetings</h2>
        {greeting}
      </div>
      <div>
        <h2>Food</h2>
        {familiar ? <h4>Mango</h4> : <h4>No Money!!</h4>}
      </div>
      <div>
        <h2>Profession</h2>
        {familiar ? <Teacher></Teacher> : <Player></Player>}
      </div>
      <div>
        <h2>Connection</h2>
        {familiar && <Player></Player>}
      </div>
    </div>
  );
};

export default User;
