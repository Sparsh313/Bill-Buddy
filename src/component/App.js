import { useState } from "react";
import List from "./List";
import FormAddfrnd from "./addfriend";
import SplitBill from "./splitbill";
import Button from "./button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showfrnd, setshowfrnd] = useState(false);
  const [friends, setfriends] = useState(initialFriends);
  const [select, setselect] = useState(null);
  // const [message, setMessage] = useState("");

  function handleShowfrnd() {
    setshowfrnd((e) => !e);
  }

  function handleaddfrnd(e) {
    setfriends((friends) => [...friends, e]);
    setshowfrnd(false);
    // setMessage("Friend added successfully!");
  }
  function handleSelectfrnd(e) {
    setselect((curr) => (curr?.id === e.id ? null : e));
    setshowfrnd(false);
  }
  function handlesplitbill(value) {
    setfriends((x) =>
      x.map((friend) =>
        friend.id === select.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setselect(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <List
          friend={friends}
          selectfriend={handleSelectfrnd}
          select={select}
        />

        {showfrnd && <FormAddfrnd onaddfrnd={handleaddfrnd} />}

        <Button onClick={handleShowfrnd}>
          {showfrnd ? "Close" : "ADD Friend"}
        </Button>
      </div>

      {select && <SplitBill select={select} onsplitbill={handlesplitbill} />}
    </div>
  );
}
