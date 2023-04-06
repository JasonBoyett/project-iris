import { api } from "~/utils/api";
import { useEffect, useState } from "react";

const FlashingCell = (content: string, flashTime: number): JSX.Element => {
    const [isFlashing, setFlashing] = useState(false);
    const [classString, setClass] = useState("");
    useEffect(() => {console.log('build cool stuff');}, [isFlashing]);
  return (
    <>
        <div className={classString}>
            {content}
        </div>
    </>
  );
};
