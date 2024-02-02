import Image from "next/image";
import styles from "./page.module.css"
import Header from "./components/header";
import Main from "./components/main";

export default function Home() {
  return (
    <>
     <Header />
      <Main/>
    </>
    
  );
}
