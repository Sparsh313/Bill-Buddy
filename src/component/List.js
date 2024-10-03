// import { useState } from "react";
import Button from "./button";
import { useState } from "react";


export default function List({ friend, selectfriend, select }) {
  return (
    <>
      <ul>
        {friend.map((e) => (
          <Friend
            friend={e}
            key={e.id}
            onselectfriend={selectfriend}
            select={select}
          />
        ))}
      </ul>
    </>
  );
}

function Friend({ friend, onselectfriend, select }) {
  const isSelect = select?.id === friend.id;

  return (
    <li className={isSelect ? "selected" : ""}>
      <img src={friend.image} alt="img" />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          mujhe dena hai {friend.name} ko {Math.abs(friend.balance)}Rs
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} ko dena hai {Math.abs(friend.balance)}Rs
        </p>
      ) : (
        <p>kisi ko kuch ni dena</p>
      )}
      <Button onClick={() => onselectfriend(friend)}>
        {isSelect ? "Close" : "Select"}
      </Button>
    </li>
  );
}