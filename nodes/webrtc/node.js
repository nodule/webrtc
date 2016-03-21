output = function (cb) {
  var wrtc = new webrtc(input);

  // our direct port.
  cb({webrtc: $.create(wrtc)});

  // send local stream
  wrtc.on('localStream', function (stream) {
    cb({localStream: $.create(stream)});
  });

  wrtc.on('localStreamStopped', function () {
    cb({localStreamStopped: $.create(true)});
  });

  wrtc.on('audioOn', function () {
    cb({audio: $.create(true)});
  });

  wrtc.on('audioOff', function () {
    cb({audio: $.create(false)});
  });

  wrtc.on('videoOn', function () {
    cb({video: $.create(true)});
  });

  wrtc.on('videoOff', function () {
    cb({video: $.create(false)});
  });

  wrtc.on('speaking', function () {
    cb({speaking: $.create(true)});
  });

  wrtc.on('stoppedSpeaking', function () {
    cb({speaking: $.create(false)});
  });

  wrtc.on('message', function (message) {
    cb({message: $.create(message)});
  });

  wrtc.on('peerStreamAdded', function (peer) {
    cb({peerStreamAdded: $.create(peer)});
  });

  wrtc.on('peerStreamRemoved', function (peer) {
    cb({peerStreamRemoved: $.create(peer)});
  });
};
