webrtc = input.webrtc;
delete input.webrtc;
output = {
  peer: webrtc.createPeer(input)
};
