module.exports = {
  name: "pauseVideo",
  ns: "webrtc",
  description: "Pause Video",
  phrases: {
    active: "Pausing video"
  },
  ports: {
    input: {
      webrtc: {
        title: "WebRTC",
        type: "WebRTC",
        required: true
      }
    },
    output: {
      webrtc: {
        title: "WebRTC",
        type: "WebRTC"
      }
    }
  },
  fn: function pauseVideo(input, $, output, state, done, cb, on) {
    var r = function() {
      $.webrtc.pauseVideo();
      output = {
        webrtc: $.get('webrtc')
      };
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}