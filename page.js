import Image from "next/image";
import styles from "./page.module.css";
import AddBook from "./bookcreate/page";

export default function Home() {
  return (
    <div>
      <AddBook></AddBook>
    </div>
  );
}
