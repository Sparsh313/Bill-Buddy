import Button from "./button";
import { useState } from "react";


export default function SplitBill({ select, onsplitbill }) {
  const [bill, setbill] = useState("");
  const [userexpense, setuserexpense] = useState("");
  const [whoispaying, setwhoispaying] = useState("user");
  const paidbyfrnd = bill ? bill - userexpense : " ";

  function handlesubmit(e) {
    e.preventDefault();
    if (!bill || !userexpense) return;
    onsplitbill(whoispaying === "user" ? paidbyfrnd : -userexpense);
  
  }

  return (
    <form className="form-split-bill" onSubmit={handlesubmit}>
      <h2>Split a bill with {select.name}</h2>

      <label>💰Bill</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setbill(Number(e.target.value))}
      />

      <label>🥼 Your Expenses</label>
      <input
        type="text"
        value={userexpense}
        onChange={(e) =>
          setuserexpense(
            Number(e.target.value) > bill ? userexpense : Number(e.target.value)
          )
        }
      />

      <label>🐍{select.name}'s Expense</label>
      <input type="text" disabled value={paidbyfrnd} />

      <label>😁Who's Paying</label>
      <select
        value={whoispaying}
        onChange={(e) => setwhoispaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend"> {select.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}