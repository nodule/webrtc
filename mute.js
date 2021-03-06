module.exports = {
  name: "mute",
  ns: "webrtc",
  description: "Mute",
  phrases: {
    active: "Muting media"
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
  fn: function mute(input, $, output, state, done, cb, on) {
    var r = function() {
      $.webrtc.mute();
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