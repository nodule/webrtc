webrtc = $.webrtc;
delete $.webrtc;
output = {
  peer: webrtc.createPeer(input),
  webrtc: webrtc
};
