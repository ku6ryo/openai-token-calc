"use client"
import { useState } from "react";
import axios from "axios";
import styles from "./page.module.scss";


export default function Home() {
  const [text, setText] = useState("hello world");
  const [tokens, setTokens] = useState<number | null>(null)

  const onButtonClick = async () => {
    const res = await axios.post("/api/token", {
      text: text,
    })
    res.data.tokens && setTokens(res.data.tokens)
  }
  return (
    <div className={styles.frame}>
      <div>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <button onClick={onButtonClick} disabled={text.length === 0}>CALC TOKENS</button>
      </div>
      <div>CHARACTERS: {text.length}</div>
      <div>TOKENS: {tokens || "NOT CALCULATED"}</div>
    </div>
  )
}
