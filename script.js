<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Random Number Generator with Statistics</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="container">
<h1>Random Number Generator</h1>
<div class="input-group">
    <label for="min">Minimum Value:</label>
    <input type="number" id="min" value="0">
</div>a
<div class="input-group">
    <label for="max">Maximum Value:</label>
    <input type="number" id="max" value="100">
</div>
<div class="input-group">
    <label for="decimals">Decimals:</label>
    <input type="number" id="decimals" value="2">
</div>
<div class="input-group">
    <label for="output">Number of Outputs:</label>
    <input type="number" id="output" value="10">
</div>
<div class="checkbox-group">
    <label><input type="checkbox" id="median" checked> <span class="tooltip-median tooltip">Median<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="mode" checked> <span class="tooltip-mode tooltip">Mode<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="mean" checked> <span class="tooltip-mean tooltip">Mean<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="stdDev" checked> <span class="tooltip-stdDev tooltip">Standard Deviation<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="mad" checked> <span class="tooltip-mad tooltip">MAD<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="variance" checked> <span class="tooltip-variance tooltip">Variance<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="range" checked> <span class="tooltip-range tooltip">Range<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="q1" checked> <span class="tooltip-q1 tooltip">Q1<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="q3" checked> <span class="tooltip-q3 tooltip">Q3<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="iqr" checked> <span class="tooltip-iqr tooltip">IQR<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="skewness" checked> <span class="tooltip-skewness tooltip">Skewness<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="kurtosis" checked> <span class="tooltip-kurtosis tooltip">Kurtosis<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="geometricMean" checked> <span class="tooltip-geometricMean tooltip">Geometric Mean<span class="tooltiptext"></span></span></label>
    <label><input type="checkbox" id="harmonicMean" checked> <span class="tooltip-harmonicMean tooltip">Harmonic Mean<span class="tooltiptext"></span></span></label>
</div>
<button onclick="generateRandomNumbers()">Generate</button>
<div class="loading-spinner" id="loading-spinner"></div>
<div class="results" id="results"></div>
<div class="statistics" id="statistics"></div>
</div>
<script src="script.js"></script>
</body>
</html>
