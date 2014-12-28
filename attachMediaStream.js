module.exports = {
  name: "attachMediaStream",
  ns: "webrtc",
  description: "AttachMediaStream (microphone, camera)",
  phrases: {
    active: "Attaching Media Stream"
  },
  ports: {
    input: {
      element: {
        title: "Media Element",
        type: "HTMLElement"
      },
      stream: {
        title: "Stream",
        type: "HTMLElement"
      }
    },
    output: {
      element: {
        title: "Media Element",
        type: "HTMLElement"
      },
      stream: {
        title: "Stream",
        type: "HTMLElement"
      }
    }
  },
  dependencies: {
    npm: {
      attachmediastream: require('attachmediastream')
    }
  },
  fn: function attachMediaStream(input, output, state, done, cb, on, attachmediastream) {
    var r = function() {
      attachmediastream(input.element, input.stream)
      output = input
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}