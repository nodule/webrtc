// webrtc = $.webrtc;
// delete $.webrtc; why?
output = {
  peer: $.create($.webrtc.createPeer({element: $.element, stream: $.stream})),
  webrtc: $.get('webrtc')
};
