import { api } from "~/utils/api";
import { useEffect, useState } from "react";

export const FlashingCell = (content: string, flashTime: number): JSX.Element => {
    const [isFlashing, setFlashing]: [boolean, Function] = useState(false);
    const [classString, setClass]: [string, Function] = useState("");
    useEffect(() => {}, [isFlashing]);
  return (
    <>
        <div className={classString}>
            {content}
        </div>
    </>
  );
};
