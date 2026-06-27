"use client";
import { useState } from "react";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Cursor />
      <Nav onOpenModal={() => setModalOpen(true)} />
      <Ticker />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <Logos />
      <Features />
      <Testimonials />
      <Pricing onOpenModal={() => setModalOpen(true)} />
      <CTA onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
