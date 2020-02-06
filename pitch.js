var Pitch = {
  expiredMessage: `<span id="number">0</span> minutes <span id="number">0</span> seconds`,
  expiredMessage2: `Processing will continue.`,
  expiredMessage3: `We don't usually feel the operation of the program.`,
  expiredMessage4: `Thanks for watching.`,
  startTime: 0,
  endTime: 0,
  remainTime: 0,
  start: function() {
      // タイマーの残り時間を計算し、1秒単位で remainTimeに保存
      Pitch.remainTime = (Pitch.endTime - Pitch.startTime) / 1000;

      // 1000ミリ秒ごとに countDown関数を実行
      setInterval(Pitch.countDown, 1000);
  },
  countDown: function() {
      var progressText = document.getElementById("progressText");

      if (Pitch.remainTime <= -4 && Pitch.remainTime > -8) {
          // 残り時間が x秒未満の場合に2つ目の時間切れメッセージを表示
          Pitch.remainTime -= 1;
          progressText.innerHTML = `${Pitch.expiredMessage2}`;
      } else if (Pitch.remainTime <= -8 && Pitch.remainTime > -14) {
          // 残り時間が x秒未満の場合に2つ目の時間切れメッセージを表示
          Pitch.remainTime -= 1;
          progressText.innerHTML = `${Pitch.expiredMessage3}`;
      }
      else if (Pitch.remainTime <= -14) {
          // 残り時間が x秒未満の場合に4つ目の時間切れメッセージを表示
          progressText.innerHTML = `${Pitch.expiredMessage4}`;
      } else if (Pitch.remainTime <= 1) {
          // 残り時間が 1秒未満の場合に時間切れメッセージを表示
          Pitch.remainTime -= 1;
          progressText.innerHTML = `${Pitch.expiredMessage}`;
      } else {
          Pitch.remainTime -= 1;
          var min = Math.floor(Pitch.remainTime / 60);
          var sec = Math.floor(Pitch.remainTime % 60);

          // 残り時間の表示
          progressText.innerHTML = `<span id="number">${min}</span> minutes <span id="number">${sec}</span> seconds`;
      }
  }
};
