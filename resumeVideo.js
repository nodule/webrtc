module.exports = {
  name: "resumeVideo",
  ns: "webrtc",
  description: "Resume Video",
  phrases: {
    active: "Resuming video"
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
  fn: function resumeVideo(input, $, output, state, done, cb, on) {
    var r = function() {
      $.webrtc.resumeVideo();
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