function init() {
  drawOnline();
  drawOffline();
}

function drawOnline() {
  if ($('.circleOnline').length > 0)
  {
    $('.circleOnline').each(function () {
      var bar = new ProgressBar.Circle(this, {
        color: '#0c0',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#0c0', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = 'Online'
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }

        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';
      bar.animate(1.0);
    });
  }
}

function drawOffline() {
  if ($('.circleOffline').length > 0)
  {
    $('.circleOffline').each(function () {
      var bar = new ProgressBar.Circle(this, {
        color: '#c00',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#c00', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = 'Offline'
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }

        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '2rem';
      bar.animate(1.0);
    });
  }
}
