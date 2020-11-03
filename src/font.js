!(function(t) {
  var a,
    l,
    e,
    o,
    c,
    d,
    i =
      '<svg><symbol id="i-double-left" viewBox="0 0 1024 1024"><path d="M842.666667 864c-8.533333 0-14.933333-2.133333-21.333334-8.533333l-341.333333-309.333334c-6.4-6.4-10.666667-14.933333-10.666667-23.466666 0-8.533333 4.266667-17.066667 10.666667-23.466667l341.333333-309.333333c12.8-12.8 34.133333-10.666667 44.8 2.133333 12.8 12.8 10.666667 34.133333-2.133333 44.8L548.266667 522.666667l315.733333 285.866666c12.8 10.666667 14.933333 32 2.133333 44.8-6.4 6.4-14.933333 10.666667-23.466666 10.666667z"  ></path><path d="M512 864c-8.533333 0-14.933333-2.133333-21.333333-8.533333L149.333333 546.133333c-6.4-6.4-10.666667-14.933333-10.666666-23.466666 0-8.533333 4.266667-17.066667 10.666666-23.466667L490.666667 189.866667c12.8-12.8 34.133333-10.666667 44.8 2.133333 12.8 12.8 10.666667 34.133333-2.133334 44.8L217.6 522.666667 533.333333 808.533333c12.8 12.8 14.933333 32 2.133334 44.8-6.4 6.4-14.933333 10.666667-23.466667 10.666667z"  ></path></symbol><symbol id="i-double-right" viewBox="0 0 1024 1024"><path d="M544 522.666667c0-8.533333-4.266667-17.066667-10.666667-23.466667L192 189.866667c-12.8-12.8-34.133333-10.666667-44.8 2.133333-12.8 12.8-10.666667 34.133333 2.133333 44.8l315.733334 285.866667L149.333333 808.533333c-12.8 12.8-14.933333 32-2.133333 44.8 6.4 6.4 14.933333 10.666667 23.466667 10.666667 8.533333 0 14.933333-2.133333 21.333333-8.533333l341.333333-309.333334c6.4-6.4 10.666667-14.933333 10.666667-23.466666z"  ></path><path d="M864 499.2l-341.333333-309.333333c-12.8-12.8-34.133333-10.666667-44.8 2.133333-12.8 12.8-10.666667 34.133333 2.133333 44.8l315.733333 285.866667-315.733333 285.866666c-12.8 12.8-14.933333 32-2.133333 44.8 6.4 6.4 14.933333 10.666667 23.466666 10.666667 8.533333 0 14.933333-2.133333 21.333334-8.533333l341.333333-309.333334c6.4-6.4 10.666667-14.933333 10.666667-23.466666 0-8.533333-4.266667-17.066667-10.666667-23.466667z"  ></path></symbol><symbol id="i-dots" viewBox="0 0 1024 1024"><path d="M176 510.4m-111.9 0a111.9 111.9 0 1 0 223.8 0 111.9 111.9 0 1 0-223.8 0Z" fill="#666666" ></path><path d="M511.7 510.4m-111.9 0a111.9 111.9 0 1 0 223.8 0 111.9 111.9 0 1 0-223.8 0Z" fill="#666666" ></path><path d="M847.4 510.4m-111.9 0a111.9 111.9 0 1 0 223.8 0 111.9 111.9 0 1 0-223.8 0Z" fill="#666666" ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M589.088 790.624L310.464 512l278.624-278.624 45.248 45.248L400.96 512l233.376 233.376z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M434.944 790.624l-45.248-45.248L623.04 512l-233.376-233.376 45.248-45.248L713.568 512z"  ></path></symbol><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M467.72740654 916.24168232v-136.05845449a44.22273662 44.22273662 0 1 1 88.49533008 0v136.10831133a44.27259346 44.27259346 0 1 1-88.49533008 0"  ></path><path d="M684.80271231 894.70366367L616.69870068 776.89269776a44.37230625 44.37230625 0 0 1 76.72918974-44.37230625l68.05415567 117.9106787a44.27259346 44.27259346 0 0 1-76.43005137 44.72130235l-0.24928242-0.49856485"  ></path><path d="M278.72132451 910.90703428a44.27259346 44.27259346 0 0 1-16.2033706-60.47596407l68.05415566-117.86082274a44.27259346 44.27259346 0 0 1 76.62947695 44.32245029l-68.00429882 117.81096591a44.27259346 44.27259346 0 0 1-60.42610723 16.25322745v-0.04985684"  ></path><path d="M831.97917089 747.72663154l-117.86082274-68.00429883a44.22273662 44.22273662 0 0 1 44.27259345-76.67933466l117.86082275 68.05415566a44.32244942 44.32244942 0 0 1-44.27259346 76.62947783z"  ></path><path d="M113.74608623 731.57311778a44.22273662 44.22273662 0 0 1 16.20337061-60.47596407l117.86082275-68.05415566a44.22273662 44.22273662 0 1 1 44.27259346 76.62947783l-117.91067959 68.05415566a44.22273662 44.22273662 0 0 1-60.42610723-16.10365781z"  ></path><path d="M780.32781231 546.90455234a44.22273662 44.22273662 0 1 1-1e-8-88.54518692h136.10831046a44.27259346 44.27259346 0 1 1 0 88.54518692h-136.10831045z"  ></path><path d="M107.56387724 546.90455234a44.22273662 44.22273662 0 1 1 0-88.54518692h136.10831045a44.27259346 44.27259346 0 1 1 0 88.54518692H107.56387724z"  ></path><path d="M697.96483438 403.26790713a44.22273662 44.22273662 0 0 1 16.2033706-60.47596406l117.91067871-68.05415479a44.27259346 44.27259346 0 0 1 45.71843291 75.78191602l-1.49569541 0.89741777-117.86082275 68.00429883a44.17288066 44.17288066 0 0 1-60.42610723-16.10365781z"  ></path><path d="M247.81027959 419.47127685L129.94945683 351.41712207a44.27259346 44.27259346 0 0 1 44.22273663-76.67933379L292.13272901 342.79194307a44.27259346 44.27259346 0 1 1-43.27546289 77.2776123l-0.99713057-0.64813447v0.04985595z"  ></path><path d="M632.95192724 323.44761201a44.27259346 44.27259346 0 0 1-16.2033706-60.42610722V262.921792l68.05415566-117.86082276a44.22273662 44.22273662 0 1 1 78.22488604 41.38091455l-1.59540908 2.89167891-68.00429884 117.86082275a44.27259346 44.27259346 0 0 1-60.42610634 16.25322656l-0.04985684-0.04985683"  ></path><path d="M330.52225273 307.19438545L262.66752354 189.33356269a44.22273662 44.22273662 0 0 1 76.57962099-44.27259345L407.25144336 262.921792a44.27259346 44.27259346 0 1 1-76.43005137 44.72130146l-0.24928242-0.44870801"  ></path><path d="M467.62769375 242.38090391V106.27259346a44.22273662 44.22273662 0 1 1 88.54518692 0v136.10831045a44.32244942 44.32244942 0 0 1-88.54518692 0"  ></path></symbol><symbol id="i-down" viewBox="0 0 1024 1024"><path d="M895.701333 300.117333c0 9.6-3.2 19.285333-9.6 27.392l-340.906666 423.808a43.733333 43.733333 0 0 1-68.096 0L137.984 329.301333A43.690667 43.690667 0 0 1 206.08 274.602667l305.109333 379.605333 306.773334-381.525333a43.690667 43.690667 0 0 1 77.738666 27.434666z"  ></path></symbol><symbol id="i-thumbs-up" viewBox="0 0 1024 1024"><path d="M664.689778 367.502222a424.391111 424.391111 0 0 0 14.961778-107.463111l-2.104889-11.093333c4.494222 11.036444-3.527111-48.128-15.246223-82.488889-21.390222-62.919111-61.098667-103.424-122.88-103.424-58.481778 0-91.761778 35.612444-110.762666 94.606222-4.323556 13.425778-15.928889 60.302222-13.653334 51.768889l-1.024 3.811556c-29.184 113.095111-94.037333 182.044444-183.352888 186.254222h-110.364445C66.844444 404.309333 29.923556 438.044444 28.444444 482.645333c-0.568889 17.92-0.568889 150.016-0.113777 399.303111A85.333333 85.333333 0 0 0 113.664 967.111111h613.831111a130.844444 130.844444 0 0 0 121.230222-81.521778l129.479111-318.350222A142.222222 142.222222 0 0 0 846.506667 371.484444h-182.897778l1.080889-3.868444zM482.816 175.104c12.231111-38.115556 28.16-55.125333 56.604444-55.125333 32.597333 0 54.613333 22.471111 69.063112 64.853333 6.542222 19.171556 12.629333 56.092444 15.189333 74.581333h-0.910222a367.786667 367.786667 0 0 1-12.913778 93.127111 228.750222 228.750222 0 0 1-12.174222 35.100445l-19.626667 40.732444h268.458667a85.333333 85.333333 0 0 1 79.018666 117.532445l-129.479111 318.293333a73.955556 73.955556 0 0 1-68.494222 46.08H113.664a28.444444 28.444444 0 0 1-28.444444-28.387555c-0.455111-247.068444-0.455111-380.529778 0.113777-397.368889 0.455111-13.937778 13.653333-25.998222 37.546667-28.216889l109.112889 0.113778c119.182222-5.688889 202.24-93.980444 236.828444-228.124445l1.194667-4.266667c-1.479111 5.404444 9.216-37.774222 12.8-48.924444z"  ></path><path d="M199.111111 426.666667V910.222222h56.888889V426.666667z"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M786.278104 462.723699c-77.658266 83.287306-155.32837 166.562775-233.004393 249.844162-3.190382 3.427145-6.434035 6.78326-9.606659 10.228162-12.501087 13.578358-27.079769 21.237642-44.748208 14.063723-5.75926-2.338035-10.044671-5.865803-13.702659-9.867099a54.798798 54.798798 0 0 1-6.937156-6.01378c-39.930081-41.617017-210.091653-224.587468-249.394312-266.891098-4.22622-4.54585-8.286705-9.423168-11.613226-14.732578-10.683931-17.035098-9.227838-33.720971 3.450821-48.631122 12.962775-15.247538 29.299422-15.886798 45.393387-7.398844 7.813179 4.113757 14.247214 11.678335 20.604301 18.449758 26.458266 28.127445 122.169711 130.604393 186.243699 199.395884-0.035514-107.443052-0.041434-214.880185-0.023676-322.329156 0-32.25896-0.95889-64.57711 0.532717-96.759121 1.396902-29.897249 14.927908-45.150705 36.727861-45.914266 22.356347-0.787237 35.922867 13.809202 38.971191 43.292115 1.15422 11.169295 0.544555 22.551676 0.550474 33.845272 0.035514 70.969711 0.017757 141.95126 0.017757 212.92689v159.223122l10.311029 4.889156c19.90585-21.24948 39.835376-42.487121 59.717549-63.772116 41.516393-44.458173 82.500069-89.508254 124.750428-133.161434 19.077179-19.71052 41.184925-20.03015 56.373272-4.53993 16.372162 16.697711 15.798012 36.579884-2.036162 59.977988-3.788208 4.977942-8.32222 9.316624-12.578035 13.874312"  ></path><path d="M161.188254 722.405364c0.982566-21.172532 16.366243-32.868624 36.668671-32.436532 20.113017 0.438012 33.377665 12.335353 35.26585 33.975492 1.385064 15.898636 0.195329 31.968925 0.580069 47.950427 0.95889 40.119491 10.618821 49.388763 55.195376 50.18192 42.931052 0.763561 85.903538 0.248601 128.852346 0.25452 99.239214 0.005919 198.472509 0.071029 297.711723-0.053272 68.341642-0.082867 74.260717-5.398197 74.592185-65.174936 0.059191-10.654335-0.538636-21.379699 0.550474-31.963006 2.320277-22.516162 14.045965-34.230012 33.904462-35.236254 21.444809-1.095029 37.065249 12.015723 38.710752 35.218497 1.497526 21.237642 0.651098 42.617341 0.497202 63.943768-0.50904 69.016416-34.49637 99.985017-111.23126 100.387515-79.978543 0.408416-159.963006 0.088786-239.947468 0.106543-23.694058 0.011838-47.394035 0.023676-71.088093 0.011838-60.729711-0.011838-121.477179 0.745803-182.183214-0.301872-53.520277-0.917457-92.657202-28.778543-97.173456-71.028902-3.39163-31.696647-2.379468-63.926012-0.905619-95.829827"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M867.68 512c0-37.276875 22.636875-70.0509375 57.6628125-83.495625l17.9325-6.883125-4.7428125-18.609375a437.6540625 437.6540625 0 0 0-47.8078125-115.5178125l-9.8015625-16.51125-17.544375 7.8a89.9371875 89.9371875 0 0 1-36.7678125 7.8046875 88.430625 88.430625 0 0 1-63.0375-26.16c-26.3625-26.3625-33.5334375-65.5303125-18.264375-99.7828125l7.83375-17.578125-16.56-9.800625a440.02125 440.02125 0 0 0-115.584375-47.7984375l-18.575625-4.7334375-6.9028125 17.8846875c-13.5309375 35.055-46.3153125 57.7059375-83.510625 57.7059375-37.2721875 0-70.04625-22.636875-83.495625-57.6721875l-6.883125-17.923125-18.609375 4.738125a437.424375 437.424375 0 0 0-115.516875 47.8125l-16.5121875 9.8015625 7.8 17.544375c15.249375 34.2815625 8.0784375 73.45875-18.2596875 99.8015625-16.8234375 16.828125-39.249375 26.0971875-63.13875 26.0971875-12.7396875 0-25.0846875-2.60625-36.68625-7.7521875l-17.50125-7.7615625-9.80625 16.4503125a435.129375 435.129375 0 0 0-47.9184375 115.5496875l-4.7278125 18.5765625 17.8846875 6.901875c35.04 13.531875 57.68625 46.310625 57.68625 83.510625 0 37.2721875-22.636875 70.04625-57.6721875 83.50125l-17.9278125 6.8878125 4.738125 18.609375a437.8078125 437.8078125 0 0 0 47.8078125 115.5121875l9.8015625 16.516875 17.5490625-7.809375a89.8846875 89.8846875 0 0 1 36.763125-7.805625c23.821875 0 46.2 9.283125 63.0328125 26.15625 26.3671875 26.3653125 33.5334375 65.5340625 18.2690625 99.7865625l-7.83375 17.578125 16.56 9.800625a439.71375 439.71375 0 0 0 115.584375 47.79375l18.575625 4.7334375 6.9028125-17.885625c13.5459375-35.049375 46.3246875-57.695625 83.5246875-57.695625 37.276875 0 70.0509375 22.636875 83.50125 57.6675l6.8878125 17.9278125 18.609375-4.7428125a437.975625 437.975625 0 0 0 115.516875-47.803125l16.516875-9.80625-7.809375-17.5490625c-15.2503125-34.2815625-8.08875-73.4540625 18.25875-99.8015625 16.824375-16.828125 39.2446875-26.0971875 63.129375-26.0971875 12.7396875 0 25.0903125 2.6109375 36.691875 7.7521875l17.505 7.76625 9.8015625-16.455a435.24 435.24 0 0 0 47.9184375-115.545l4.7334375-18.609375-17.9240625-6.88875c-35.0296875-13.44375-57.6571875-46.2234375-57.6571875-83.495625z m-5.4909375 187.070625a133.1371875 133.1371875 0 0 0-35.578125-4.7953125c-35.43375 0-68.701875 13.7615625-93.68625 38.750625-34.36875 34.378125-46.7615625 83.4140625-33.901875 129.2540625a395.2171875 395.2171875 0 0 1-71.615625 29.634375c-23.319375-41.5190625-66.7734375-67.434375-115.4071875-67.434375-48.5475 0-91.996875 25.92-115.378125 67.44a396.1340625 396.1340625 0 0 1-71.7740625-29.683125c12.4846875-45.4846875-0.061875-95.4046875-33.8540625-129.1921875-24.975-25.040625-58.215-38.83125-93.6-38.83125-12.16875 0-24.10125 1.6171875-35.6596875 4.828125a394.7090625 394.7090625 0 0 1-29.649375-71.634375c41.52-23.319375 67.44-66.7734375 67.44-115.4071875 0-48.5521875-25.92-92.0015625-67.44-115.378125a391.790625 391.790625 0 0 1 29.7215625-71.6878125c11.5246875 3.1875 23.43375 4.7953125 35.578125 4.7953125 35.428125 0 68.701875-13.7615625 93.68625-38.750625 34.3725-34.3771875 46.7709375-83.409375 33.9121875-129.253125a394.3490625 394.3490625 0 0 1 71.6109375-29.63625c23.3184375 41.52 66.7725 67.44 115.4015625 67.44 48.5521875 0 91.996875-25.9153125 115.378125-67.44375a396.49875 396.49875 0 0 1 71.7740625 29.686875c-12.4903125 45.48 0.061875 95.4 33.849375 129.1921875 24.97875 25.0415625 58.224375 38.83125 93.6046875 38.83125a132.9121875 132.9121875 0 0 0 35.664375-4.828125 395.0109375 395.0109375 0 0 1 29.64375 71.6353125c-41.5190625 23.3090625-67.42875 66.759375-67.42875 115.396875 0 48.63375 25.910625 92.0878125 67.430625 115.40625a392.4628125 392.4628125 0 0 1-29.7215625 71.664375z"  ></path><path d="M512 379.0446875c-73.310625 0-132.9553125 59.6446875-132.9553125 132.9553125 0 73.3153125 59.6446875 132.96 132.9553125 132.96 73.3153125 0 132.96-59.6446875 132.96-132.96 0-73.310625-59.6446875-132.9553125-132.96-132.9553125z m0 222.7153125c-49.4925 0-89.7553125-40.2675-89.7553125-89.76s40.2675-89.7553125 89.7553125-89.7553125c49.4971875 0 89.76 40.2675 89.76 89.7553125 0 49.4971875-40.2628125 89.76-89.76 89.76z"  ></path></symbol></svg>',
    h = (h = document.getElementsByTagName('script'))[
      h.length - 1
    ].getAttribute('data-injectcss')
  if (h && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      )
    } catch (t) {
      console && console.log(t)
    }
  }
  function n() {
    c || ((c = !0), e())
  }
  ;(a = function() {
    var t, a, l, e
    ;((e = document.createElement('div')).innerHTML = i),
      (i = null),
      (l = e.getElementsByTagName('svg')[0]) &&
        (l.setAttribute('aria-hidden', 'true'),
        (l.style.position = 'absolute'),
        (l.style.width = 0),
        (l.style.height = 0),
        (l.style.overflow = 'hidden'),
        (t = l),
        (a = document.body).firstChild
          ? ((e = t), (l = a.firstChild).parentNode.insertBefore(e, l))
          : a.appendChild(t))
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(a, 0)
        : ((l = function() {
            document.removeEventListener('DOMContentLoaded', l, !1), a()
          }),
          document.addEventListener('DOMContentLoaded', l, !1))
      : document.attachEvent &&
        ((e = a),
        (o = t.document),
        (c = !1),
        (d = function() {
          try {
            o.documentElement.doScroll('left')
          } catch (t) {
            return void setTimeout(d, 50)
          }
          n()
        })(),
        (o.onreadystatechange = function() {
          'complete' == o.readyState && ((o.onreadystatechange = null), n())
        }))
})(window)
