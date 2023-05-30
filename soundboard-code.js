var currentAudio = null;

function playAudio(audioId) {
  var audioElement = document.querySelector(audioId);
  
  if (currentAudio !== null && currentAudio !== audioElement) {
    currentAudio.pause();
  }
  
  audioElement.play();
  currentAudio = audioElement;
}

function btnLegoCity() {
  playAudio('#audio_btn_lego-city');
}
document.querySelector('.btnLegoCity').onclick = btnLegoCity;

function btnGoofyRingtone() {
  playAudio('#audio_btn_goofy-ringtone');
}
document.querySelector('.btnGoofyRingtone').onclick = btnGoofyRingtone;

function btnSpongebob() {
  playAudio('#audio_btn_spongebob');
}
document.querySelector('.btnSpongebob').onclick = btnSpongebob;

function btnCartoon() {
  playAudio('#audio_btn_cartoon');
}
document.querySelector('.btnCartoon').onclick = btnCartoon;

function btnFnaf() {
  playAudio('#audio_btn_fnaf');
}
document.querySelector('.btnFnaf').onclick = btnFnaf;

function btnBonk() {
  playAudio('#audio_btn_donk');
}
document.querySelector('.btnBonk').onclick = btnBonk;

function btnBoom() {
  playAudio('#audio_btn_boom');
}
document.querySelector('.btnBoom').onclick = btnBoom;

function btnBruh() {
  playAudio('#audio_btn_bruh');
}
document.querySelector('.btnBruh').onclick = btnBruh;

function btnShadowWizard() {
  playAudio('#audio_btn_shadow-wizard');
}
document.querySelector('.btnShadowWizard').onclick = btnShadowWizard;

function btnAmongus() {
  playAudio('#audio_btn_amongus');
}
document.querySelector('.btnAmongus').onclick = btnAmongus;

function btnPianoRiff() {
  playAudio('#audio_btn_piano_riff');
}
document.querySelector('.btnPianoRiff').onclick = btnPianoRiff;

function btnSnoring() {
  playAudio('#audio_btn_snoring');
}
document.querySelector('.btnSnoring').onclick = btnSnoring;

function btnAlarm() {
  playAudio('#audio_btn_alarm');
}
document.querySelector('.btnAlarm').onclick = btnAlarm;

function btnAlert() {
  playAudio('#audio_btn_alert');
}
document.querySelector('.btnAlert').onclick = btnAlert;

function btnSamsung() {
  playAudio('#audio_btn_samsung');
}
document.querySelector('.btnSamsung').onclick = btnSamsung;

function btnSkibidi() {
  playAudio('#audio_btn_skibidi');
}
document.querySelector('.btnSkibidi').onclick = btnSkibidi;

function btnAmongusReveal() {
  playAudio('#audio_btn_amongus-reveal');
}
document.querySelector('.btnAmongusReveal').onclick = btnAmongusReveal;

function btnOhhMyGod() {
  playAudio('#audio_btn_ooh-my-god');
}
document.querySelector('.btnOhhMyGod').onclick = btnOhhMyGod;

function btnBombastic() {
  playAudio('#audio_btn_bombastic');
}
document.querySelector('.btnBombastic').onclick = btnBombastic;
