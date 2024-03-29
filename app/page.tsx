"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Global } from '@emotion/react'
import globalStyles from '@/app/global_emotion_styles';
import { ThemeProvider } from '@emotion/react'
import theme from '@/app/theme_emotion';
import styled from '@emotion/styled'
import MainPage from "@/components/MainPage/MainPage";
import Card from '@/components/SingleCard/SingleCard';
import LevelPage from '@/components/Level/Level'; 


// Definisci totalScore e totalCards
const totalScore = 100; // Sostituisci con il valore reale
const totalCards = 10; // Sostituisci con il valore reale

// Definisci la funzione onStartLevel
const onStartLevel = () => {
  // Implementa la logica per avviare il livello
  console.log("Livello avviato!");
}


export default function Home() {
  return (
    <main className={styles.main}>
       <ThemeProvider theme={theme}>
<Global styles={globalStyles} />
<MainPage  totalCards={totalCards} onStartLevel={onStartLevel}  />
  
       </ThemeProvider>

    </main>
  );
}

