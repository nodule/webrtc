output = function (cb) {

  var wrtc = new webrtc(input);

  // our direct port.
  cb({
    webrtc: wrtc
  });

  // send local stream
  wrtc.on('localStream', function (stream) {
    cb({
      localStream: stream
    });
  });

  wrtc.on('localStreamStopped', function () {
    cb({
      localStreamStopped: true
    });
  });

  wrtc.on('audioOn', function () {
    cb({
      audio: true
    });
  });

  wrtc.on('audioOff', function () {
    cb({
      audio: false
    });
  });

  wrtc.on('videoOn', function () {
    cb({
      video: true
    });
  });

  wrtc.on('videoOff', function () {
    cb({
      video: false
    });
  });

  wrtc.on('speaking', function () {
    cb({
      speaking: true
    });
  });

  wrtc.on('stoppedSpeaking', function () {
    cb({
      speaking: false
    });
  });

  wrtc.on('message', function (message) {
    cb({
      message: message
    });
  });

  wrtc.on('peerStreamAdded', function (peer) {
    cb({
      peerStreamAdded: peer
    });
  });

  wrtc.on('peerStreamRemoved', function (peer) {
    cb({
      peerStreamRemoved: peer
    });
  });

};
