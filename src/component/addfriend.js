import Button from "./button";
import { useState } from "react";

export default function FormAddfrnd({ onaddfrnd }) {
  const [Name, setName] = useState("");
  const [Img, setImg] = useState("https://i.pravatar.cc/48?");

  function handleSubmit(e) {
    e.preventDefault();

    if (!Name) return;

    const id = crypto.randomUUID();

    const Newfrnd = {
      image: Img,
      name: Name,
      balance: 0,
      id,
    };
    // console.log(Newfrnd);
    onaddfrnd(Newfrnd);

    setName("");
    setImg(Img);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👪Friend</label>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📷IMAGE URL</label>
      <input type="text" value={Img} onChange={(e) => setImg(e.target.value)} />
      <Button>ADD</Button>
    </form>
  );
}
