import app from "@/app";

app.mount("#app");

const vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty("--vh", `${vh}px`);
