import {useState} from "react";

export default function useForceUpdate() {
  const tmp = useState(0);
  return () => tmp[1](value => ++value);
};
