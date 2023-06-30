export default function() {
    const kitchenTimerAudio = new Audio(
        'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
      )
      const buttonPressAudio = new Audio(
        'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
      )
      const bgAudio = new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

      bgAudio.loop

      function pressButton() {
        buttonPressAudio.play()
      }
      function timeEnd() {
        kitchenTimerAudio.play()
      }

      return {
        pressButton,
        timeEnd,
        bgAudio
      }
}