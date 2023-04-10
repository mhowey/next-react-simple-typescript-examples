import { useState } from "react";
// import GuestList from "@components/GuestList";
import FocusUserSearch from "@components/FocusUserSearch";

export default function RefsPage() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>
        {/* <GuestList /> */}
        <FocusUserSearch />
      </h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>

      {/* <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button> */}
    </div>
  );
}
