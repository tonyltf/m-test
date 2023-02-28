import { Suspense } from "react";
import Friends from "./components/Friends";

export default () => <Suspense fallback="Loading friends...">
  <Friends />
</Suspense> ;
