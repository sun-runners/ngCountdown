ngCountdown
=======

ngCountdown is an angularjs library that creates countdown and countup with flipclock.js

<br/>

DEMO
-------
https://kimsunwook.github.io/ngCountdown

(flipclock.js: https://github.com/objectivehtml/FlipClock)

<br/>

INSTALL
-------

```
bower install ngCountdown --save
```

<br/>

Quick start
-------

Copy-paste the stylesheet ```<script>``` into your ```<body>``` and ```<link>``` into your ```<head>```.

<br/>

flipclock.css
```
<link rel="stylesheet" href="./bower_components/flipclock/compiled/flipclock.css">
```

<br/>

flipclock.js
```
<script src=".bower_components/flipclock/compiled/flipclock.js"></script>
```
or
```
<script src=".bower_components/flipclock/compiled/flipclock.min.js"></script>
```

<br/>

ngCountdown.js
```
<script src=".bower_components/ng-countdown/ngCountdown.min.js"></script>
```
or
```
<script src=".bower_components/ng-countdown/ngCountdown.min.js"></script>
```
or
```
<script src="https://cdn.rawgit.com/KimSunWook/ngCountdown/v1.0.1/ngCountdown.js"></script>
```
or
```
<script src="https://cdn.rawgit.com/KimSunWook/ngCountdown/v1.0.1/ngCountdown.min.js"></script>
```

<br/>

USAGE
-----

Make sure you include the module 'ngCountdown' in your application config

app.js

```
angular.module('myApp', [
  'ngCountdown',
  ...
]);
```

view.html

```
<ng-countdown
  ng-init="time = 3600 * 24 * 30;" // 3600: 1hour, 3600*24: 24: 24hour, 3600 * 24 * 30: 30day
  ng-countdown-option="{clockFace:'DailyCounter', countdown:true}" // FlipClock option
  ng-countdown-time="time" // initial time (sec)
  ng-countdown-instance="instance" // FlipClock instance
>
</ng-countdown>

```

<br/>

Easy!
