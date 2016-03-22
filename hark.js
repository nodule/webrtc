module.exports = {
  name: "hark",
  ns: "webrtc",
  description: "Hark",
  phrases: {
    active: "Harking"
  },
  ports: {
    input: {
      stream: {
        title: "Stream",
        type: "HTMLElement",
        description: "e.g. document.querySelector('audio')",
        required: true
      }
    },
    output: {
      stream: {
        title: "Stream",
        type: "HTMLElement"
      },
      speaking: {
        title: "Speaking",
        type: "HTMLElement"
      },
      silence: {
        title: "Silence",
        type: "HTMLelement"
      },
      volume: {
        title: "volume",
        type: "number"
      },
      threshold: {
        title: "Treshold",
        type: "number"
      }
    }
  },
  dependencies: {
    npm: {
      hark: require('hark')
    }
  },
  fn: function hark(input, $, output, state, done, cb, on, hark) {
    var r = function() {
      var speechEvents = hark($.stream);
      output({
        stream: $.get('stream')
      });

      speechEvents.on('speaking', function() {
        output({
          speaking: $.get('stream')
        });
      });

      speechEvents.on('volume_change', function(volume, threshold) {
        output({
          volume: $.create(volume),
          threshold: $.create(threshold)
        });
      });

      speechEvents.on('stopped_speaking', function() {
        output({
          silence: $.get('stream')
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}