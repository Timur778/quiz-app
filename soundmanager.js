import { setupTopBar } from "./reusable.js";
const { retrievedData, activeUser } = setupTopBar();

export class SoundManager {
  #sounds = {
    background: "/Sounds/background5.mp3",
    quizBackground: "/Sounds/background6.mp3",
    toggle: "/Sounds/toggle.mp3",
    dropdown: "/Sounds/dropdown.mp3",
    click: "/Sounds/click.mp3",
    correct: "/Sounds/correct.mp3",
    incorrect: "/Sounds/incorrect.mp3",
    coins: "/Sounds/coins.mp3",
    crowd: "/Sounds/crowd-cheer.mp3",
    gameover: "/Sounds/gameOver.mp3",
    levelComplete: "/Sounds/level-complete.mp3",
    purchase: "/Sounds/purchase.mp3",
  };

  #isSfxEnabled;
  #isMusicEnabled;
  #sfxVolume;
  #musicVolume;
  #currentMusic;
  #currentMusicName;

  constructor(
    isSfxEnabled = true,
    isMusicEnabled = true,
    sfxVolume = 0.1,
    musicVolume = 0.25,
  ) {
    this.#isSfxEnabled = isSfxEnabled;
    this.#isMusicEnabled = isMusicEnabled;
    this.#sfxVolume = sfxVolume;
    this.#musicVolume = musicVolume;
    this.#currentMusic = null;
    this.#currentMusicName = null;
  }

  playSfx(soundName) {
    if (!this.#isSfxEnabled || !soundName) return;
    const soundPath = this.#sounds[soundName];
    if (soundPath) {
      const sound = new Audio(soundPath);
      sound.volume = this.#sfxVolume;
      sound.play();
    } else {
      console.error(`Sound "${soundName}" not found.`);
    }
  }

  playMusic(soundName) {
    if (!this.#isMusicEnabled || !soundName) return;
    const soundPath = this.#sounds[soundName];
    if (soundPath) {
      if (this.#currentMusic) {
        this.#currentMusic.pause();
      }
      this.#currentMusicName = soundName;
      const sound = new Audio(soundPath);
      sound.volume = this.#musicVolume;
      sound.loop = true;
      this.#currentMusic = sound;
      sound.play();
    } else {
      console.error(`Sound "${soundName}" not found.`);
    }
  }

  pauseMusic() {
    if (!this.#currentMusic) return;
    this.#currentMusic.pause();
  }

  stopMusic() {
    if (!this.#currentMusic) return;
    this.#currentMusic.pause();
    this.#currentMusic.currentTime = 0;
    this.#currentMusic = null;
    this.#currentMusicName = null;
  }

  toggleMusic() {
    if (this.#isMusicEnabled) {
      this.#isMusicEnabled = !this.#isMusicEnabled;
      this.pauseMusic();
      return;
    }

    this.#isMusicEnabled = !this.#isMusicEnabled;
    if (this.#currentMusic) {
      this.#currentMusic.play();
    }
  }

  toggleSfx() {
    this.#isSfxEnabled = !this.#isSfxEnabled;
  }

  setSfxVolume(value) {
    if (
      typeof value !== "number" ||
      Number.isNaN(value) ||
      value < 0 ||
      value > 1
    ) {
      return;
    }

    this.#sfxVolume = value;
  }
  setMusicVolume(value) {
    if (
      typeof value !== "number" ||
      Number.isNaN(value) ||
      value < 0 ||
      value > 1
    ) {
      return;
    }

    if (this.#currentMusic) this.#currentMusic.volume = value;
    this.#musicVolume = value;
  }

  saveMusicState() {
    if (!this.#currentMusic) return;
    const currentMusic = {
      track: this.#currentMusicName,
      playbackTime: this.#currentMusic.currentTime,
      isMusicEnabled: this.#isMusicEnabled,
    };

    try {
      sessionStorage.setItem("currentMusic", JSON.stringify(currentMusic));
    } catch (error) {
      console.error("Error occured:", error);
    }
  }

  restoreMusicState() {
    try {
      const retrievedAudio = sessionStorage.getItem("currentMusic");

      if (!retrievedAudio) return;

      const extractedAudio = JSON.parse(retrievedAudio);
      const soundPath = this.#sounds[extractedAudio.track];
      const soundName = extractedAudio.track;

      this.#isMusicEnabled = extractedAudio.isMusicEnabled;
      if (!soundPath) return false;

      if (!this.#isMusicEnabled) return true;

      const audio = new Audio(soundPath);

      audio.volume = this.#musicVolume;
      audio.loop = true;
      audio.currentTime = extractedAudio.playbackTime;

      this.#currentMusic = audio;
      this.#currentMusicName = soundName;

      if (this.#isMusicEnabled) {
        audio.play();
      }

      return true;
    } catch (error) {
      console.error("Error parsing JSON from storage", error);
      return false;
    }
  }

  get isSfxEnabled() {
    return this.#isSfxEnabled;
  }

  get isMusicEnabled() {
    return this.#isMusicEnabled;
  }

  get musicVolume() {
    return this.#musicVolume;
  }

  get sfxVolume() {
    return this.#sfxVolume;
  }
}
